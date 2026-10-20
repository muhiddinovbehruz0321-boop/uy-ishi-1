"use strict";

const $ = (selector, root = document) => root.querySelector(selector);
const content = $("#content");
const pageTitle = $("#pageTitle");
const modalRoot = $("#modalRoot");
const toastBox = $("#toast");

const courses = [
  {
    id: "html",
    title: "HTML asoslari",
    icon: "🌐",
    color: "#f28c45",
    level: "Boshlang‘ich",
    description: "Veb-sahifaning tuzilishini o‘rganing.",
    lessons: [
      {
        title: "HTML bilan tanishuv",
        duration: "10 daqiqa",
        text: "HTML veb-sahifaning tuzilishini yaratadi. Elementlar teglar yordamida yoziladi.",
        code: '<!DOCTYPE html>\n<html lang="uz">\n<head>\n  <meta charset="UTF-8">\n  <title>Mening sahifam</title>\n</head>\n<body>\n  <h1>Salom, dunyo!</h1>\n  <p>Mening birinchi sahifam.</p>\n</body>\n</html>',
        quiz: [
          { q: "HTML nima uchun ishlatiladi?", options: ["Sahifa tuzilishi uchun", "Faqat rasm chizish uchun", "Faqat ma'lumot saqlash uchun"], answer: 0, explanation: "HTML sahifa tuzilishini yaratadi." },
          { q: "Sarlavha uchun qaysi teg ishlatiladi?", options: ["<img>", "<h1>", "<br>"], answer: 1, explanation: "<h1> eng yuqori darajadagi sarlavha tegidir." }
        ]
      },
      {
        title: "Matn va sarlavhalar",
        duration: "12 daqiqa",
        text: "h1–h6 sarlavhalar, p paragraf, strong muhim matn va br yangi qator uchun ishlatiladi.",
        code: "<h1>Asosiy sarlavha</h1>\n<h2>Ikkinchi sarlavha</h2>\n<p>Bu paragraf.</p>\n<strong>Muhim matn</strong>",
        quiz: [
          { q: "Paragraf tegi qaysi?", options: ["<p>", "<h6>", "<divi>"], answer: 0, explanation: "<p> paragraf yaratadi." },
          { q: "Eng katta standart sarlavha qaysi?", options: ["<h6>", "<h1>", "<head>"], answer: 1, explanation: "<h1> birinchi darajali sarlavha." }
        ]
      },
      {
        title: "Havolalar va rasmlar",
        duration: "15 daqiqa",
        text: "a tegi havola, img tegi rasm qo‘shish uchun ishlatiladi. Rasm uchun alt matn yozish foydali.",
        code: '<a href="https://example.com">Saytga o‘tish</a>\n<img src="rasm.jpg" alt="Tabiat rasmi">',
        quiz: [
          { q: "Havola uchun qaysi teg kerak?", options: ["<a>", "<linktext>", "<url>"], answer: 0, explanation: "<a> havola yaratadi." },
          { q: "Rasm uchun qaysi teg ishlatiladi?", options: ["<picturetext>", "<img>", "<src>"], answer: 1, explanation: "<img> rasm ko‘rsatadi." }
        ]
      }
    ]
  },
  {
    id: "css",
    title: "CSS dizayn",
    icon: "🎨",
    color: "#45a7ff",
    level: "Boshlang‘ich",
    description: "Sayt ranglari, joylashuvi va ko‘rinishini boshqaring.",
    lessons: [
      {
        title: "CSS bilan tanishuv",
        duration: "12 daqiqa",
        text: "CSS HTML elementlarining rangini, o‘lchamini va ko‘rinishini belgilaydi.",
        code: "h1 {\n  color: #47caff;\n  font-size: 32px;\n}\n\np {\n  line-height: 1.7;\n}",
        quiz: [
          { q: "CSS nima uchun kerak?", options: ["Dizayn uchun", "Faqat server uchun", "Faqat ma'lumotlar bazasi uchun"], answer: 0, explanation: "CSS sahifaning ko‘rinishini boshqaradi." },
          { q: "Matn rangini qaysi xususiyat o‘zgartiradi?", options: ["font-size", "color", "margin"], answer: 1, explanation: "color matn rangini o‘zgartiradi." }
        ]
      },
      {
        title: "Margin va padding",
        duration: "14 daqiqa",
        text: "margin element tashqarisidagi bo‘shliq, padding esa element ichidagi bo‘shliq.",
        code: ".card {\n  margin: 20px;\n  padding: 16px;\n  border-radius: 12px;\n}",
        quiz: [
          { q: "Ichki bo‘shliq qaysi?", options: ["padding", "margin", "outline"], answer: 0, explanation: "padding element ichidagi bo‘shliq." },
          { q: "Burchaklarni yumaloqlash xususiyati?", options: ["border-radius", "display", "position"], answer: 0, explanation: "border-radius burchaklarni yumaloqlaydi." }
        ]
      },
      {
        title: "Flexbox",
        duration: "15 daqiqa",
        text: "Flexbox elementlarni qator yoki ustun bo‘yicha joylashtirishga yordam beradi.",
        code: ".container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 16px;\n}",
        quiz: [
          { q: "Flexbox qanday yoqiladi?", options: ["display: flex", "flex: on", "position: flex"], answer: 0, explanation: "display: flex konteynerni flex qiladi." },
          { q: "Elementlar orasidagi masofani qaysi xususiyat belgilaydi?", options: ["gap", "font", "color"], answer: 0, explanation: "gap elementlar orasidagi masofani belgilaydi." }
        ]
      }
    ]
  },
  {
    id: "js",
    title: "JavaScript",
    icon: "⚡",
    color: "#e8c84c",
    level: "O‘rta",
    description: "Saytga interaktivlik va funksiyalar qo‘shing.",
    lessons: [
      {
        title: "JavaScript bilan tanishuv",
        duration: "12 daqiqa",
        text: "JavaScript foydalanuvchi harakatlariga javob beradigan interaktiv funksiyalar yaratadi.",
        code: 'console.log("Salom, JavaScript!");\n\nconst ism = "Behruz";\nconsole.log("Salom, " + ism);',
        quiz: [
          { q: "Console ga ma'lumot chiqarish?", options: ["console.log()", "print.html()", "show.css()"], answer: 0, explanation: "JavaScript da console.log() ishlatiladi." },
          { q: "O‘zgarmas qiymat e'lon qilish?", options: ["const", "style", "echo"], answer: 0, explanation: "const qayta qiymat berilmaydigan bog‘lanish yaratadi." }
        ]
      },
      {
        title: "O‘zgaruvchilar va shartlar",
        duration: "15 daqiqa",
        text: "let va const qiymatlarni saqlash uchun, if va else esa shartlarni tekshirish uchun ishlatiladi.",
        code: 'let ball = 85;\n\nif (ball >= 60) {\n  console.log("O‘tdingiz");\n} else {\n  console.log("Yana urinib ko‘ring");\n}',
        quiz: [
          { q: "Shart tekshirish uchun nima ishlatiladi?", options: ["if", "img", "href"], answer: 0, explanation: "if shartni tekshiradi." },
          { q: "Qiymati o‘zgarishi mumkin bo‘lgan o‘zgaruvchi?", options: ["let", "const", "title"], answer: 0, explanation: "let bilan e'lon qilingan qiymatni qayta belgilash mumkin." }
        ]
      },
      {
        title: "Funksiyalar va hodisalar",
        duration: "18 daqiqa",
        text: "Funksiyalar kodni qayta ishlatish imkonini beradi. Hodisalar tugma bosilishi kabi harakatlarni kuzatadi.",
        code: 'function salomBer(ism) {\n  return "Salom, " + ism;\n}\n\nconsole.log(salomBer("Ali"));',
        quiz: [
          { q: "Funksiya e'lon qilish kalit so‘zi?", options: ["function", "fun", "make"], answer: 0, explanation: "function funksiya e'lon qiladi." },
          { q: "Tugma bosilishini tinglash uchun nima ishlatiladi?", options: ["addEventListener", "addColor", "newStyle"], answer: 0, explanation: "addEventListener hodisalarni tinglaydi." }
        ]
      }
    ]
  },
  {
    id: "python",
    title: "Python dasturlash",
    icon: "🐍",
    color: "#65d5a2",
    level: "Boshlang‘ich",
    description: "Python sintaksisi va dasturlash mantiqini o‘rganing.",
    lessons: [
      {
        title: "Python bilan tanishuv",
        duration: "12 daqiqa",
        text: "Python sodda sintaksisli dasturlash tili. print() yordamida ekranga ma’lumot chiqariladi.",
        code: 'print("Salom, dunyo!")\n\nism = "Behruz"\nprint("Salom", ism)',
        quiz: [
          { q: "Python da ekranga chiqarish?", options: ["console.show()", "print()", "write.css()"], answer: 1, explanation: "print() ma’lumotni chiqaradi." },
          { q: "Matn qanday yoziladi?", options: ['"Salom"', "Faqat qavssiz", "Faqat raqam bilan"], answer: 0, explanation: "Matn odatda qo‘shtirnoq yoki birtirnoqda yoziladi." }
        ]
      },
      {
        title: "O‘zgaruvchilar va sonlar",
        duration: "14 daqiqa",
        text: "O‘zgaruvchilar matn, butun son va boshqa qiymatlarni saqlashi mumkin.",
        code: 'ism = "Ali"\nyosh = 16\n\nprint(ism)\nprint(yosh + 1)',
        quiz: [
          { q: "Butun sonning misoli?", options: ['"16"', "16", '"Ali"'], answer: 1, explanation: "16 qo‘shtirnoqsiz butun son." },
          { q: "O‘zgaruvchi qiymatini chiqarish?", options: ["print(yosh)", "show(yosh)", "html(yosh)"], answer: 0, explanation: "print(yosh) qiymatni chiqaradi." }
        ]
      },
      {
        title: "Shartlar va sikllar",
        duration: "17 daqiqa",
        text: "if shartlarni tekshiradi, for esa ketma-ket elementlar bo‘ylab takrorlash uchun ishlatiladi.",
        code: 'for i in range(1, 6):\n    print(i)\n\nball = 80\nif ball >= 60:\n    print("O‘tdingiz")',
        quiz: [
          { q: "Takrorlash uchun qaysi kalit so‘z ishlatiladi?", options: ["for", "img", "href"], answer: 0, explanation: "for sikl yaratadi." },
          { q: "Shart uchun qaysi kalit so‘z?", options: ["if", "repeat", "style"], answer: 0, explanation: "if shartni tekshiradi." }
        ]
      }
    ]
  }
];

