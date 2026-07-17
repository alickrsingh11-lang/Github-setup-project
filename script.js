const themeBtn = document.getElementById('theme-btn');

themeBtn.addEventListener('click', function() {
    // This script toggles a custom data attribute on the body element to switch the website between the default theme and a neon gaming theme while updating the button text.
    if (document.body.getAttribute('data-theme') === 'gaming') {
        document.body.removeAttribute('data-theme');
        themeBtn.textContent = 'Activate Gaming Mode';
        themeBtn.style.borderColor = '#ff6600';
        themeBtn.style.color = '#ff6600';
    } else {
        document.body.setAttribute('data-theme', 'gaming');
        themeBtn.textContent = 'Gaming Mode Active!';
        themeBtn.style.borderColor = '#00ffff';
        themeBtn.style.color = '#00ffff';
    }
});