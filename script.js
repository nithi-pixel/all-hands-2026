// Initialize Lucide Icons
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all Lucide icons
    lucide.createIcons();
    
    // Initialize scroll tracking
    initScrollTracking();
    
    // Initialize navigation
    initNavigation();
});

// ===========================
// Scroll Tracking
// ===========================
function initScrollTracking() {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.content-section');
    
    // Create Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                
                // Remove active class from all nav items
                navItems.forEach(item => item.classList.remove('active'));
                
                // Add active class to corresponding nav item
                const activeNavItem = document.querySelector(`.nav-item[data-section="${sectionId}"]`);
                if (activeNavItem) {
                    activeNavItem.classList.add('active');
                }
            }
        });
    }, observerOptions);
    
    // Observe all sections
    sections.forEach(section => {
        observer.observe(section);
    });
}

// ===========================
// Navigation
// ===========================
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section');
            const section = document.getElementById(sectionId);
            
            if (section) {
                const yOffset = -100;
                const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
                
                window.scrollTo({
                    top: y,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===========================
// Animate on Scroll
// ===========================
const animateOnScroll = function() {
    const elements = document.querySelectorAll('.subsection-card, .goal-card, .appreciation-card, .event-card, .celebration-card');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
};

// Initialize animate on scroll after page load
window.addEventListener('load', animateOnScroll);

// ===========================
// Smooth Hover Effects
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth transitions to all interactive elements
    const interactiveElements = document.querySelectorAll('.content-card, .client-card, .training-card, .stat-card, .article-card, .csr-card');
    
    interactiveElements.forEach(element => {
        element.style.transition = 'all 0.3s ease';
    });
});
