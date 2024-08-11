// Dil değişkenlerini tanımlayın
const content = {
    tr: {
        greeting: "Merhaba!",
        intro: "Ben Ali, diş hekimliği öğrencisiyim ve sağlık alanındaki bu yolculuğumda teknolojiyle olan tutkumla da kendimi geliştiriyorum. Diş hekimliği eğitiminin yanı sıra, React Native, Python ve web tasarımı gibi alanlarda da kendimi geliştirdim ve ara sıra kod yazıyorum.",
        passion: "Bunun dışında, grafik tasarım benim için bir tutku. Görsel tasarımın, etkili bir iletişimin anahtarı olduğuna inanıyorum ve bu alandaki becerilerimi sürekli olarak geliştirmeye çalışıyorum.",
        education: "Kazakistan'da eğitim almaktayım. Rusça ve Kazakça öğreniyorum. Bu dillerdeki yetkinliğimi artırarak, hem eğitim hayatımda hem de gelecekteki profesyonel kariyerimde daha geniş bir perspektife sahip olmayı hedefliyorum.",
        projects: "Projeler",
        email: "E-posta"
    },
    en: {
        greeting: "Hello!",
        intro: "I'm Ali, a dentistry student, and I'm developing myself with my passion for technology on this journey in the healthcare field. In addition to my dental education, I have also developed skills in areas such as React Native, Python, and web design, and I occasionally write code.",
        passion: "Besides, graphic design is a passion for me. I believe that visual design is the key to effective communication, and I am constantly trying to improve my skills in this field.",
        education: "I am studying in Kazakhstan. I am learning Russian and Kazakh. By improving my proficiency in these languages, I aim to have a broader perspective both in my educational life and in my future professional career.",
        projects: "Projects",
        email: "Email"
    },
    ru: {
        greeting: "Привет!",
        intro: "Меня зовут Али, я студент стоматологического факультета, и я развиваю свои навыки, используя свои страсти к технологиям на этом пути в области здравоохранения. В дополнение к стоматологическому образованию, я также развил навыки в таких областях, как React Native, Python и веб-дизайн, и время от времени пишу код.",
        passion: "Кроме того, графический дизайн - это мое увлечение. Я считаю, что визуальный дизайн является ключом к эффективной коммуникации, и я постоянно стараюсь улучшать свои навыки в этой области.",
        education: "Я учусь в Казахстане. Я учу русский и казахский языки. Улучшая свои знания этих языков, я стремлюсь иметь более широкий кругозор как в учебной жизни, так и в будущей профессиональной карьере.",
        projects: "Проекты",
        email: "Электронная почта"
    },
    kz: {
        greeting: "Сәлем!",
        intro: "Мен Али, стоматология факультетінің студентімін және денсаулық сақтау саласында осы жолда технологияға деген құштарлығыммен дамып келемін. Стоматологиялық біліммен қатар, мен React Native, Python және веб-дизайн сияқты салаларда дағдыларымды дамытып, кейде код жазып тұрамын.",
        passion: "Сонымен қатар, графикалық дизайн - менің құмарлығым. Мен визуалды дизайнды тиімді қарым-қатынастың кілті деп санаймын және осы саладағы дағдыларымды үнемі жетілдіруге тырысамын.",
        education: "Мен Қазақстанда оқимын. Мен орыс және қазақ тілдерін үйреніп жүрмін. Осы тілдерде білімімді арттыра отырып, білім беру және болашақ кәсіби мансабымда кеңірек көзқарасқа ие болуды мақсат етіп отырмын.",
        projects: "Жобалар",
        email: "Электрондық пошта"
    }
};

// URL'deki `lang` parametresini alın
const urlParams = new URLSearchParams(window.location.search);
const lang = urlParams.get('lang') || 'tr'; // varsayılan dil Türkçe

// Sayfadaki metinleri değiştirin
document.getElementById('greeting').innerText = content[lang].greeting;
document.getElementById('intro').innerText = content[lang].intro;
document.getElementById('passion').innerText = content[lang].passion;
document.getElementById('education').innerText = content[lang].education;
document.getElementById('projects').innerText = content[lang].projects;
document.getElementById('email').innerText = content[lang].email;
