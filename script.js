// 햄버거 메뉴 토글
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// 스크롤 시 네비게이션 바 스타일 변경
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = '#fff';
        header.style.backdropFilter = 'none';
    }
});

// 부드러운 스크롤
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// FAQ 아코디언
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        // 현재 아이템 토글
        item.classList.toggle('active');
        
        // 다른 아이템들은 닫기
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
    });
});

// 폼 제출 처리 - 카카오톡 링크로 변경
const inquiryForm = document.getElementById('inquiryForm');

// 폼이 없어졌으므로 이 코드는 실행되지 않습니다
// 필요시 나중에 다시 활성화 가능
/*
inquiryForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(inquiryForm);
    const submitBtn = inquiryForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;
    
    // 로딩 상태 표시
    submitBtn.textContent = '전송 중...';
    submitBtn.disabled = true;
    
    // 폼 데이터 수집
    const data = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        inquiryType: formData.get('inquiryType'),
        message: formData.get('message'),
        timestamp: new Date().toISOString()
    };
    
    // 여기서 실제로는 서버로 데이터를 전송해야 합니다
    // 현재는 시뮬레이션만 합니다
    setTimeout(() => {
        alert('상담 신청이 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.');
        inquiryForm.reset();
        
        // 버튼 상태 복원
        submitBtn.textContent = originalBtnText;
        submitBtn.disabled = false;
    }, 2000);
});
*/

// 애니메이션 관찰자
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 요소들에 애니메이션 적용
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.guide-card, .tip-card, .faq-item');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
});

// 모바일 메뉴 닫기 (메뉴 아이템 클릭 시)
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

// 연락처 입력 시 자동 하이픈 추가
const phoneInput = document.getElementById('phone');
phoneInput?.addEventListener('input', (e) => {
    let value = e.target.value.replace(/[^0-9]/g, '');
    
    if (value.length >= 11) {
        value = value.slice(0, 11);
    }
    
    if (value.length >= 7) {
        value = value.slice(0, 3) + '-' + value.slice(3, 7) + '-' + value.slice(7);
    } else if (value.length >= 4) {
        value = value.slice(0, 3) + '-' + value.slice(3);
    }
    
    e.target.value = value;
});

// 플로팅 메뉴 기능
const scrollTopBtn = document.getElementById('scrollTopBtn');
const kakaoChatBtn = document.getElementById('kakaoChatBtn');
const callBtn = document.getElementById('callBtn');

// 스크롤 상단 버튼 표시/숨김
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

// 최상단으로 이동
scrollTopBtn?.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 카카오톡 상담
kakaoChatBtn?.addEventListener('click', () => {
    // 카카오톡 문의 링크로 이동
    window.open('http://pf.kakao.com/_xkmxaxkn/chat', '_blank');
});

// 전화 상담
callBtn?.addEventListener('click', () => {
    // 전화 걸기 (실제 전화번호로 교체 필요)
    window.location.href = 'tel:010-1234-5678';
});

// 플로팅 버튼 애니메이션
const floatingButtons = document.querySelectorAll('.floating-btn');
floatingButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-3px) scale(1.05)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0) scale(1)';
    });
});