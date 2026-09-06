
// ================= PRODUCTS =================

const products = [

    {
        name: "Espresso",
        category: "coffee",
        price: 3.00,
        image: "img/Espresso.jpg",
        description: "Rich and bold espresso made from freshly ground beans."
    },

    {
        name: "Americano",
        category: "coffee",
        price: 3.50,
        image: "img/americano.jpg",
        description: "Smooth espresso combined with hot water."
    },

    {
        name: "Cappuccino",
        category: "coffee",
        price: 4.50,
        image: "img/Cappuccino.jpg",
        description: "Espresso topped with steamed milk and creamy foam."
    },

    {
        name: "Café Latte",
        category: "coffee",
        price: 4.75,
        image: "img/cafe Latte.jpg",
        description: "Smooth espresso with warm steamed milk."
    },

    {
        name: "Mocha",
        category: "coffee",
        price: 5.00,
        image: "img/Mocha.jpg",
        description: "Chocolate, espresso and steamed milk combined together."
    },

    {
        name: "Iced Latte",
        category: "cold",
        price: 5.00,
        image: "img/iced latte.jpg",
        description: "Refreshing espresso and milk served over ice."
    },

    {
        name: "Iced Mocha",
        category: "cold",
        price: 5.50,
        image: "img/Iced Mocha.jpg",
        description: "Chocolate and espresso served cold with milk."
    },

    {
        name: "Cold Brew",
        category: "cold",
        price: 4.75,
        image: "img/ColdBrew.jpg",
        description: "Slow-brewed coffee with a smooth, refreshing taste."
    },

    {
        name: "Chocolate Cake",
        category: "dessert",
        price: 5.00,
        image: "img/chocolatecake.jpg",
        description: "Rich chocolate cake perfect with your favorite coffee."
    },

    {
        name: "Cheesecake",
        category: "dessert",
        price: 5.50,
        image: "img/Cheesecake.jpg",
        description: "Creamy cheesecake with a delicious biscuit base."
    },

    {
        name: "Tiramisu",
        category: "dessert",
        price: 6.00,
        image: "img/Tiramisu.jpg",
        description: "Classic Italian dessert with coffee and mascarpone."
    },

    {
        name: "Croissant",
        category: "snack",
        price: 3.50,
        image: "img/croissant.jpg",
        description: "Freshly baked, buttery and flaky croissant."
    }

];


// ================= PRODUCT DISPLAY =================

const productContainer =
    document.getElementById("productContainer");

const noResults =
    document.getElementById("noResults");


function displayProducts(productList) {

    productContainer.innerHTML = "";

    if (productList.length === 0) {

        noResults.classList.remove("d-none");

        return;
    }

    noResults.classList.add("d-none");


    productList.forEach(function(product) {

        const productHTML = `

            <div class="col-sm-6 col-lg-4">

                <div class="card product-card h-100">

                    <img
                        src="${product.image}"
                        class="card-img-top"
                        alt="${product.name}"
                    >

                    <div class="card-body d-flex flex-column">

                        <h5 class="card-title">
                            ${product.name}
                        </h5>

                        <p class="product-description">
                            ${product.description}
                        </p>

                        <div class="mt-auto
                            d-flex
                            justify-content-between
                            align-items-center">

                            <span class="product-price">
                                $${product.price.toFixed(2)}
                            </span>

                            <button
                                class="btn btn-sm btn-coffee"
                                onclick="orderProduct('${product.name}')">

                                Order

                            </button>

                        </div>

                    </div>

                </div>

            </div>

        `;

        productContainer.innerHTML += productHTML;

    });

}
// Display all products when page loads
displayProducts(products);
// ================= SEARCH =================

const searchInput =
    document.getElementById("searchInput");


searchInput.addEventListener("input", function() {

    const searchText =
        searchInput.value.toLowerCase().trim();


    const filteredProducts =
        products.filter(function(product) {

            return (
                product.name
                    .toLowerCase()
                    .includes(searchText)

                ||

                product.category
                    .toLowerCase()
                    .includes(searchText)

                ||

                product.description
                    .toLowerCase()
                    .includes(searchText)
            );

        });


    displayProducts(filteredProducts);

});


// ================= CATEGORY FILTER =================

const categoryButtons =
    document.querySelectorAll(".category-btn");


categoryButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Remove active class from all buttons

        categoryButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });


        // Add active class to clicked button

        button.classList.add("active");
        const category =
            button.getAttribute("data-category");

        if (category === "all") {
            displayProducts(products);
        } else {

            const filteredProducts =
                products.filter(function(product) {
                    return product.category === category;
                });
            displayProducts(filteredProducts);
        }

        // Clear search box
        searchInput.value = "";

    });

});


// ================= ORDER BUTTON =================

function orderProduct(productName) {

    alert(
        "☕ " +
        productName +
        " has been added to your order!"
    );

}


// ================= CONTACT FORM =================

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    const nameError =
        document.getElementById("nameError");

    const emailError =
        document.getElementById("emailError");

    const messageError =
        document.getElementById("messageError");


    const successMessage =
        document.getElementById("successMessage");


    // Clear previous errors

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    successMessage.classList.add("d-none");


    let valid = true;


    // Validate name

    if (name === "") {

        nameError.textContent =
            "Please enter your name.";

        valid = false;

    }


    // Validate email

    if (email === "") {

        emailError.textContent =
            "Please enter your email.";

        valid = false;

    }
    else if (!email.includes("@")) {

        emailError.textContent =
            "Please enter a valid email.";

        valid = false;

    }


    // Validate message

    if (message === "") {

        messageError.textContent =
            "Please enter your message.";

        valid = false;

    }


    // If everything is valid

    if (valid) {

        successMessage.classList.remove("d-none");

        contactForm.reset();

    }

});

// =========================
// ORDER FORM
// =========================

const orderForm = document.getElementById("orderForm");

orderForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("orderName").value.trim();
    const phone = document.getElementById("orderPhone").value.trim();
    const product = document.getElementById("orderProduct").value;
    const quantity = document.getElementById("orderQuantity").value;

    const nameError = document.getElementById("orderNameError");
    const phoneError = document.getElementById("orderPhoneError");
    const productError = document.getElementById("orderProductError");
    const successMessage = document.getElementById("orderSuccess");

    // Clear previous errors
    nameError.textContent = "";
    phoneError.textContent = "";
    productError.textContent = "";
    successMessage.style.display = "none";

    let valid = true;

    // Name validation
    if (name === "") {
        nameError.textContent = "Please enter your name.";
        valid = false;
    }

    // Phone validation
    if (phone === "") {
        phoneError.textContent = "Please enter your phone number.";
        valid = false;
    }

    // Product validation
    if (product === "") {
        productError.textContent = "Please select a product.";
        valid = false;
    }

    // Quantity validation
    if (quantity < 1) {
        valid = false;
    }

    // If everything is valid
    if (valid) {

        successMessage.innerHTML = `
            ☕ <strong>Order placed successfully!</strong>
            <br>
            Thank you, ${name}!
            <br>
            <small>
                ${quantity} × ${product} — ${document.querySelector('input[name="orderType"]:checked').value}
            </small>
        `;

        successMessage.style.display = "block";

        orderForm.reset();

        // Keep Pickup selected after reset
        document.getElementById("pickup").checked = true;

        successMessage.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }
});