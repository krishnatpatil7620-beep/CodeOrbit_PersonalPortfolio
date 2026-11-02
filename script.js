

const menuIcon = document.getElementById("menu-icon");
const menu = document.getElementById("menu");


menuIcon.addEventListener("click", function () {
    menu.classList.toggle("active");
});


document.querySelectorAll(".menu a").forEach(function (link) {
    link.addEventListener("click", function () {
        menu.classList.remove("active");
    });
});


document.getElementById("year").textContent =
    new Date().getFullYear();

/
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {

    
    event.preventDefault();

    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

   
    document.getElementById("form-status").textContent =
        "Thank you, " + name +
        "! Your form is ready. Connect an email service to receive messages.";

    
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

   
    contactForm.reset();
});
