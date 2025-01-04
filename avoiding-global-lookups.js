document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    for (let i = 0; i < 1000; i++) {
        const box = document.createElement('div');
        box.textContent = `Box #${i + 1}`;
        box.style.margin = '8px';
        box.style.backgroundColor = '#ccc';
        container.appendChild(box);
    }
});
