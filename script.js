const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const themeToggle = document.getElementById('themeToggle');
const langToggle = document.getElementById('langToggle');
const toTopButton = document.getElementById('toTop');

const i18n = {
    en: {
        navHome: 'Home', navHighlights: 'Highlights', navGallery: 'Art', navVoice: 'Voice', navVideos: 'Videos', navAbout: 'About', navContact: 'Contact',
        heroTag: 'Artist • Anime Voice Actor • Arabic Dubs',
        heroTitle: 'ilyokayo — Artist & Anime Voice Actor (Arabic Dubs)',
        heroSubtitle: 'Ilyas blends visual storytelling with expressive Arabic dubbing to bring anime scenes to life. 🍀',
        ctaYoutube: 'Watch on YouTube', ctaInstagram: 'Follow on Instagram', ctaContact: 'Contact',
        highlightsTitle: 'Highlights', highlight1: 'YouTube uploads', highlight2: 'Instagram followers', highlight3: 'Japanese anime dubbing', highlight4: 'Clean, fast performance',
        galleryTitle: 'Art Gallery', galleryIntro: 'Selected artworks — character studies, style explorations, and commissions. 🍀',
        voiceTitle: 'Voice Acting (Anime → Arabic)', voiceIntro: 'Dubbing highlights — energetic, in-character performances in Arabic.',
        voiceClip1: 'Clip / Reel 1', voiceClip2: 'Clip / Reel 2', voiceClip3: 'Clip / Reel 3',
        videosTitle: 'Featured Videos (Top 3)', videosIntro: 'Most-Viewed on YouTube — start here.', videoLink: 'Add link later',
        aboutTitle: 'About Ilyas',
        aboutText: 'I’m Ilyas (aka ilyokayo), a 15-year-old artist and Japanese anime voice actor. I create character-driven art and Arabic dubs of anime scenes. This one-page portfolio highlights my latest work and most-viewed videos. I also love plants — you’ll see subtle 🍀 touches throughout.',
        contactTitle: 'Contact', contactText: 'For collaborations, commissions, or dubbing projects, send a message.',
        labelName: 'Name', labelEmail: 'Email', labelMessage: 'Message', sendBtn: 'Send Message', emailLabel: 'Email:',
        phName: 'Your name', phEmail: 'Your email', phMessage: 'Tell me about your project', footerCredit: 'Programmed by'
    },
    ar: {
        navHome: 'الرئيسية', navHighlights: 'الإحصائيات', navGallery: 'الأعمال', navVoice: 'الدبلجة', navVideos: 'الفيديوهات', navAbout: 'نبذة', navContact: 'تواصل',
        heroTag: 'فنان • مؤدي صوتي أنمي • دبلجة عربية',
        heroTitle: 'ilyokayo — فنان ومؤدي صوتي للأنمي (دبلجة عربية)',
        heroSubtitle: 'إلياس يمزج السرد البصري مع أداء صوتي عربي تعبيري ليمنح مشاهد الأنمي حياةً مميزة. 🍀',
        ctaYoutube: 'شاهد على يوتيوب', ctaInstagram: 'تابع على إنستغرام', ctaContact: 'تواصل',
        highlightsTitle: 'أبرز الأرقام', highlight1: 'مقطع على يوتيوب', highlight2: 'متابع على إنستغرام', highlight3: 'دبلجة الأنمي الياباني للعربية', highlight4: 'تصميم نظيف وسريع',
        galleryTitle: 'معرض الأعمال', galleryIntro: 'أعمال مختارة — دراسات شخصيات، تجارب أسلوبية، وطلبات خاصة. 🍀',
        voiceTitle: 'الدبلجة الصوتية (أنمي → عربي)', voiceIntro: 'لقطات دبلجة حماسية بأداء تمثيلي داخل الشخصية.',
        voiceClip1: 'مقطع / ريل 1', voiceClip2: 'مقطع / ريل 2', voiceClip3: 'مقطع / ريل 3',
        videosTitle: 'أفضل 3 فيديوهات', videosIntro: 'الأكثر مشاهدة على يوتيوب — ابدأ من هنا.', videoLink: 'أضف الرابط لاحقًا',
        aboutTitle: 'عن إلياس',
        aboutText: 'أنا إلياس (ilyokayo)، عمري 15 سنة، فنان ومؤدي صوتي لأنمي ياباني بدبلجة عربية. أقدّم أعمالاً فنية تركز على الشخصيات ودبلجات عربية لمشاهد الأنمي. هذا الموقع يستعرض أحدث أعمالي وأكثر الفيديوهات مشاهدة، ومع لمسات نباتية 🍀 أحبها.',
        contactTitle: 'تواصل', contactText: 'للتعاون أو الطلبات الفنية أو مشاريع الدبلجة، أرسل رسالة.',
        labelName: 'الاسم', labelEmail: 'البريد الإلكتروني', labelMessage: 'الرسالة', sendBtn: 'إرسال', emailLabel: 'البريد:',
        phName: 'اسمك', phEmail: 'بريدك الإلكتروني', phMessage: 'اكتب تفاصيل مشروعك', footerCredit: 'برمجة'
    }
};

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (themeToggle) {
        themeToggle.innerHTML = theme === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    }
}

function setLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    localStorage.setItem('lang', lang);
    if (langToggle) langToggle.textContent = lang === 'ar' ? 'EN' : 'AR';

    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        if (i18n[lang][key]) el.textContent = i18n[lang][key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (i18n[lang][key]) el.setAttribute('placeholder', i18n[lang][key]);
    });
}

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        const open = navLinks.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', String(open));
    });

    navLinks.querySelectorAll('a').forEach((a) => {
        a.addEventListener('click', () => {
            navLinks.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') || 'light';
        setTheme(current === 'dark' ? 'light' : 'dark');
    });
}

if (langToggle) {
    langToggle.addEventListener('click', () => {
        const current = document.documentElement.lang === 'ar' ? 'ar' : 'en';
        setLanguage(current === 'ar' ? 'en' : 'ar');
    });
}

window.addEventListener('scroll', () => {
    if (!toTopButton) return;
    toTopButton.classList.toggle('show', window.scrollY > 340);
});

if (toTopButton) {
    toTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add('show');
        });
    },
    { threshold: 0.14 }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

setTheme(localStorage.getItem('theme') || 'light');
setLanguage(localStorage.getItem('lang') || 'en');