const allLessons = courses.flatMap(course =>
  course.lessons.map((lesson, index) => ({
    ...lesson,
    courseId: course.id,
    courseTitle: course.title,
    courseIcon: course.icon,
    index,
    id: `${course.id}-${index}`
  }))
);

const defaultTasks = [
  { id: 1, title: "HTML sahifa yaratish", description: "Sarlavha, paragraf va havola ishlating.", done: false },
  { id: 2, title: "CSS bilan bezash", description: "Rang, margin va padding xususiyatlarini qo‘llang.", done: false },
  { id: 3, title: "JavaScript tugmasi", description: "Tugma bosilganda xabar chiqaring.", done: false },
  { id: 4, title: "Python dasturi", description: "Ismni qabul qilib, salomlashadigan dastur yozing.", done: false }
];

const STORAGE_KEY = "itAcademyStateV1";

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    return {
      completed: Array.isArray(saved.completed) ? saved.completed : [],
      taskDone: saved.taskDone && typeof saved.taskDone === "object" ? saved.taskDone : {},
      scores: saved.scores && typeof saved.scores === "object" ? saved.scores : {},
      theme: saved.theme === "light" ? "light" : "dark"
    };
  } catch {
    return { completed: [], taskDone: {}, scores: {}, theme: "dark" };
  }
}

