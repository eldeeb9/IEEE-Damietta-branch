


// ==================== 1. Page Navigation ====================
function showPage(pageId) {
    var pages = document.querySelectorAll('.page-section');
    for (var i = 0; i < pages.length; i++) {
        pages[i].classList.remove('active');
    }
    
    var links = document.querySelectorAll('.nav-link');
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove('active');
    }
    
    var targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    var activeLink = document.querySelector('[data-page="' + pageId + '"]');
    if (activeLink) {
        activeLink.classList.add('active');
    }
    
    window.scrollTo(0, 0);
    document.getElementById('nav-menu').classList.remove('active');
}

// ==================== 2. Navigation Links ====================
var navLinks = document.querySelectorAll('.nav-link');
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function() {
        var pageId = this.getAttribute('data-page');
        showPage(pageId);
    });
}

// ==================== 3. Mobile Menu Toggle ====================
function toggleMenu() {
    document.getElementById('nav-menu').classList.toggle('active');
}

// ==================== 4. Form Submission ====================
function submitForm(event) {
    event.preventDefault();
    alert('✅ تم إرسال طلبك بنجاح! سنتواصل معك قريباً');
    event.target.reset();
}

// ==================== 5. FAQ Accordion ====================
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.faq-question').forEach(function(question) {
        question.addEventListener('click', function() {
            var faqItem = this.parentElement;
            var isActive = faqItem.classList.contains('active');
            
            // Close all other items
            document.querySelectorAll('.faq-item').forEach(function(item) {
                item.classList.remove('active');
            });
            
            // Toggle current item
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
});

// ==================== 6. Scroll Animation ====================
document.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
});

// ==================== 7. Header Scroll Effect ====================
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ==================== 8. Scroll to Top Button ====================
const scrollTopBtn = document.createElement('div');
scrollTopBtn.className = 'scroll-to-top';
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==================== 9. Counter Animation ====================
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// ==================== 10. Intersection Observer for Animations ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(element => {
    observer.observe(element);
});

// ==================== 11. Smooth Scroll for Anchor Links ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== 12. Parallax Effect ====================
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax');
    parallaxElements.forEach(element => {
        const speed = element.getAttribute('data-speed') || 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ==================== 13. Button Ripple Effect ====================
document.querySelectorAll('.btn-primary, .btn-event, .join-form button').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// ==================== 14. Typing Effect for Hero Text ====================
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// ==================== 15. Loading Screen ====================
window.addEventListener('load', function() {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }
});

// ==================== 16. Active Link Highlight ====================
const sections = document.querySelectorAll('.page-section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', function() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === current) {
            link.classList.add('active');
        }
    });
});

// ==================== 17. Form Validation ====================
document.querySelectorAll('.join-form form').forEach(form => {
    form.addEventListener('submit', function(e) {
        const inputs = form.querySelectorAll('input, select');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.style.borderColor = 'red';
                isValid = false;
            } else {
                input.style.borderColor = '#e0e0e0';
            }
        });
        
        if (!isValid) {
            e.preventDefault();
            alert('⚠️ يرجى ملء جميع الحقول المطلوبة');
        }
    });
});

// ==================== 18. Card Flip Effect ====================
document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.classList.add('flipped');
    });
    
    card.addEventListener('mouseleave', function() {
        this.classList.remove('flipped');
    });
});

// ==================== 19. Image Lazy Loading ====================
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// ==================== 20. Toast Notification ====================
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: ${type === 'success' ? '#4CAF50' : '#f44336'};
        color: white;
        padding: 15px 30px;
        border-radius: 5px;
        z-index: 10000;
        animation: slideDown 0.3s ease;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideUp 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ==================== 21. Search Functionality ====================
function searchEvents(query) {
    const cards = document.querySelectorAll('.event-card');
    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        if (title.includes(query.toLowerCase())) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// ==================== 22. Dark Mode Toggle ====================
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
}

// Check saved preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// ==================== 23. Newsletter Subscription ====================
function subscribeNewsletter(email) {
    // Add your API call here
    showToast('✅ تم الاشتراك في النشرة البريدية بنجاح!', 'success');
}

// ==================== 24. Social Share ====================
function sharePage(platform) {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('IEEE Damietta Student Branch');
    
    const shareUrls = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
        twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
        linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}`,
        whatsapp: `https://wa.me/?text=${text} ${url}`
    };
    
    window.open(shareUrls[platform], '_blank');
}

// ==================== 25. Print Functionality ====================
function printPage() {
    window.print();
}

// ==================== 26. Copy to Clipboard ====================
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast('✅ تم النسخ بنجاح!', 'success');
    });
}

// ==================== 27. Countdown Timer ====================
function startCountdown(targetDate, element) {
    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = new Date(targetDate).getTime() - now;
        
        if (distance < 0) {
            clearInterval(interval);
            element.innerHTML = 'انتهى الوقت!';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        element.innerHTML = `${days} يوم ${hours} ساعة ${minutes} دقيقة ${seconds} ثانية`;
    }, 1000);
}

// ==================== 28. Event Registration ====================
function registerForEvent(eventId) {
    // Add your registration logic here
    showToast('✅ تم تسجيلك في الفعالية بنجاح!', 'success');
}

// ==================== 29. Filter Events ====================
function filterEvents(category) {
    const cards = document.querySelectorAll('.event-card');
    cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (category === 'all' || cardCategory === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// ==================== 30. Load More Events ====================
let loadMoreCount = 0;
const loadMoreLimit = 6;

function loadMoreEvents() {
    const cards = document.querySelectorAll('.event-card:not(.loaded)');
    const toLoad = cards.slice(loadMoreCount, loadMoreCount + loadMoreLimit);
    
    toLoad.forEach(card => {
        card.style.display = 'block';
        card.classList.add('loaded');
    });
    
    loadMoreCount += loadMoreLimit;
    
    if (loadMoreCount >= cards.length) {
        document.getElementById('load-more-btn').style.display = 'none';
    }
}











