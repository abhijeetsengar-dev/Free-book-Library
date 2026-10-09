/* ==========================================================
   Book catalog. To add a book, add one row to RAW:
   [title, author, category, link or PDF path, description, cover image (optional)]
   The category must match a name in CATEGORIES.
   Covers: every book gets a designed cover automatically. For a real cover,
   save the picture in /images and add its path as the last item of the row.
   ========================================================== */

const CATEGORIES = [
    { name: "Programming", color: "#1e4e8c", desc: "C, C++, Java, Python, Rust and JavaScript." },
    { name: "Web Development", color: "#0f766e", desc: "HTML, CSS, JavaScript and building websites." },
    { name: "Data Structures & Algorithms", color: "#9a3412", desc: "Core DSA for exams and interviews." },
    { name: "Databases", color: "#4d7c0f", desc: "SQL, DBMS concepts and database design." },
    { name: "Operating Systems", color: "#374151", desc: "Processes, memory, files and Linux." },
    { name: "Computer Networks", color: "#0e7490", desc: "Protocols, the internet and socket programming." },
    { name: "AI & Machine Learning", color: "#7c3a8e", desc: "Machine learning, deep learning and data science." },
    { name: "Software & Tools", color: "#a16207", desc: "Git, command line and software engineering." },
    { name: "Computer Science", color: "#3730a3", desc: "Theory, architecture, compilers and core CS." },
    { name: "Mathematics", color: "#be123c", desc: "Calculus, linear algebra, probability, discrete maths." },
    { name: "Physics & Chemistry", color: "#166534", desc: "First-year B.Tech physics and chemistry." },
    { name: "Electronics & Electrical", color: "#b45309", desc: "Circuits, signals and engineering references." }
];

