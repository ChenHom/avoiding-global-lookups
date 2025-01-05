document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    for (let i = 0; i < 2000; i++) {
        const box = document.createElement('div');
        box.textContent = `Box #${i + 1}`;
        box.style.margin = '8px';
        box.style.backgroundColor = '#ccc';
        box.style.display = 'inline-block';
        container.appendChild(box);
    }
});

document.addEventListener('click', () => {
    // const boxes = container.children;
    // const doc = document;
    // console.time('querySelectorAll2');
    console.time('querySelectorAll');
    // const boxes = doc.querySelectorAll('div');
    const boxes = document.querySelectorAll('div');
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = 'lightblue';
    }
    // console.timeEnd('querySelectorAll2');
    console.timeEnd('querySelectorAll');
});

