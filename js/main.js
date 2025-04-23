// JavaScript principal
document.addEventListener('DOMContentLoaded', function() {
    // Code à exécuter une fois que le DOM est chargé
    console.log('Site Serrurier Nantes Express chargé');

    // Gestion du formulaire de rappel
    const callbackForm = document.getElementById('callback-form');
    if (callbackForm) {
        callbackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            // Simulation d'envoi du formulaire
            alert('Merci ! Nous vous rappellerons dans les plus brefs délais.');
            this.reset();
        });
    }

    // Animation douce du scroll pour les liens d'ancrage
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Ajout de la classe "sticky" au header lors du scroll
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }
        });
    }
});
