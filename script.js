function openTab(event, tabId) {
    if (event) {
        event.preventDefault();
    }

    // 1. Скрываем все окна с контентом
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    // 2. Снимаем активность со всех кнопок слева
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // 3. Открываем нужное окно
    const activeTab = document.getElementById(tabId);
    if (activeTab) {
        activeTab.classList.add('active');
    }

    // 4. Подсвечиваем нажатую кнопку
    const activeBtn = document.getElementById('btn-' + tabId);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}