const RAW = [
    // Your own PDFs (put the files in /books and covers in /images)
    ["Programming in C", "Dennis Ritchie", "Programming", "books/c-programming.pdf", "Learn C from the ground up: variables, loops, functions and pointers.", "images/c-book.png"],
    ["Web Development", "Jon Duckett", "Web Development", "books/web-development.pdf", "A visual guide to building websites with HTML, CSS and JavaScript.", "images/web-book.png"],
    ["C++ Programming", "Bjarne Stroustrup", "Programming", "books/cpp-programming.pdf", "Object-oriented programming and modern C++.", "images/cpp-book.png"],

    // Programming
    ["Think Python", "Allen Downey", "Programming", "https://greenteapress.com/wp/think-python-2e/", "A gentle start to Python and problem solving."],
    ["A Byte of Python", "Swaroop C H", "Programming", "https://python.swaroopch.com/", "A short, clear Python guide for beginners."],
    ["Automate the Boring Stuff with Python", "Al Sweigart", "Programming", "https://automatetheboringstuff.com/", "Practical Python for files, spreadsheets, web and email."],
    ["The Python Tutorial", "Python Software Foundation", "Programming", "https://docs.python.org/3/tutorial/", "The official tutorial for the Python language."],
    ["Think Java", "Allen Downey & Chris Mayfield", "Programming", "https://greenteapress.com/wp/think-java-2e/", "Introduction to programming and Java."],
    ["Beej's Guide to C", "Brian Hall", "Programming", "https://beej.us/guide/bgc/", "A friendly, thorough guide to the C language."],
    ["Learn C++", "LearnCpp.com", "Programming", "https://www.learncpp.com/", "Step-by-step lessons from basics to advanced C++."],
    ["The Rust Programming Language", "Steve Klabnik & Carol Nichols", "Programming", "https://doc.rust-lang.org/book/", "The official book for learning Rust."],
    ["Eloquent JavaScript", "Marijn Haverbeke", "Programming", "https://eloquentjavascript.net/", "A modern introduction to JavaScript and programming."],

    // Web
    ["JavaScript.info", "Ilya Kantor", "Web Development", "https://javascript.info/", "The modern JavaScript tutorial, from basics to advanced."],
    ["Learn Web Development", "Mozilla (MDN)", "Web Development", "https://developer.mozilla.org/en-US/docs/Learn_web_development", "HTML, CSS and JavaScript courses from Mozilla."],
    ["Learn CSS", "Google web.dev", "Web Development", "https://web.dev/learn/css", "A complete course on modern CSS."],
    ["You Don't Know JS Yet", "Kyle Simpson", "Web Development", "https://github.com/getify/You-Dont-Know-JS", "A deep dive into how JavaScript really works."],

    // DSA
    ["Algorithms", "Jeff Erickson", "Data Structures & Algorithms", "https://jeffe.cs.illinois.edu/teaching/algorithms/", "Rigorous algorithm design and analysis."],
    ["Open Data Structures", "Pat Morin", "Data Structures & Algorithms", "https://opendatastructures.org/", "Data structures with clear analysis and code."],
    ["Think Data Structures", "Allen Downey", "Data Structures & Algorithms", "https://greenteapress.com/wp/think-data-structures/", "Data structures and algorithms in Java."],
    ["Problem Solving with Algorithms and Data Structures", "Brad Miller & David Ranum", "Data Structures & Algorithms", "https://runestone.academy/ns/books/published/pythonds/index.html", "Interactive DSA using Python."],

    // Databases
    ["SQLBolt", "SQLBolt", "Databases", "https://sqlbolt.com/", "Learn SQL with short interactive lessons."],
    ["Readings in Database Systems", "Bailis, Hellerstein & Stonebraker", "Databases", "http://www.redbook.io/", "Classic papers and ideas behind database systems."],

    // OS
    ["Operating Systems: Three Easy Pieces", "Remzi & Andrea Arpaci-Dusseau", "Operating Systems", "https://pages.cs.wisc.edu/~remzi/OSTEP/", "Virtualization, concurrency and persistence."],
    ["Think OS", "Allen Downey", "Operating Systems", "https://greenteapress.com/wp/think-os/", "A short introduction to operating systems."],
    ["The Linux Command Line", "William Shotts", "Operating Systems", "https://linuxcommand.org/tlcl.php", "From first commands to shell scripting."],

    // Networks
    ["Computer Networking: Principles, Protocols and Practice", "Olivier Bonaventure", "Computer Networks", "https://www.computer-networking.info/", "An open networking textbook for the layered model."],
    ["Beej's Guide to Network Programming", "Brian Hall", "Computer Networks", "https://beej.us/guide/bgnet/", "Socket programming in C."],

    // AI / ML
    ["Dive into Deep Learning", "Zhang, Lipton, Li & Smola", "AI & Machine Learning", "https://d2l.ai/", "Deep learning with code, maths and discussion."],
    ["An Introduction to Statistical Learning", "James, Witten, Hastie & Tibshirani", "AI & Machine Learning", "https://www.statlearning.com/", "Core machine learning methods explained clearly."],
    ["Mathematics for Machine Learning", "Deisenroth, Faisal & Ong", "AI & Machine Learning", "https://mml-book.com/", "The maths you need for machine learning."],
    ["Python Data Science Handbook", "Jake VanderPlas", "AI & Machine Learning", "https://jakevdp.github.io/PythonDataScienceHandbook/", "NumPy, Pandas, Matplotlib and scikit-learn."],
    ["Think Bayes", "Allen Downey", "AI & Machine Learning", "https://greenteapress.com/wp/think-bayes/", "Bayesian statistics using Python."],

    // Software & tools
    ["Pro Git", "Scott Chacon & Ben Straub", "Software & Tools", "https://git-scm.com/book/en/v2", "Everything about Git and version control."],
    ["The Missing Semester of Your CS Education", "MIT", "Software & Tools", "https://missing.csail.mit.edu/", "Shell, editors, Git and other tools students miss."],
    ["Software Engineering at Google", "Winters, Manshreck & Wright", "Software & Tools", "https://abseil.io/resources/swe-book", "How large teams build and maintain software."],

    // Computer Science
    ["Structure and Interpretation of Computer Programs", "Abelson & Sussman", "Computer Science", "https://web.mit.edu/6.001/6.037/sicp.pdf", "A classic on programming ideas and abstraction."],
    ["Crafting Interpreters", "Bob Nystrom", "Computer Science", "https://craftinginterpreters.com/", "Build a programming language from scratch."],
    ["The Elements of Computing Systems", "Nisan & Schocken", "Computer Science", "https://www.nand2tetris.org/", "Build a computer from logic gates up."],

    // Mathematics
    ["Mathematics for Computer Science", "Lehman, Leighton & Meyer", "Mathematics", "https://courses.csail.mit.edu/6.042/spring18/mcs.pdf", "Discrete maths, proofs, graphs and probability."],
    ["Calculus Volume 1", "OpenStax", "Mathematics", "https://openstax.org/details/books/calculus-volume-1", "Limits, derivatives and integrals."],
    ["Calculus Volume 2", "OpenStax", "Mathematics", "https://openstax.org/details/books/calculus-volume-2", "Integration, series and differential equations."],
    ["Calculus Volume 3", "OpenStax", "Mathematics", "https://openstax.org/details/books/calculus-volume-3", "Multivariable calculus and vector analysis."],
    ["Linear Algebra", "Jim Hefferon", "Mathematics", "https://hefferon.net/linearalgebra/", "Vector spaces, matrices and transformations."],
    ["Introduction to Probability", "Grinstead & Snell", "Mathematics", "https://math.dartmouth.edu/~prob/prob/prob.pdf", "Probability theory with worked examples."],
    ["Introductory Statistics", "OpenStax", "Mathematics", "https://openstax.org/details/books/introductory-statistics-2e", "Statistics for beginners."],

    // Physics & Chemistry
    ["University Physics Volume 1", "OpenStax", "Physics & Chemistry", "https://openstax.org/details/books/university-physics-volume-1", "Mechanics, waves and thermodynamics."],
    ["University Physics Volume 2", "OpenStax", "Physics & Chemistry", "https://openstax.org/details/books/university-physics-volume-2", "Electricity, magnetism and optics."],
    ["University Physics Volume 3", "OpenStax", "Physics & Chemistry", "https://openstax.org/details/books/university-physics-volume-3", "Modern physics and quantum ideas."],
    ["Chemistry 2e", "OpenStax", "Physics & Chemistry", "https://openstax.org/details/books/chemistry-2e", "General chemistry for engineering students."],

    // Electronics & Electrical
    ["Lessons in Electric Circuits", "Tony R. Kuphaldt", "Electronics & Electrical", "https://www.allaboutcircuits.com/textbook/", "DC, AC, semiconductors and digital circuits."],
    ["The Scientist and Engineer's Guide to Digital Signal Processing", "Steven W. Smith", "Electronics & Electrical", "https://www.dspguide.com/", "Practical DSP explained without heavy maths."],
    ["Engineering LibreTexts", "LibreTexts", "Electronics & Electrical", "https://eng.libretexts.org/", "Free texts for mechanical, civil, electrical and more."]
];