const state = loadState();
let currentPage = "dashboard";
let activeLessonId = null;
let toastTimer = null;
let quizState = null;
let chatHistory = [];

document.body.classList.toggle("light", state.theme === "light");
$("#year").textContent = new Date().getFullYear();

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    showToast("Saqlash imkoni bo‘lmadi. Brauzer xotirasini tekshiring.");
  }
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function showToast(message) {
  toastBox.textContent = message;
  toastBox.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastBox.classList.remove("show"), 2800);
}

function getCourse(id) {
  return courses.find(course => course.id === id);
}

function getLesson(id) {
  return allLessons.find(lesson => lesson.id === id);
}

function courseProgress(course) {
  const done = course.lessons.filter((lesson, index) =>
    state.completed.includes(`${course.id}-${index}`)
  ).length;
  return Math.round(done / course.lessons.length * 100);
}

function overallProgress() {
  return Math.round(state.completed.length / allLessons.length * 100);
}

function setPage(page) {
  currentPage = page;
  const titles = {
    dashboard: "Bosh sahifa",
    courses: "Kurslar",
    lessons: "Darslarim",
    tests: "Testlar",
    tasks: "Vazifalar",
    assistant: "AI yordamchi"
  };

  pageTitle.textContent = titles[page] || "IT ACADEMY";
  document.querySelectorAll(".nav-link[data-page]").forEach(button => {
    button.classList.toggle("active", button.dataset.page === page);
  });
  $("#sidebar").classList.remove("open");

  const renderers = {
    dashboard: renderDashboard,
    courses: renderCourses,
    lessons: renderLessons,
    tests: renderTests,
    tasks: renderTasks,
    assistant: renderAssistant
  };

  (renderers[page] || renderDashboard)();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function courseCard(course) {
  const progress = courseProgress(course);
  return `
    <article class="course-card">
      <div class="course-top">
        <div class="course-icon" style="color:${course.color}">${course.icon}</div>
        <span class="tag">${escapeHTML(course.level)}</span>
      </div>
      <h3>${escapeHTML(course.title)}</h3>
      <p>${escapeHTML(course.description)}</p>
      <div class="small muted">${course.lessons.length} ta dars · ${progress}% bajarilgan</div>
      <div class="progress-track"><div class="progress-fill" style="width:${progress}%"></div></div>
      <button class="btn primary" data-action="open-course" data-id="${course.id}">
        Kursni ko‘rish →
      </button>
    </article>`;
}

function renderDashboard() {
  const done = state.completed.length;
  const tasksDone = defaultTasks.filter(task => state.taskDone[task.id]).length;
  const avg = Object.values(state.scores);
  const average = avg.length
    ? Math.round(avg.reduce((sum, score) => sum + score, 0) / avg.length)
    : 0;

  const recent = allLessons.filter(lesson => !state.completed.includes(lesson.id)).slice(0, 3);

  content.innerHTML = `
    <section class="hero">
      <div class="eyebrow">Xush kelibsiz · IT ACADEMY</div>
      <h1>Bilimingizni oshiring.<br><span>Kelajagingizni yarating.</span></h1>
      <p>Dasturlashni bosqichma-bosqich o‘rganing, mashq qiling va natijalaringizni kuzatib boring.</p>
      <div class="hero-buttons">
        <button class="btn primary" data-action="go" data-page="courses">Kurslarni boshlash →</button>
        <button class="btn" data-action="go" data-page="assistant">AI yordamchiga savol</button>
      </div>
    </section>

    <section class="section">
      <div class="stats-grid">
        <article class="stat-card"><div class="stat-icon">▣</div><div class="stat-value">${courses.length}</div><div class="stat-label">Mavjud kurslar</div></article>
        <article class="stat-card"><div class="stat-icon">✓</div><div class="stat-value">${done}/${allLessons.length}</div><div class="stat-label">Tugatilgan darslar</div></article>
        <article class="stat-card"><div class="stat-icon">↗</div><div class="stat-value">${overallProgress()}%</div><div class="stat-label">Umumiy rivojlanish</div></article>
      </div>
    </section>

    <section class="section">
      <div class="section-heading"><h2>O‘rganishni davom ettiring</h2><button class="btn" data-action="go" data-page="lessons">Barcha darslar →</button></div>
      <div class="list">
        ${recent.length ? recent.map(lesson => `
          <article class="lesson-row">
            <div class="lesson-number">${lesson.courseIcon}</div>
            <div class="lesson-info"><h3>${escapeHTML(lesson.title)}</h3><p>${escapeHTML(lesson.courseTitle)} · ${escapeHTML(lesson.duration)}</p></div>
            <button class="btn primary" data-action="start-lesson" data-id="${lesson.id}">Darsni boshlash</button>
          </article>`).join("") : `<div class="panel empty-state"><strong>Tabriklaymiz!</strong>Barcha darslarni tugatdingiz.</div>`}
      </div>
    </section>

    <section class="section">
      <div class="section-heading"><h2>Ommabop kurslar</h2><button class="btn" data-action="go" data-page="courses">Barchasi →</button></div>
      <div class="course-grid">${courses.slice(0, 3).map(courseCard).join("")}</div>
    </section>

    <section class="section">
      <div class="panel">
        <div class="section-heading"><h2>O‘quvchi natijalari</h2><span class="tag">Ushbu qurilmada saqlanadi</span></div>
        <div class="stats-grid">
          <div><div class="stat-value">${tasksDone}/${defaultTasks.length}</div><div class="stat-label">Bajarilgan vazifalar</div></div>
          <div><div class="stat-value">${average}%</div><div class="stat-label">Testlarning o‘rtacha natijasi</div></div>
          <div><div class="stat-value">${Object.keys(state.scores).length}</div><div class="stat-label">Ishlangan testlar</div></div>
        </div>
      </div>
    </section>`;
}

function renderCourses() {
  content.innerHTML = `
    <div class="eyebrow">Bilimlar kutubxonasi</div>
    <h1>Barcha kurslar</h1>
    <p class="muted">O‘zingizga mos yo‘nalishni tanlang va darslarni bosqichma-bosqich yakunlang.</p>
    <div class="section course-grid">${courses.map(courseCard).join("")}</div>
    <section class="section panel">
      <h2>Kurslar haqida</h2>
      <p class="muted">Har bir kursda tushuntirish, kod namunasi va mavzuni mustahkamlash uchun testlar mavjud. Bu platforma namunaviy o‘quv kontenti bilan ishlaydi; kurslar soni va materiallarni keyinchalik kengaytirishingiz mumkin.</p>
    </section>`;
}

function renderLessons() {
  content.innerHTML = `
    <div class="eyebrow">O‘quv jarayoni</div>
    <h1>Darslarim</h1>
    <p class="muted">Darsni boshlang, mavzuni o‘rganing va yakunda test orqali bilimingizni tekshiring.</p>
    ${courses.map(course => `
      <section class="section">
        <div class="section-heading"><h2>${course.icon} ${escapeHTML(course.title)}</h2><span class="tag">${courseProgress(course)}% bajarilgan</span></div>
        <div class="list">
          ${course.lessons.map((lesson, index) => {
            const id = `${course.id}-${index}`;
            const done = state.completed.includes(id);
            return `<article class="lesson-row">
              <div class="lesson-number">${done ? "✓" : String(index + 1).padStart(2, "0")}</div>
              <div class="lesson-info"><h3>${escapeHTML(lesson.title)}</h3><p>${escapeHTML(lesson.duration)} · ${done ? "Tugatilgan" : "Boshlash mumkin"}</p></div>
              <div class="lesson-actions">
                <button class="btn primary" data-action="start-lesson" data-id="${id}">${done ? "Qayta ochish" : "Darsni boshlash"}</button>
                <button class="btn" data-action="lesson-test" data-id="${id}">Test</button>
              </div>
            </article>`;
          }).join("")}
        </div>
      </section>`).join("")}`;
}

function startLesson(id) {
  const lesson = getLesson(id);
  if (!lesson) {
    showToast("Dars topilmadi.");
    return;
  }

  activeLessonId = id;
  pageTitle.textContent = lesson.title;
  const done = state.completed.includes(id);

  content.innerHTML = `
    <div class="section-heading">
      <button class="btn" data-action="go" data-page="lessons">← Darslar ro‘yxati</button>
      <span class="tag">${escapeHTML(lesson.courseTitle)}</span>
    </div>
    <section class="hero">
      <div class="eyebrow">DARS ${lesson.index + 1} · ${escapeHTML(lesson.duration)}</div>
      <h1>${escapeHTML(lesson.title)}</h1>
      <p>${escapeHTML(lesson.courseTitle)} kursi bo‘yicha o‘quv materiali.</p>
    </section>

    <section class="section two-columns">
      <article class="panel">
        <h2>Dars materiali</h2>
        <div class="lesson-body">
          <p>${escapeHTML(lesson.text)}</p>
          <h3>Kod namunasi</h3>
          <pre><code>${escapeHTML(lesson.code)}</code></pre>
          <p>Kodni o‘qib chiqing. Keyin uni VS Code’da sinab ko‘ring va test savollariga javob bering.</p>
        </div>
      </article>
      <aside class="panel">
        <h2>Video dars</h2>
        <div class="video-box">
          <div class="video-placeholder">
            <div style="font-size:36px;margin-bottom:10px">▶</div>
            <b>Video materiali hali qo‘shilmagan</b>
            <p>Bu darsda matn va kod namunasi mavjud. O‘qituvchi video manzilini qo‘shganda video shu oynada ochiladi.</p>
          </div>
        </div>
        <p class="muted small">Video uchun o‘zingizga tegishli MP4 fayl yoki foydalanishga ruxsat berilgan video havolasini keyin qo‘shishingiz mumkin.</p>
        <button class="btn primary" data-action="lesson-test" data-id="${id}">Testni boshlash →</button>
        <button class="btn ${done ? "success" : ""}" data-action="complete-lesson" data-id="${id}" style="width:100%;margin-top:10px">
          ${done ? "✓ Dars tugatilgan" : "Darsni tugatdim"}
        </button>
      </aside>
    </section>
    <section class="section panel">
      <div class="section-heading">
        <button class="btn" data-action="previous-lesson" data-id="${id}">← Oldingi dars</button>
        <button class="btn primary" data-action="next-lesson" data-id="${id}">Keyingi dars →</button>
      </div>
    </section>`;
}

function completeLesson(id) {
  if (!getLesson(id)) return;

  if (!state.completed.includes(id)) {
    state.completed.push(id);
    saveState();
    showToast("Dars tugatilgan deb belgilandi!");
  } else {
    showToast("Bu dars avval tugatilgan.");
  }

  startLesson(id);
}

function openCourse(id) {
  const course = getCourse(id);
  if (!course) return;

  content.innerHTML = `
    <div class="section-heading"><button class="btn" data-action="go" data-page="courses">← Kurslar</button></div>
    <section class="hero">
      <div class="eyebrow">${escapeHTML(course.level)} daraja</div>
      <h1>${course.icon} ${escapeHTML(course.title)}</h1>
      <p>${escapeHTML(course.description)}</p>
      <p>${courseProgress(course)}% bajarilgan · ${course.lessons.length} ta dars</p>
      <div class="progress-track"><div class="progress-fill" style="width:${courseProgress(course)}%"></div></div>
      <div class="hero-buttons"><button class="btn primary" data-action="start-lesson" data-id="${course.id}-0">Birinchi darsni boshlash →</button></div>
    </section>
    <section class="section">
      <h2>Kurs darslari</h2>
      <div class="list">
        ${course.lessons.map((lesson, index) => {
          const id = `${course.id}-${index}`;
          const done = state.completed.includes(id);
          return `<article class="lesson-row">
            <div class="lesson-number">${done ? "✓" : index + 1}</div>
            <div class="lesson-info"><h3>${escapeHTML(lesson.title)}</h3><p>${escapeHTML(lesson.duration)} · ${done ? "Tugatilgan" : "Mavjud"}</p></div>
            <div class="lesson-actions">
              <button class="btn primary" data-action="start-lesson" data-id="${id}">${done ? "Qayta ochish" : "Darsni boshlash"}</button>
              <button class="btn" data-action="lesson-test" data-id="${id}">Test</button>
            </div>
          </article>`;
        }).join("")}
      </div>
    </section>`;
}

function openQuiz(id) {
  const lesson = getLesson(id);
  if (!lesson) return;

  quizState = { id, lesson, answers: {}, submitted: false };
  renderQuiz();
}

function renderQuiz() {
  if (!quizState) return;

  const { lesson, id, answers, submitted } = quizState;
  const questions = lesson.quiz;

  content.innerHTML = `
    <div class="section-heading">
      <button class="btn" data-action="start-lesson" data-id="${id}">← Darsga qaytish</button>
      <span class="tag">${questions.length} ta savol</span>
    </div>
    <div class="eyebrow">Bilimni tekshirish</div>
    <h1>${escapeHTML(lesson.title)} — test</h1>
    <p class="muted">Har bir savol uchun bitta javob tanlang. Yakunda natija va izohlar ko‘rsatiladi.</p>
    <div class="section list">
      ${questions.map((question, qi) => `
        <article class="panel">
          <h3>${qi + 1}. ${escapeHTML(question.q)}</h3>
          ${question.options.map((option, oi) => {
            const selected = answers[qi] === oi;
            const cls = submitted
              ? oi === question.answer ? "correct" : selected ? "wrong" : ""
              : selected ? "selected" : "";
            return `<button class="quiz-option ${cls}" data-action="answer" data-q="${qi}" data-a="${oi}" ${submitted ? "disabled" : ""}>
              ${String.fromCharCode(65 + oi)}. ${escapeHTML(option)}
            </button>`;
          }).join("")}
          ${submitted ? `<div class="quiz-feedback">${answers[qi] === question.answer ? "✓ To‘g‘ri!" : "✗ To‘g‘ri javob: " + escapeHTML(question.options[question.answer])}<br><span class="muted">${escapeHTML(question.explanation)}</span></div>` : ""}
        </article>`).join("")}
    </div>
    ${submitted ? `
      <section class="section panel">
        <h2>Test natijasi: ${Math.round(questions.filter((q, i) => answers[i] === q.answer).length / questions.length * 100)}%</h2>
        <p class="muted">${questions.filter((q, i) => answers[i] === q.answer).length} / ${questions.length} ta savolga to‘g‘ri javob berdingiz.</p>
        <div class="hero-buttons">
          <button class="btn primary" data-action="retry-test" data-id="${id}">Qayta ishlash</button>
          <button class="btn" data-action="start-lesson" data-id="${id}">Darsga qaytish</button>
        </div>
      </section>` : `
      <div class="section"><button class="btn primary" data-action="submit-test">Testni yakunlash</button></div>`}`;
}

function submitQuiz() {
  if (!quizState || quizState.submitted) return;

  const { lesson, id, answers } = quizState;
  if (Object.keys(answers).length !== lesson.quiz.length) {
    showToast("Davom etishdan oldin barcha savollarga javob bering.");
    return;
  }

  const correct = lesson.quiz.filter((q, index) => answers[index] === q.answer).length;
  const score = Math.round(correct / lesson.quiz.length * 100);
  state.scores[id] = score;
  quizState.submitted = true;
  saveState();
  renderQuiz();
}

function renderTests() {
  content.innerHTML = `
    <div class="eyebrow">Bilimingizni sinang</div>
    <h1>Testlar</h1>
    <p class="muted">Har bir dars uchun alohida test mavjud. Natijalar brauzeringizda saqlanadi.</p>
    <div class="section list">
      ${allLessons.map(lesson => {
        const score = state.scores[lesson.id];
        return `<article class="lesson-row">
          <div class="lesson-number">☑</div>
          <div class="lesson-info"><h3>${escapeHTML(lesson.title)}</h3><p>${escapeHTML(lesson.courseTitle)} · ${lesson.quiz.length} ta savol</p></div>
          <div class="lesson-actions">
            <span class="tag">${score === undefined ? "Ishlanmagan" : `Natija: ${score}%`}</span>
            <button class="btn primary" data-action="lesson-test" data-id="${lesson.id}">${score === undefined ? "Testni boshlash" : "Qayta ishlash"}</button>
          </div>
        </article>`;
      }).join("")}
    </div>`;
}

function renderTasks() {
  content.innerHTML = `
    <div class="eyebrow">Reja va natija</div>
    <h1>Vazifalar</h1>
    <p class="muted">Vazifani bajarganingizdan so‘ng belgi qo‘ying. Natija avtomatik saqlanadi.</p>
    <div class="section-heading"><h2>Shaxsiy reja</h2><span class="tag">${defaultTasks.filter(task => state.taskDone[task.id]).length}/${defaultTasks.length} bajarilgan</span></div>
    <div class="task-grid">
      ${defaultTasks.map(task => {
        const done = Boolean(state.taskDone[task.id]);
        return `<article class="task-card ${done ? "done" : ""}">
          <input type="checkbox" aria-label="${escapeHTML(task.title)} bajarildi" data-action="task-toggle" data-id="${task.id}" ${done ? "checked" : ""}>
          <div><h3>${escapeHTML(task.title)}</h3><p>${escapeHTML(task.description)}</p><span class="tag">${done ? "Bajarilgan" : "Kutilmoqda"}</span></div>
        </article>`;
      }).join("")}
    </div>
    <section class="section panel">
      <h2>Kunlik tavsiya</h2>
      <p class="muted">Har kuni kamida bitta mavzuni o‘rganing, kodni o‘zingiz yozib ko‘ring va test natijangizni tekshiring.</p>
    </section>`;
}

function renderAssistant() {
  content.innerHTML = `
    <div class="eyebrow">Shaxsiy IT ustozingiz</div>
    <h1>AI yordamchi</h1>
    <p class="muted">HTML, CSS, JavaScript yoki Python haqida savol bering. Javob server orqali olinadi.</p>
    <section class="section panel chat-box">
      <div id="chatMessages" class="chat-messages">
        <div class="message bot">Assalomu alaykum! Men IT ACADEMY yordamchisiman. Qaysi mavzuni o‘rganmoqchisiz?</div>
      </div>
      <form id="chatForm" class="chat-form">
        <textarea id="chatInput" maxlength="2000" rows="2" placeholder="Masalan: JavaScript'da funksiya nima?" required></textarea>
        <button class="btn primary" id="chatSend" type="submit">Yuborish ↑</button>
      </form>
      <p class="muted small">AI javoblarini tekshirib ko‘ring. Bu yordamchi ta’lim uchun mo‘ljallangan.</p>
    </section>`;
}

function addMessage(text, who) {
  const messages = $("#chatMessages");
  if (!messages) return;
  const bubble = document.createElement("div");
  bubble.className = `message ${who}`;
  bubble.textContent = text;
  messages.appendChild(bubble);
  messages.scrollTop = messages.scrollHeight;
  return bubble;
}

async function sendChat(event) {
  event.preventDefault();

  const input = $("#chatInput");
  const button = $("#chatSend");
  const question = input.value.trim();
  if (!question) return;

  addMessage(question, "user");
  input.value = "";
  button.disabled = true;
  button.textContent = "Kutilmoqda...";

  const pending = addMessage("Javob tayyorlanmoqda...", "bot");

  try {
    const response = await fetch("/api/ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question })
    });

    const data = await response.json();
    pending.textContent = data.answer || data.error || "Javob olinmadi.";
  } catch (error) {
    pending.textContent = "Server bilan bog‘lanib bo‘lmadi. Terminalda node server.js ishlayotganini tekshiring.";
  } finally {
    button.disabled = false;
    button.textContent = "Yuborish ↑";
    input.focus();
  }
}

