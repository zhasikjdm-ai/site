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