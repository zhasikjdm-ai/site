function openTab(event, tabId) {
    if (event) {
        event.preventDefault();
    }

    // 1. Скрываем все вкладки
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    // 2. Снимаем выделение со всех кнопок вкладок
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // 3. Показываем выбранную вкладку
    const activeTab = document.getElementById(tabId);
    if (activeTab) {
        activeTab.classList.add('active');
    }

    // 4. Подсвечиваем нужную кнопку вкладки
    const activeBtn = document.getElementById('btn-' + tabId);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }

    // 5. Плавная прокрутка к блоку с вкладками
    document.getElementById('content-section').scrollIntoView({
        behavior: 'smooth'
    });
}