const COLORS = Object.fromEntries(CATEGORIES.map((c) => [c.name, c.color]));

const BOOKS = RAW.map(([title, author, category, file, desc, image]) =>
    ({ title, author, category, file, desc, image, color: COLORS[category] }));
/* ---------- Branch and semester tags ----------
   Format: "branches|first-last semester". Branch letters: C = CSE / IT,
   E = ECE / EEE, M = Mechanical / Civil, A = all branches.
   Each category has a default; add a title to TAG_OVERRIDES to change one book. */
const BRANCHES = { C: "CSE / IT", E: "ECE / EEE", M: "Mechanical / Civil" };

const CAT_TAGS = {
    "Programming": "A|1-2",
    "Web Development": "C|3-6",
    "Data Structures & Algorithms": "C|3-4",
    "Databases": "C|4-5",
    "Operating Systems": "C|4-5",
    "Computer Networks": "CE|5-6",
    "AI & Machine Learning": "C|5-8",
    "Software & Tools": "CE|3-8",
    "Computer Science": "C|3-6",
    "Mathematics": "A|1-4",
    "Physics & Chemistry": "A|1-2",
    "Electronics & Electrical": "CE|2-4"
};

const TAG_OVERRIDES = {
    "C++ Programming": "C|2-3",
    "Learn C++": "C|2-3",
    "Think Java": "C|2-3",
    "Eloquent JavaScript": "C|3-4",
    "The Rust Programming Language": "C|5-8",
    "Algorithms": "C|4-6",
    "Readings in Database Systems": "C|6-8",
    "The Linux Command Line": "C|3-5",
    "Dive into Deep Learning": "C|6-8",
    "Mathematics for Machine Learning": "C|5-6",
    "Software Engineering at Google": "C|6-8",
    "Mathematics for Computer Science": "C|3-4",
    "The Elements of Computing Systems": "CE|3-4",
    "Crafting Interpreters": "C|6-8",
    "Calculus Volume 2": "A|1-2",
    "Calculus Volume 3": "A|2-3",
    "Lessons in Electric Circuits": "A|1-3",
    "The Scientist and Engineer's Guide to Digital Signal Processing": "E|5-6",
    "Engineering LibreTexts": "A|1-8"
};

