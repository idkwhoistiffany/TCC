// 1. Smooth scrolling para links de navegação
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // 2. Formulário de contato
        const form = document.getElementById('form-contato');
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            form.reset();
        });
        
        // 3. Efeito de scroll para o header
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            
            if (window.scrollY > 100) {
                header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
            } else {
                header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            }
        });
        
        // 4. Animação para os cards de serviço quando aparecem na tela
        const serviceCards = document.querySelectorAll('.service-card');
        
        function checkScroll() {
            serviceCards.forEach(card => {
                const cardPosition = card.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if (cardPosition < screenPosition) {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }
            });
        }
        
        serviceCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'all 0.5s ease';
        });
        
        window.addEventListener('load', checkScroll);
        window.addEventListener('scroll', checkScroll);
