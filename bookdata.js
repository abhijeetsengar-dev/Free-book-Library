/* ==========================================================
   Book catalog. To add a book, add one row to RAW:
   [title, author, category, link or PDF path, description, cover image (optional)]
   The category must match a name in CATEGORIES.
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