/* Level: books not listed here are Intermediate. */
const BEGINNER = [
    "Programming in C", "Web Development", "Think Python", "A Byte of Python",
    "Automate the Boring Stuff with Python", "The Python Tutorial", "Think Java",
    "Beej's Guide to C", "Learn C++", "Eloquent JavaScript", "JavaScript.info",
    "Learn Web Development", "Learn CSS", "SQLBolt", "The Linux Command Line", "Pro Git",
    "Problem Solving with Algorithms and Data Structures", "Calculus Volume 1",
    "Introductory Statistics", "University Physics Volume 1", "Chemistry 2e",
    "Lessons in Electric Circuits", "Engineering LibreTexts"
];

const ADVANCED = [
    "Algorithms", "Readings in Database Systems", "Dive into Deep Learning",
    "Mathematics for Machine Learning", "Software Engineering at Google",
    "Structure and Interpretation of Computer Programs", "Crafting Interpreters",
    "Mathematics for Computer Science", "University Physics Volume 3"
];

BOOKS.forEach((b) => {
    b.level = BEGINNER.includes(b.title) ? "Beginner" : ADVANCED.includes(b.title) ? "Advanced" : "Intermediate";
    const [br, sem] = (TAG_OVERRIDES[b.title] || CAT_TAGS[b.category]).split("|");
    [b.from, b.to] = sem.split("-").map(Number);
    b.allBranches = br === "A";
    b.branches = b.allBranches ? Object.keys(BRANCHES) : br.split("");
});

function forText(b) {
    const sems = b.from === b.to ? b.from : b.from + "\u2013" + b.to;
    const who = b.allBranches ? "all branches" : b.branches.map((c) => BRANCHES[c]).join(" and ");
    return "Semester " + sems + ", " + who;
}


/* ---------- Elements ---------- */
const $ = (id) => document.getElementById(id);

const searchBox = $("searchBox");
const grid = $("bookGrid");
const filters = $("filters");
const emptyMsg = $("emptyMsg");
const resultCount = $("resultCount");
const categoryGrid = $("categoryGrid");
const modal = $("bookModal");
const branchSel = $("branchSelect");
const semSel = $("semSelect");
const levelSel = $("levelSelect");
const listSel = $("listSelect");

let activeCategory = "All";


/* ---------- My list (saved and read), kept in this browser ---------- */
function loadSet(key) {
    try { return new Set(JSON.parse(localStorage.getItem(key)) || []); } catch (e) { return new Set(); }
}

