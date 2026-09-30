// ==========================================
// Вкладкаларды ауыстыру функциясы (Портфолио үшін)
// ==========================================
function openTab(evt, tabName) {
    const tabContents = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove('active');
    }

    const navBtns = document.getElementsByClassName('nav-btn');
    for (let i = 0; i < navBtns.length; i++) {
        navBtns[i].classList.remove('active');
    }

    document.getElementById(tabName).classList.add('active');
    evt.currentTarget.classList.add('active');
}

// ==========================================
// 1-ЗАДАНИЕ
// Спец. кнопка арқылы «Салам алейкум» -> «Сәлем әлем»
// ==========================================
const task1Text = document.getElementById('task1-text');
const task1Btn = document.getElementById('task1-btn');

if (task1Btn && task1Text) {
    task1Btn.addEventListener('click', function() {
        if (task1Text.textContent === 'Салам алейкум') {
            task1Text.textContent = 'Сәлем әлем';
        } else {
            task1Text.textContent = 'Салам алейкум';
        }
    });
}

// ==========================================
// 2-ЗАДАНИЕ. Элемент кластарын басқару
// Белсенді класты (active) қосу/жою (toggle),
// барлық кластарды консольге және жеке "p" тегіне басу
// ==========================================
const task2Element = document.getElementById('task2-element');
const task2ClassesP = document.getElementById('task2-classes');

if (task2Element && task2ClassesP) {
    // Алғашқы кластар тізімін көрсету
    task2ClassesP.textContent = 'Барлық кластар тізімі: ' + task2Element.className;

    task2Element.addEventListener('click', function() {
        // Белсенді класты элементке қосу (егер жоқ болса) немесе жою
        this.classList.toggle('active');

        // Барлық элемент кластарының тізімін консольге шығару
        console.log('Элементтің кластары:', this.className);

        // Жақын жердегі бөлек "p" тегіне басып шығару
        task2ClassesP.textContent = 'Барлық кластар тізімі: ' + this.className;
    });
}

// ==========================================
// 3-ЗАДАНИЕ. Кесте құру
// - createTable(rows, cols): көрсетілген өлшемді кесте құрады
// - ұяшықты басқанда таңдалған түске боялады
// - countCellsByColor(color): белгілі бір түстегі ұяшықтар саны
// ==========================================
const gridTable = document.getElementById('grid-table');
const rowsInput = document.getElementById('rows-input');
const colsInput = document.getElementById('cols-input');
const colorInput = document.getElementById('color-input');
const tableError = document.getElementById('table-error');
const colorResult = document.getElementById('color-result');

function createTable(rows, cols) {
    gridTable.innerHTML = '';

    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');

        for (let j = 0; j < cols; j++) {
            const td = document.createElement('td');
            td.dataset.color = ''; // бастапқыда боялмаған

            // Ұяшықты басқанда фондық түс өзгереді,
            // қайта басқанда бастапқы түсіне қайтады
            td.addEventListener('click', function() {
                if (td.dataset.color !== '') {
                    // ұяшық боялған -> бастапқы күйге қайтару
                    td.style.backgroundColor = '';
                    td.dataset.color = '';
                } else {
                    const color = colorInput.value.toLowerCase();
                    td.style.backgroundColor = color;
                    td.dataset.color = color;
                }
            });

            tr.appendChild(td);
        }

        gridTable.appendChild(tr);
    }

    colorResult.textContent = '';
}

function countCellsByColor(color) {
    const target = color.toLowerCase();
    let count = 0;
    const cells = gridTable.querySelectorAll('td');

    cells.forEach(function(td) {
        if (td.dataset.color === target) {
            count++;
        }
    });

    return count;
}

const createTableBtn = document.getElementById('create-table-btn');
const countColorBtn = document.getElementById('count-color-btn');

if (createTableBtn && gridTable) {
    createTableBtn.addEventListener('click', function() {
        const rows = parseInt(rowsInput.value, 10);
        const cols = parseInt(colsInput.value, 10);

        if (!Number.isInteger(rows) || !Number.isInteger(cols) ||
            rows < 1 || cols < 1 || rows > 20 || cols > 20) {
            tableError.textContent = 'Жолдар мен бағандар саны 1-ден 20-ға дейін болуы керек.';
            return;
        }

        tableError.textContent = '';
        createTable(rows, cols);
    });

    countColorBtn.addEventListener('click', function() {
        if (gridTable.rows.length === 0) {
            colorResult.textContent = 'Алдымен кестені құрыңыз.';
            return;
        }

        const color = colorInput.value;
        const n = countCellsByColor(color);
        colorResult.textContent = 'Түс ' + color.toUpperCase() + ': ' + n + ' ұяшық';
    });

    // Бастапқы кесте
    createTable(5, 5);
}

// ==========================================
// 4-ЗАДАНИЕ. Қараңғы тақырып (Dark theme)
// Бір ғана ауыстырғыш батырма: dark <-> light
// ==========================================
const themeToggle = document.getElementById('theme-toggle');
const themeLabel = document.getElementById('theme-label');
const themeIcon = document.getElementById('theme-icon');
const themeStatus = document.getElementById('theme-status');

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);

    const isDark = theme === 'dark';
    themeLabel.textContent = isDark ? 'Қараңғы режим' : 'Жарық режим';
    themeIcon.className = isDark ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
    if (themeStatus) {
        themeStatus.textContent = 'Қазіргі режим: ' + (isDark ? 'қараңғы' : 'жарық');
    }

    try {
        localStorage.setItem('theme', theme);
    } catch (e) {}
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
}

if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);

    let savedTheme = 'dark';
    try {
        savedTheme = localStorage.getItem('theme') || 'dark';
    } catch (e) {}
    applyTheme(savedTheme);
}