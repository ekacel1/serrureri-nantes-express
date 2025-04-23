// JavaScript principal
document.addEventListener('DOMContentLoaded', function() {
    // Code à exécuter une fois que le DOM est chargé
    console.log('Site Serrurier Nantes Express chargé');

    // Gestion du formulaire de rappel
    const callbackForm = document.getElementById('callback-form');
    if (callbackForm) {
        // Créer un élément pour les messages de retour
        const formMessage = document.createElement('div');
        formMessage.style.marginTop = '15px';
        formMessage.style.padding = '10px';
        formMessage.style.borderRadius = '5px';
        formMessage.style.textAlign = 'center';
        formMessage.style.display = 'none'; // Caché par défaut
        callbackForm.parentNode.insertBefore(formMessage, callbackForm.nextSibling);

        callbackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            formMessage.style.display = 'none'; // Cacher l'ancien message

            const submitButton = this.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            submitButton.textContent = 'Envoi en cours...';
            submitButton.disabled = true;

            // Simulation d'envoi (remplacer par un vrai appel AJAX si nécessaire)
            setTimeout(() => {
                // Ici, vous pourriez ajouter une validation plus poussée si besoin
                const nameInput = this.querySelector('input[name="nom"]');
                const phoneInput = this.querySelector('input[name="telephone"]');

                if (nameInput.value.trim() === '' || phoneInput.value.trim() === '') {
                    formMessage.textContent = 'Veuillez remplir les champs nom et téléphone.';
                    formMessage.style.backgroundColor = '#f8d7da';
                    formMessage.style.color = '#721c24';
                    submitButton.textContent = originalButtonText;
                    submitButton.disabled = false;
                } else {
                    formMessage.textContent = 'Merci ! Nous avons bien reçu votre demande et vous rappellerons bientôt.';
                    formMessage.style.backgroundColor = '#d4edda';
                    formMessage.style.color = '#155724';
                    this.reset(); // Réinitialiser le formulaire après succès
                    submitButton.textContent = originalButtonText; 
                    submitButton.disabled = false; // Réactiver après un court délai ou garder désactivé?
                     // Gardons le bouton actif après succès pour une autre demande
                }
                
                formMessage.style.display = 'block'; // Afficher le message
                
                // Optionnel: Cacher le message après quelques secondes
                setTimeout(() => { formMessage.style.display = 'none'; }, 5000);

            }, 1000); // Simule un délai réseau
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
    const body = document.body;
    if (header) {
        const headerHeight = header.offsetHeight; // Obtenir la hauteur du header

        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('sticky');
                body.classList.add('header-sticky-padding');
                body.style.paddingTop = `${headerHeight}px`; // Appliquer le padding dynamiquement
            } else {
                header.classList.remove('sticky');
                body.classList.remove('header-sticky-padding');
                body.style.paddingTop = '0'; // Retirer le padding
            }
        });
    }

    // Hamburger Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const menuIcon = menuToggle ? menuToggle.querySelector('i') : null; // Get the icon element

    if (menuToggle && mobileNav && menuIcon) {
        menuToggle.addEventListener('click', () => {
            mobileNav.classList.toggle('active');

            // Change icon based on menu state
            if (mobileNav.classList.contains('active')) {
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-times'); // Change to close icon
            } else {
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars'); // Change back to bars icon
            }
        });
        
        // Optional: Close menu when a link is clicked (useful for SPAs)
        const mobileNavLinks = mobileNav.querySelectorAll('a');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (mobileNav.classList.contains('active')) {
                    mobileNav.classList.remove('active');
                    menuIcon.classList.remove('fa-times');
                    menuIcon.classList.add('fa-bars');
                }
            });
        });
    }
});