function storeSet(key, set) {
    try { localStorage.setItem(key, JSON.stringify([...set])); } catch (e) {}
}

const saved = loadSet("fbl-saved");
const read = loadSet("fbl-read");

function updateCounts() {
    listSel.options[1].textContent = "Saved (" + saved.size + ")";
    listSel.options[2].textContent = "Read (" + read.size + ")";
}

function setupToggle(btn, set, key, book, offText, onText) {
    const paint = () => {
        const on = set.has(book.title);
        btn.setAttribute("aria-pressed", String(on));
        btn.textContent = on ? onText : offText;
    };
    paint();

    btn.addEventListener("click", () => {
        if (set.has(book.title)) set.delete(book.title); else set.add(book.title);
        storeSet(key, set);
        paint();
        updateCounts();
        if (listSel.value !== "all") renderBooks();   // card may need to leave the filtered view
    });
}


/* ---------- Helpers ---------- */
function makeCover(book, extraClass = "") {
    const cover = document.createElement("div");
    cover.className = "cover " + extraClass;
    cover.style.setProperty("--c", book.color);
    cover.classList.add("p" + (CATEGORIES.findIndex((c) => c.name === book.category) % 4));
    cover.innerHTML = '<span class="c-cat"></span><span class="c-title"></span><span class="c-author"></span>';
    cover.querySelector(".c-cat").textContent = book.category;
    cover.querySelector(".c-title").textContent = book.title;
    cover.querySelector(".c-author").textContent = book.author;

    if (!book.image) return cover;
    const img = document.createElement("img");
    img.src = book.image;
    img.alt = "Cover of " + book.title;
    img.loading = "lazy";
    img.addEventListener("error", () => img.remove());   // keep the coloured cover if the image is missing
    cover.appendChild(img);

    return cover;
}

function countIn(category) {
    return BOOKS.filter((b) => b.category === category).length;
}


/* ---------- Render books ---------- */
function renderBooks() {
    const query = searchBox.value.trim().toLowerCase();

    const matches = BOOKS.filter((book) => {
        const inCategory = activeCategory === "All" || book.category === activeCategory;
        const text = (book.title + " " + book.author + " " + book.category).toLowerCase();
        const inBranch = branchSel.value === "all" || book.branches.includes(branchSel.value);
        const sem = Number(semSel.value);
        const inSem = semSel.value === "all" || (book.from <= sem && sem <= book.to);
        const inLevel = levelSel.value === "all" || book.level === levelSel.value;
        const l = listSel.value;
        const inList = l === "all" || (l === "saved" && saved.has(book.title)) ||
            (l === "read" && read.has(book.title)) || (l === "unread" && !read.has(book.title));
        return inCategory && inBranch && inSem && inLevel && inList && text.includes(query);
    });

    grid.replaceChildren();

    matches.forEach((book) => {
        const card = document.createElement("article");
        card.className = "book-card";

        const info = document.createElement("div");
        info.className = "book-info";
        info.innerHTML = `
            <h3></h3>
            <p class="meta"></p>
            <div class="tags"><p class="tag"></p><p class="level"></p></div>
            <p class="sem"></p>
            <div class="actions">
                <button class="btn" type="button">View book</button>
                <button class="icon-btn save" type="button"></button>
                <button class="icon-btn mark" type="button"></button>
            </div>`;
        info.querySelector("h3").textContent = book.title;
        info.querySelector(".meta").textContent = "by " + book.author;
        info.querySelector(".tag").textContent = book.category;
        info.querySelector(".sem").textContent = forText(book);
        const lv = info.querySelector(".level");
        lv.textContent = book.level;
        lv.classList.add("lvl-" + book.level.toLowerCase());
        info.querySelector("button").addEventListener("click", () => viewBook(book));
        setupToggle(info.querySelector(".save"), saved, "fbl-saved", book, "Save", "Saved");
        setupToggle(info.querySelector(".mark"), read, "fbl-read", book, "Mark read", "Read \u2713");

        card.append(makeCover(book), info);
        grid.appendChild(card);
    });

    emptyMsg.hidden = matches.length > 0;
    resultCount.textContent = matches.length + (matches.length === 1 ? " book" : " books");
}


