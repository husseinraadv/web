// تفعيل القائمة المتحركة على الهواتف
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if(menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // تغيير الأيقونة
        const icon = menuToggle.querySelector('i');
        if(navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // إغلاق القائمة عند النقر على رابط
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.querySelector('i').classList.remove('fa-times');
            menuToggle.querySelector('i').classList.add('fa-bars');
        });
    });
}

// تأثير الكتابة المتحركة
const typingText = document.querySelector('.typing-text');
if(typingText) {
    const texts = ["اختبار الاختراق", "الأمن السيبراني", "الحلول التقنية"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeEffect() {
        const currentText = texts[textIndex];
        
        if (!isDeleting && charIndex <= currentText.length) {
            typingText.textContent = currentText.substring(0, charIndex);
            charIndex++;
            typingSpeed = 100;
        } else if (isDeleting && charIndex >= 0) {
            typingText.textContent = currentText.substring(0, charIndex);
            charIndex--;
            typingSpeed = 50;
        }

        if (!isDeleting && charIndex === currentText.length + 1) {
            isDeleting = true;
            typingSpeed = 1500; // انتظار قبل البدء في المسح
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 500; // انتظار قبل البدء في الكتابة الجديدة
        }

        setTimeout(typeEffect, typingSpeed);
    }
    // بدء التأثير بعد تحميل الصفحة
    setTimeout(typeEffect, 1000);
}

// النموذج (محاكاة الإرسال)
const contactForm = document.getElementById('contactForm');
if(contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // هنا يمكنك إضافة كود إرسال النموذج إلى خادم لاحقًا
        // للمحاكاة الآن:
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري الإرسال...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('شكرًا لك، IT HUSSEIN! تم استلام رسالتك بنجاح. سأتواصل معك قريبًا.');
            contactForm.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
}

// تحديث السنة في التذييل تلقائيًا
const currentYearSpan = document.getElementById('currentYear');
if(currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

// تأثير سلس للروابط الداخلية
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            e.preventDefault();
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// تأثير ظهور العناصر عند التمرير
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// مراقبة العناصر التي نريد إضافة تأثير لها
document.querySelectorAll('.skill-card, .about-content, .contact-wrapper > div').forEach(el => {
    observer.observe(el);
});
