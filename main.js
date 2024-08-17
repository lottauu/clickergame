let clickCount = 0;
document.getElementById('cookie').addEventListener('click', function(event) {
    clickCount++;
    document.getElementById('laskuri').textContent = clickCount;

    const plusOne = document.createElement('div');
            plusOne.textContent = '+1';
            plusOne.classList.add('plus-one');
            document.body.appendChild(plusOne);

        const x = event.clientX;
        const y = event.clientY;
        plusOne.style.left = `${x}px`;
        plusOne.style.top = `${y}px`;

            // +1 näkyvistä pois
            setTimeout(() => {
                plusOne.remove();
            }, 200);


    if (clickCount > 1000) {
        alert("Voitit pelin!");
        clickCount = 0;
        document.getElementById('laskuri').textContent = clickCount;
    }
});

