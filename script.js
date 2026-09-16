function openTab(tabId) {
    // Скрываем все вкладки
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    // Делаем кнопки неактивными
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Активируем нужную вкладку и кнопку
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}