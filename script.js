document.addEventListener("DOMContentLoaded", () => {
    // Add page turn transition effect to links
    const links = document.querySelectorAll('a');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            // Don't intercept if opening in new tab or external link
            if (this.target === '_blank' || this.href.startsWith('http') && !this.href.includes(window.location.host)) {
                return;
            }
            
            e.preventDefault();
            const targetUrl = this.href;
            
            // Add a slide-out animation to the body
            document.body.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            document.body.style.opacity = '0';
            document.body.style.transform = 'translateY(-10px)';
            
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 400);
        });
    });
});