function moveLesson(id, direction) {
  const index = allLessons.findIndex(lesson => lesson.id === id);
  const next = allLessons[index + direction];

  if (!next) {
    showToast(direction > 0 ? "Bu oxirgi dars." : "Bu birinchi dars.");
    return;
  }

  startLesson(next.id);
}

function handleAction(button) {
  const action = button.dataset.action;
  const id = button.dataset.id;

  switch (action) {
    case "go":
      setPage(button.dataset.page);
      break;
    case "open-course":
      openCourse(id);
      break;
    case "start-lesson":
      startLesson(id);
      break;
    case "lesson-test":
      openQuiz(id);
      break;
    case "complete-lesson":
      completeLesson(id);
      break;
    case "previous-lesson":
      moveLesson(id, -1);
      break;
    case "next-lesson":
      moveLesson(id, 1);
      break;
    case "answer":
      if (!quizState || quizState.submitted) return;
      quizState.answers[Number(button.dataset.q)] = Number(button.dataset.a);
      renderQuiz();
      break;
    case "submit-test":
      submitQuiz();
      break;
    case "retry-test":
      openQuiz(id);
      break;
    default:
      break;
  }
}

document.addEventListener("click", event => {
  const button = event.target.closest("[data-action]");
  if (button) handleAction(button);
});

