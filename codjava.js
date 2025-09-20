// Calculator diferență zile
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

// Calculator diferență ore
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

// Slideshow
let slideIndex = 0;
showSlides(slideIndex);

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = n;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

function plusSlides(n) {
    showSlides(slideIndex + n);
}

// Formular de înregistrare
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let valid = true;

    let name = document.getElementById("name");
    let nameError = name.nextElementSibling;
    if (name.value.trim().length < 3) {
        nameError.textContent = "Numele trebuie să aibă cel puțin 3 caractere.";
        valid = false;
    } else {
        nameError.textContent = "";
    }

    let email = document.getElementById("email");
    let emailError = email.nextElementSibling;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        emailError.textContent = "Introduceți un email valid.";
        valid = false;
    } else {
        emailError.textContent = "";
    }

    let phone = document.getElementById("phone");
    let phoneError = phone.nextElementSibling;
    let phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone.value)) {
        phoneError.textContent = "Numărul trebuie să conțină exact 10 cifre.";
        valid = false;
    } else {
        phoneError.textContent = "";
    }

    let password = document.getElementById("password");
    let passwordError = password.nextElementSibling;
    if (password.value.length < 6) {
        passwordError.textContent = "Parola trebuie să aibă cel puțin 6 caractere.";
        valid = false;
    } else {
        passwordError.textContent = "";
    }

    let confirmPassword = document.getElementById("confirmPassword");
    let confirmPasswordError = confirmPassword.nextElementSibling;
    if (confirmPassword.value !== password.value) {
        confirmPasswordError.textContent = "Parolele nu coincid.";
        valid = false;
    } else {
        confirmPasswordError.textContent = "";
    }

    let terms = document.getElementById("terms");
    let termsError = terms.nextElementSibling;
    if (!terms.checked) {
        termsError.textContent = "Trebuie să acceptați termenii.";
        valid = false;
    } else {
        termsError.textContent = "";
    }

    if (valid) {
        alert("Înregistrare reușită!");
        document.getElementById("registrationForm").reset();
    }
});
    

<script>
document.getElementById("menuButton").addEventListener("click", function() {
    document.getElementById("menu").classList.toggle("show");
});
</script>
