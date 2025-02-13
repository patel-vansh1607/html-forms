document.querySelectorAll('.menu li').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.menu li').forEach(li => li.classList.remove('active'));
        item.classList.add('active');
    });
});