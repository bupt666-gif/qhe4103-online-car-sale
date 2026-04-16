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

//search
const cars = [
    {
        id: 1,
        model: "Camry",
        brand: "Toyota",
        year: 2020,
        color: "Blue",
        location: "London",
        price: 20000,
        condition: "Used",
        image: "images/car1.jpg"
    },
    {
        id: 2,
        model: "Civic",
        brand: "Honda",
        year: 2021,
        color: "White",
        location: "Manchester",
        price: 18500,
        condition: "Used",
        image: "images/car2.jpg"
    },
    {
        id: 3,
        model: "X3",
        brand: "BMW",
        year: 2022,
        color: "Black",
        location: "Birmingham",
        price: 35000,
        condition: "New",
        image: "images/car3.jpg"
    }
];

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

        localStorage.setItem("searchModel", model);
        localStorage.setItem("searchYear", year);

        window.location.href = "result.html";
    });
}
const resultsContainer = document.getElementById("resultsContainer");

if (resultsContainer) {
    const searchModel = localStorage.getItem("searchModel") || "";
    const searchYear = localStorage.getItem("searchYear") || "";

    const filteredCars = cars.filter(car => {
        const modelMatch = searchModel === "" || car.model.toLowerCase().includes(searchModel);
        const yearMatch = searchYear === "" || car.year.toString() === searchYear;
        return modelMatch && yearMatch;
    });

    if (filteredCars.length === 0) {
        resultsContainer.innerHTML = "<p>No matching cars found.</p>";
    } else {
        resultsContainer.innerHTML = filteredCars.map(car => `
            <article class="car-card">
                <div class="car-card-image">
                    <img src="${car.image}" alt="${car.brand} ${car.model}">
                </div>

                <div class="car-card-body">
                    <h3 class="car-card-title">${car.brand} ${car.model}</h3>
                    <p class="car-card-meta">${car.year} · ${car.color} · ${car.location}</p>

                    <div class="car-card-footer">
                        <span class="car-card-price">£${car.price}</span>
                        <a href="car-detail.html?id=${car.id}" class="btn btn-primary btn-sm">View Details</a>
                    </div>
                </div>
            </article>
        `).join("");
    }
}

const detailTitle = document.getElementById("detailTitle");

if (detailTitle) {
    const params = new URLSearchParams(window.location.search);
    const carId = params.get("id");

    const selectedCar = cars.find(car => car.id == carId);

    if (selectedCar) {
        document.getElementById("detailImage").src = selectedCar.image;
        document.getElementById("detailImage").alt = selectedCar.brand + " " + selectedCar.model;

        document.getElementById("detailTitle").textContent = selectedCar.brand + " " + selectedCar.model;
        document.getElementById("detailBrand").textContent = selectedCar.brand;
        document.getElementById("detailModel").textContent = selectedCar.model;
        document.getElementById("detailYear").textContent = selectedCar.year;
        document.getElementById("detailColor").textContent = selectedCar.color;
        document.getElementById("detailLocation").textContent = selectedCar.location;
        document.getElementById("detailPrice").textContent = selectedCar.price;
        document.getElementById("detailCondition").textContent = selectedCar.condition;
    }
}
