// J'attends que tout le HTML soit chargé avant de lancer mon script
document.addEventListener('DOMContentLoaded', () => {

    // Permet de récupérer le thème sauvegardé dans le navigateur, ou je mets 'light' par défaut
    let theme = localStorage.getItem('pt-theme') || 'light';

    // J'applique le thème direct sur la balise html
    document.documentElement.setAttribute('data-bs-theme', theme);
    // Et je mets à jour l'icône (soleil ou lune)
    updateThemeIcon(theme);

    // Ecoute le click , quand on clique sur le bouton il y'a une action ducoup la ca change de thème et l'icon
    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            theme = theme === 'light' ? 'dark' : 'light';

            // Je sauvegarde pour la prochaine fois
            localStorage.setItem('pt-theme', theme);

            // J'applique les changements
            document.documentElement.setAttribute('data-bs-theme', theme);
            updateThemeIcon(theme);
        });
    }
});

// Permet de changer l'icône du bouton
function updateThemeIcon(theme) {
    const icon = document.querySelector('#themeToggle i');
    if (icon) {

        icon.className = theme === 'light' ? 'bi bi-moon fs-5' : 'bi bi-sun fs-5';
    }
}
