# Ian's Coffee

A simple coffee shop website built with **HTML, CSS, and JavaScript**.

## Project Structure

```text
ian-coffee/
├── index.html
├── style.css
└── script.js
```

## `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ian's Coffee</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <nav>
            <span class="logo">Ian's Coffee</span>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="about">
            <p class="label">Welcome</p>
            <h1>Hi, I'm Guian</h1>
            <p class="sub">"Stressed, blessed, and coffee obsessed."</p>
            <button id="hire-btn">Enjoy your COFFEE today</button>
            <p id="hire-output"></p>
        </section>

        <section id="menu">
            <h2>Our Menu</h2>

            <div class="cards">
                <div class="card">
                    <h3>Coffee Menu</h3>
                    <ul>
                        <li>Espresso</li>
                        <li>Cappuccino</li>
                        <li>Latte</li>
                        <li>Mocha</li>
                        <li>Pastries</li>
                    </ul>
                </div>

                <div class="card">
                    <h3>Soda</h3>
                    <ul>
                        <li>Green Apple</li>
                        <li>Blueberry</li>
                        <li>Strawberry</li>
                    </ul>
                </div>

                <div class="card">
                    <h3>Pastries</h3>
                    <p>Croissants, muffins, and more.</p>
                </div>
            </div>
        </section>

        <section id="contact">
            <h2>Message Here</h2>

            <form id="contact-form">
                <label for="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                />

                <label for="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                />

                <label for="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Say hello..."
                    required
                ></textarea>

                <button type="submit">Send Message</button>
                <p id="form-feedback"></p>
            </form>
        </section>
    </main>

    <footer>
        <p>© Ian's Coffee Shop.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
```

## `script.js`

```javascript
const COFFESHOP_NAME = "Ian's Coffee";
let hireClicked = false;

function buildGreeting(name) {
  return `Thanks for reaching out to ${COFFESHOP_NAME}, ${name}! We'll be in touch soon.`;
}

const hireBtn = document.getElementById("hire-btn");
const hireOutput = document.getElementById("hire-output");

if (hireBtn && hireOutput) {
  hireBtn.addEventListener("click", function () {
    hireClicked = !hireClicked;

    if (hireClicked) {
      hireOutput.textContent = buildGreeting("friend");
      hireOutput.style.color = "#f4a261";
      hireOutput.style.fontWeight = "600";
      hireOutput.style.marginTop = "1rem";

      hireBtn.textContent = "Message Sent ✓";
      hireBtn.style.backgroundColor = "#ffae00";
      hireBtn.style.color = "#fff";
    } else {
      hireOutput.textContent = "";
      hireBtn.textContent = "Enjoy your COFFEE today";
      hireBtn.style.backgroundColor = "";
      hireBtn.style.color = "";
    }
  });
}

const contactForm = document.getElementById("contact-form");
const formFeedback = document.getElementById("form-feedback");

if (contactForm && formFeedback) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const visitorName =
      document.getElementById("name").value.trim() || "friend";

    formFeedback.textContent = buildGreeting(visitorName);
    formFeedback.style.color = "#ff9900";

    contactForm.reset();
  });
}
```

## `style.css`

```css
body {
  font-family: system-ui, sans-serif;
  background: #3b2103;
  color: #ffb452e3;
  line-height: 1.6;
}

a {
  text-decoration: none;
  color: inherit;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #eeeae0;
  border-bottom: 1px solid #eee;
}

.logo {
  font-weight: 700;
  font-size: 1.1rem;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}

nav a {
  color: #53504c;
  font-size: 0.9rem;
}

nav a:hover {
  color: #222;
}

#about {
  text-align: center;
  padding: 5rem 1.5rem;
  background: #f3a743;
  border-bottom: 1px solid #f58e07;
  border-radius: 14px;
}

.label {
  font-size: 0.75rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #0385ff;
  margin-bottom: 0.75rem;
}

#about h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: brown;
}

.sub {
  color: #1247f5;
  margin-bottom: 2rem;
}

#hire-btn {
  padding: 0.7rem 2rem;
  background: #222;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background 0.2s;
}

#hire-btn:hover {
  background: #444;
}

#hire-output {
  margin-top: 1rem;
  font-size: 0.95rem;
  min-height: 1.4rem;
}

#menu {
  padding: 4rem 2rem;
  max-width: 860px;
  margin: 0 auto;
  color: rgba(228, 110, 15, 0.863);
}

#menu h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: rgb(243, 143, 11);
}

.cards {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.card {
  flex: 1 1 220px;
  background: #999594be;
  border: 1px solid #804d00;
  border-radius: 8px;
  padding: 1.5rem;
}

.card h3 {
  text-align: center;
  font-size: 1rem;
  margin-bottom: 0.4rem;
}

.card p {
  font-size: 0.9rem;
  color: #666;
}

#contact {
  padding: 4rem 2rem;
  max-width: 500px;
  margin: 0 auto;
}

#contact h2 {
  text-align: center;
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
}

form {
  border: 1px solid;
  border-radius: 14px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

label {
  font-size: 0.85rem;
  font-weight: 600;
  color: #444;
}

input,
textarea {
  padding: 0.6rem 0.8rem;
  border: 1px solid #ffbd72;
  border-radius: 6px;
  font-size: 0.95rem;
  font-family: inherit;
  background: #fff;
  transition: border-color 0.2s;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #222;
}

button[type="submit"] {
  margin-top: 0.5rem;
  padding: 0.7rem;
  background: #222;
  color: #b68500c9;
  border: none;
  border-radius: 6px;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background 0.2s;
}

button[type="submit"]:hover {
  background: #444;
}

#form-feedback {
  font-size: 0.9rem;
  font-weight: 600;
  min-height: 1.4rem;
}

footer {
  text-align: center;
  padding: 2rem;
  font-size: 0.85rem;
  color: #fa8211;
  border-top: 1px solid #f38200;
}

@media (max-width: 600px) {
  nav {
    flex-direction: column;
    gap: 0.75rem;
  }

  #about h1 {
    font-size: 1.8rem;
  }

  .cards {
    flex-direction: column;
  }
}
```

## Features

- Responsive navigation
- About/welcome section
- Coffee, soda, and pastry menu
- Interactive coffee button
- Contact form with JavaScript feedback
- Responsive layout for mobile screens

## How to Run

1. Create a folder named `ian-coffee`.
2. Create the following files:
   - `index.html`
   - `style.css`
   - `script.js`
3. Copy each corresponding code section into its file.
4. Open `index.html` in a web browser.
