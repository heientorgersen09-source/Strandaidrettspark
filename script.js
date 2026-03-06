// Finn alle knappene
const buttons = document.querySelectorAll('.ovelse-kort button');

// Se mer knapp for hver type øvelse
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const parent = btn.parentNode;
        const info = parent.querySelector('.mer-info');

        if (!info) return; // Hvis det ikke finnes gjør koden ingenting

        if (info.style.display === 'none') {
            info.style.display = 'block';
            btn.textContent = 'Se mindre ▲';
        } else {
            info.style.display = 'none';
            btn.textContent = 'Se mer ▼';
        }
    });
});