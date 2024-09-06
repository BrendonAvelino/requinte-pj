const carrossels = document.querySelectorAll('.carrossel-inner');

carrossels.forEach(carrossel => {
    let idx = 0;
    const items = carrossel.querySelectorAll('.carrossel-item');
    const numItems = items.length;

    setInterval(() => {
        
        items[idx].classList.remove('active');

        
        idx = (idx + 1) % numItems;

        
        items[idx].classList.add('active');

        
        carrossel.style.transform = `translateX(-${idx * 100}%)`;
        
    }, 4000); 
});
