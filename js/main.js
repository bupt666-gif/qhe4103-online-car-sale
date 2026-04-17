const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
        navToggle.classList.toggle("open");
        navLinks.classList.toggle("open");
    });
}

function validateAddCarForm() {
    const color = document.getElementById("color").value.trim();
    const brand = document.getElementById("brand").value.trim();
    const model = document.getElementById("model").value.trim();
    const year = document.getElementById("year").value.trim();
    const price = document.getElementById("price").value.trim();
    const location = document.getElementById("location").value.trim();
    const condition = document.getElementById("condition").value.trim();

    if (color === "") {
        alert("Please enter the car color.");
        return false;
    }

    if (brand === "") {
        alert("Please enter the car brand.");
        return false;
    }

    if (model === "") {
        alert("Please enter the car model.");
        return false;
    }

    if (year === "") {
        alert("Please enter the car year.");
        return false;
    }

    if (Number(year) < 1900 || Number(year) > 2026) {
        alert("Please enter a valid year.");
        return false;
    }

    if (price === "") {
        alert("Please enter the car price.");
        return false;
    }

    if (Number(price) <= 0) {
        alert("Price must be greater than 0.");
        return false;
    }

    if (location === "") {
        alert("Please enter the car location.");
        return false;
    }

    if (condition === "") {
        alert("Please enter the car condition.");
        return false;
    }

    alert("Car added successfully!");
    return false;
}

const searchForm = document.getElementById("searchForm");

if (searchForm) {
    searchForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const model = document.getElementById("model").value.trim().toLowerCase();
        const year = document.getElementById("year").value.trim();

        if (model === "" && year === "") {
            alert("Please enter at least a model or a year.");
            return;
        }
    });
}