/* ---------- Render filters and categories ---------- */
function setCategory(name) {
    activeCategory = name;
    renderFilters();
    renderBooks();
}

function renderFilters() {
    filters.replaceChildren();

    ["All", ...CATEGORIES.map((c) => c.name)].forEach((name) => {
        const chip = document.createElement("button");
        chip.type = "button";
        chip.className = "chip";
        chip.textContent = name;
        chip.setAttribute("aria-pressed", String(name === activeCategory));
        chip.addEventListener("click", () => setCategory(name));
        filters.appendChild(chip);
    });
}

function renderCategories() {
    CATEGORIES.forEach((cat) => {
        const n = countIn(cat.name);

        const card = document.createElement("button");
        card.type = "button";
        card.className = "category";
        card.innerHTML = "<h3></h3><p></p><span></span>";
        card.querySelector("h3").textContent = cat.name;
        card.querySelector("p").textContent = cat.desc;
        card.querySelector("span").textContent = n + (n === 1 ? " book" : " books");

        card.addEventListener("click", () => {
            searchBox.value = "";
            setCategory(cat.name);
            $("books").scrollIntoView({ behavior: "smooth" });
        });

        categoryGrid.appendChild(card);
    });
}


/* ---------- Book details popup ---------- */
function viewBook(book) {
    $("modalTitle").textContent = book.title;
    $("modalAuthor").textContent = "by " + book.author;
    $("modalCategory").textContent = book.category;
    $("modalFor").textContent = forText(book) + ", " + book.level.toLowerCase() + " level";
    $("modalDesc").textContent = book.desc;
    $("readBookBtn").href = book.file;

    $("modalCover").replaceWith(Object.assign(makeCover(book, "cover-sm"), { id: "modalCover" }));

    modal.showModal();
}

modal.querySelector(".close").addEventListener("click", () => modal.close());

// Click on the dark area outside the popup closes it
modal.addEventListener("click", (event) => {
    if (event.target === modal) modal.close();
});


/* ---------- Start ---------- */
searchBox.addEventListener("input", renderBooks);
branchSel.addEventListener("change", renderBooks);
semSel.addEventListener("change", renderBooks);
levelSel.addEventListener("change", renderBooks);
listSel.addEventListener("change", renderBooks);

$("clearFilters").addEventListener("click", () => {
    searchBox.value = "";
    branchSel.value = "all";
    semSel.value = "all";
    levelSel.value = "all";
    listSel.value = "all";
    setCategory("All");
});

/* ---------- Learning roadmaps (titles must match books above) ---------- */
const ROADMAPS = [
    { name: "First-year B.Tech kit", desc: "Maths, physics, chemistry and basic electrical for every branch.",
      steps: ["Calculus Volume 1", "Calculus Volume 2", "Linear Algebra", "University Physics Volume 1", "Chemistry 2e", "Lessons in Electric Circuits"] },
    { name: "Web developer", desc: "From zero to building real websites.",
      steps: ["Learn Web Development", "Learn CSS", "JavaScript.info", "Eloquent JavaScript", "You Don't Know JS Yet", "Pro Git"] },
    { name: "Placement preparation", desc: "Core subjects asked in campus interviews.",
      steps: ["Beej's Guide to C", "Problem Solving with Algorithms and Data Structures", "Open Data Structures", "SQLBolt", "Operating Systems: Three Easy Pieces", "Computer Networking: Principles, Protocols and Practice"] },
    { name: "Python and AI", desc: "Python, the maths behind it and machine learning.",
      steps: ["Think Python", "Python Data Science Handbook", "Introductory Statistics", "Linear Algebra", "An Introduction to Statistical Learning", "Dive into Deep Learning"] },
    { name: "Systems and Linux", desc: "How computers, operating systems and networks work.",
      steps: ["The Linux Command Line", "The Elements of Computing Systems", "Think OS", "Operating Systems: Three Easy Pieces", "Beej's Guide to Network Programming"] }
];

