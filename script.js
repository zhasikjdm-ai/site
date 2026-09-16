// Переключение вкладок
function openTab(event, tabId) {
    if (event) {
        event.preventDefault();
    }

    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    const activeTab = document.getElementById(tabId);
    if (activeTab) {
        activeTab.classList.add('active');
    }

    const activeBtn = document.getElementById('btn-' + tabId);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

// 4D Эффект объёмного наклона карточек при движении мыши (3D Tilt)
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.tilt-card');
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const cardX = rect.left + rect.width / 2;
        const cardY = rect.top + rect.height / 2;

        const angleX = (cardY - mouseY) / 30;
        const angleY = (mouseX - cardX) / 30;

        // Применяем объёмный поворот карточек
        if (
            mouseX >= rect.left - 50 && mouseX <= rect.right + 50 &&
            mouseY >= rect.top - 50 && mouseY <= rect.bottom + 50
        ) {
            card.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) translateZ(10px)`;
        } else {
            card.style.transform = `rotateX(0deg) rotateY(0deg) translateZ(0px)`;
        }
    });
});