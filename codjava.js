// ==================== Calculator diferență zile ====================
function calculateDays() {
    let startDate = new Date(document.getElementById("startDate").value);
    let endDate = new Date(document.getElementById("endDate").value);

    if (isNaN(startDate) || isNaN(endDate)) {
        document.getElementById("dateResult").innerText = "Te rog selectează ambele date!";
        return;
    }

    let difference = Math.abs((endDate - startDate) / (1000 * 60 * 60 * 24));
    document.getElementById("dateResult").innerText = `Diferența este de ${difference} zile.`;
}

// ==================== Calculator diferență ore ====================
function calculateTime() {
    let startTime = document.getElementById("startTime").value;
    let endTime = document.getElementById("endTime").value;

    if (!startTime || !endTime) {
        document.getElementById("timeResult").innerText = "Te rog selectează ambele ore!";
        return;
    }

    let start = startTime.split(":");
    let end = endTime.split(":");

    let startMinutes = parseInt(start[0]) * 60 + parseInt(start[1]);
    let endMinutes = parseInt(end[0]) * 60 + parseInt(end[1]);

    let difference = Math.abs(endMinutes - startMinutes);
    document.getElementById("timeResult").innerText = `Diferența este de ${difference} minute.`;
}

// ==================== Slideshow ====================
window.onload = function() {
    let slideIndex = 0;
    const slides = document.getElementsByClassName("slide");
    let timer;

    function showSlides(n) {
        if (n >= slides.length) { slideIndex = 0; }
        else if (n < 0) { slideIndex = slides.length - 1; }
        else { slideIndex = n; }

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            slides[i].style.opacity = 0;
        }

        slides[slideIndex].style.display = "block";
        setTimeout(() => slides[slideIndex].style.opacity = 1, 50);

        resetTimer();
    }

    window.plusSlides = function(n) {
        showSlides(slideIndex + n);
    }

    function resetTimer() {
        if (timer) clearInterval(timer);
        timer = setInterval(() => plusSlides(1), 5000); // schimbă slide automat la 5 sec
    }

    showSlides(slideIndex);

    // ==================== Meniu dropdown ====================
    document.getElementById("menuButton").addEventListener("click", function() {
        document.getElementById("menu").classList.toggle("show");
    });
};

// ==================== Formular de înregistrare ====================
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let valid = true;

    // Nume
    let name = document.getElementById("name");
    let nameError = name.nextElementSibling;
    if (name.value.trim().length < 3) {
        nameError.textContent = "Numele trebuie să aibă cel puțin 3 caractere.";
        valid = false;
    } else {
        nameError.textContent = "";
    }

    // Email
    let email = document.getElementById("email");
    let emailError = email.nextElementSibling;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        emailError.textContent = "Introduceți un email valid.";
        valid = false;
    } else {
        emailError.textContent = "";
    }

    // Telefon
    let phone = document.getElementById("phone");
    let phoneError = phone.nextElementSibling;
    let phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone.value)) {
        phoneError.textContent = "Numărul trebuie să conțină exact 10 cifre.";
        valid = false;
    } else {
        phoneError.textContent = "";
    }

    // Parolă
    let password = document.getElementById("password");
    let passwordError = password.nextElementSibling;
    if (password.value.length < 6) {
        passwordError.textContent = "Parola trebuie să aibă cel puțin 6 caractere.";
        valid = false;
    } else {
        passwordError.textContent = "";
    }

    // Confirmare parolă
    let confirmPassword = document.getElementById("confirmPassword");
    let confirmPasswordError = confirmPassword.nextElementSibling;
    if (confirmPassword.value !== password.value) {
        confirmPasswordError.textContent = "Parolele nu coincid.";
        valid = false;
    } else {
        confirmPasswordError.textContent = "";
    }

    // Termeni și condiții
    let terms = document.getElementById("accept"); // corectat ID-ul
    let termsError = terms.nextElementSibling;
    if (!terms.checked) {
        termsError.textContent = "Trebuie să acceptați termenii.";
        valid = false;
    } else {
        termsError.textContent = "";
    }

    // Înregistrare reușită
    if (valid) {
        alert("Înregistrare reușită!");
        document.getElementById("registrationForm").reset();
    }
});

const btnTestDrive = document.getElementById("btnTestDrive");
const popup = document.getElementById("testDrivePopup");
const closeBtn = document.querySelector(".popup .close");
const form = document.getElementById("testDriveForm");

// Deschide popup
btnTestDrive.addEventListener("click", function() {
    popup.classList.add("show");
});

// Închide popup la X
closeBtn.addEventListener("click", function() {
    popup.classList.remove("show");
});

// Închide popup dacă dai click în afara ferestrei
window.addEventListener("click", function(e) {
    if (e.target === popup) {
        popup.classList.remove("show");
    }
});

// Formular Test Drive cu validare
form.addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();

    if(!name || !email || !phone){
        alert("Te rog completează toate câmpurile!");
        return;
    }

    alert("Programarea ta pentru Test Drive a fost trimisă!");
    form.reset();
    popup.classList.remove("show");
});