ROADMAPS.forEach((r) => {
    const card = document.createElement("div");
    card.className = "roadmap";
    card.innerHTML = "<h3></h3><p></p><ol></ol>";
    card.querySelector("h3").textContent = r.name;
    card.querySelector("p").textContent = r.desc;

    r.steps.forEach((title) => {
        const book = BOOKS.find((b) => b.title === title);
        if (!book) return;
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.type = "button";
        btn.textContent = title;
        btn.addEventListener("click", () => viewBook(book));
        li.appendChild(btn);
        card.querySelector("ol").appendChild(li);
    });

    $("roadmapGrid").appendChild(card);
});


/* ---------- CGPA calculator ---------- */
const GRADES = [["A+ / O", 10], ["A", 9], ["B+", 8], ["B", 7], ["C+", 6], ["C", 5], ["D", 4], ["F", 0]];

function calcRow(box, html, update) {
    const row = document.createElement("div");
    row.className = "calc-row";
    row.innerHTML = html + '<button class="rm" type="button" aria-label="Remove row">&times;</button>';
    row.addEventListener("input", update);
    row.querySelector(".rm").addEventListener("click", () => { row.remove(); update(); });
    box.appendChild(row);
    update();
}

const sgpaBox = $("sgpaRows");
const cgpaBox = $("cgpaRows");

function sgpaUpdate() {
    let credits = 0, points = 0;
    sgpaBox.querySelectorAll(".calc-row").forEach((r) => {
        const c = Number(r.querySelector(".cr").value) || 0;
        credits += c;
        points += c * Number(r.querySelector(".gr").value);
    });
    $("sgpaResult").textContent = credits ? (points / credits).toFixed(2) : "0.00";
    $("sgpaCredits").textContent = credits;
}

function cgpaUpdate() {
    let credits = 0, points = 0;
    cgpaBox.querySelectorAll(".calc-row").forEach((r) => {
        const c = Number(r.querySelector(".cr").value) || 0;
        credits += c;
        points += c * (Number(r.querySelector(".sg").value) || 0);
    });
    const cgpa = credits ? points / credits : 0;
    $("cgpaResult").textContent = cgpa.toFixed(2);
    $("cgpaPct").textContent = (cgpa * 9.5).toFixed(1) + "%";
}

function addSubject() {
    const opts = GRADES.map((g) => `<option value="${g[1]}">${g[0]} (${g[1]})</option>`).join("");
    calcRow(sgpaBox, `<input class="nm" placeholder="Subject (optional)" aria-label="Subject name">
        <input class="cr" type="number" min="0" max="12" step="0.5" value="4" aria-label="Credits">
        <select class="gr" aria-label="Grade">${opts}</select>`, sgpaUpdate);
}

function addSem() {
    calcRow(cgpaBox, `<span class="lbl"></span>
        <input class="sg" type="number" min="0" max="10" step="0.01" placeholder="SGPA" aria-label="SGPA">
        <input class="cr" type="number" min="0" max="40" step="0.5" value="22" aria-label="Credits">`, cgpaUpdate);
}

$("addSubject").addEventListener("click", addSubject);
$("addSem").addEventListener("click", addSem);
for (let i = 0; i < 5; i++) addSubject();
for (let i = 0; i < 2; i++) addSem();


/* Dark mode button */
const themeBtn = $("themeToggle");

function paintTheme() {
    const dark = document.documentElement.dataset.theme === "dark";
    themeBtn.textContent = dark ? "\u2600 Light" : "\u263E Dark";
    themeBtn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
}

themeBtn.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("fbl-theme", next); } catch (e) {}
    paintTheme();
});

paintTheme();
updateCounts();

$("year").textContent = new Date().getFullYear();

renderFilters();
renderCategories();
renderBooks();