document.addEventListener("change", event => {
  const checkbox = event.target.closest('[data-action="task-toggle"]');
  if (checkbox) {
    state.taskDone[checkbox.dataset.id] = checkbox.checked;
    saveState();
    showToast(checkbox.checked ? "Vazifa bajarildi!" : "Vazifa qayta ochildi.");
    renderTasks();
  }
});

document.addEventListener("submit", event => {
  if (event.target.id === "chatForm") sendChat(event);
});

document.querySelectorAll(".nav-link[data-page]").forEach(button => {
  button.addEventListener("click", () => setPage(button.dataset.page));
});

$("#themeToggle").addEventListener("click", () => {
  state.theme = state.theme === "dark" ? "light" : "dark";
  document.body.classList.toggle("light", state.theme === "light");
  saveState();
  showToast(state.theme === "light" ? "Yorug‘ rejim yoqildi." : "Qorong‘i rejim yoqildi.");
});

$("#menuToggle").addEventListener("click", () => {
  $("#sidebar").classList.toggle("open");
});

document.addEventListener("click", event => {
  const sidebar = $("#sidebar");
  if (window.innerWidth <= 760 &&
      sidebar.classList.contains("open") &&
      !sidebar.contains(event.target) &&
      !$("#menuToggle").contains(event.target)) {
    sidebar.classList.remove("open");
  }
});

renderDashboard();