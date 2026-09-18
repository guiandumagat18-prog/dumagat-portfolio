const COFFESHOP_NAME = "Ian's Coffee";   
let   hireClicked = false;             


function buildGreeting(name) {
  return `Thanks for reaching out to ${COFFESHOP_NAME}, ${name}! We'll be in touch soon.`;
}


const hireBtn    = document.getElementById("hire-btn");
const hireOutput = document.getElementById("hire-output");

hireBtn.addEventListener("click", function () {
  hireClicked = !hireClicked; 
  if (hireClicked) {
   
    hireOutput.textContent = buildGreeting("friend");

    
    hireOutput.style.color      = "#f4a261";
    hireOutput.style.fontWeight = "600";
    hireOutput.style.marginTop  = "1rem";

    // Give the button a pressed look
    hireBtn.textContent          = "Message Sent ✓";
    hireBtn.style.backgroundColor = "#ffae00";
    hireBtn.style.color           = "#fca400";
  } else {
    
    hireOutput.textContent        = "";
    hireBtn.textContent           = "Let's Work Together";
    hireBtn.style.backgroundColor = "";
    hireBtn.style.color           = "";
  }
});


const contactForm    = document.getElementById("contact-form");
const formFeedback   = document.getElementById("form-feedback");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault(); 

  const visitorName = document.getElementById("name").value.trim() || "friend";

  
  formFeedback.textContent = buildGreeting(visitorName);
  formFeedback.style.color = "#ff9900";

  
  contactForm.reset();
});

