document.addEventListener("DOMContentLoaded", function () {
    const quoteForm = document.getElementById('quoteForm');
    const transportSection = document.getElementById('transportSection');
    const detailsSection = document.getElementById('detailsSection');
    const nextBtn = document.querySelector('.next-btn');
    const dueNowElement = document.getElementById('dueNow');
    const regularPriceElement = document.getElementById('regularPrice');

    nextBtn.addEventListener('click', function () {
        transportSection.style.display = 'none';
        detailsSection.style.display = 'block';
        document.querySelector('.step.active').classList.remove('active');
        document.querySelector('.step:nth-child(2)').classList.add('active');
    });

    quoteForm.addEventListener('submit', function (e) {
        e.preventDefault();
        calculateQuote();
    });

    function calculateQuote() {
        const distance = parseFloat(document.getElementById('distance').value);
        const transportType = document.getElementById('transportType').value;
        const vehicleCondition = document.getElementById('vehicleCondition').value;

        let baseRate = getBaseRate(distance);
        if (transportType === 'enclosed') {
            baseRate += 350;
        }
        if (vehicleCondition === 'inoperable') {
            baseRate *= 1.25;
        }

        const regularPrice = baseRate * distance;
        const discountedPrice = regularPrice * 0.94;

        dueNowElement.textContent = `$${discountedPrice.toFixed(2)}`;
        regularPriceElement.textContent = `$${regularPrice.toFixed(2)}`;
    }

    function getBaseRate(distance) {
        if (distance <= 100) return 1.75;
        if (distance <= 200) return 1.27;
        return 1.00; // Default base rate for long distances
    }
});

//PAYMENT SECTION
document.addEventListener("DOMContentLoaded", function() {
    const paymentOptions = document.querySelectorAll(".option");

    paymentOptions.forEach(option => {
        option.addEventListener("click", function() {
            paymentOptions.forEach(opt => opt.classList.remove("active"));
            this.classList.add("active");
        });
    });
});

//REDIRECT 
// document.getElementById('pickup').addEventListener('click', function() {
//     window.location.href = 'pickup.html';
// });
// document.getElementById('delivery').addEventListener('click', function() {
//     window.location.href = 'delivery.html';
// });
document.addEventListener('DOMContentLoaded', function() {

const pages = {
    'pickup': 'pickup.html',
    'delivery-btn': 'delivery.html',
    'bookshipment': 'bookshipment.html',
    'details': 'details.html',
    'payment': 'payment.html'
};

// Loop through the object and add event listeners to each element
for (const [id, url] of Object.entries(pages)) {
    document.getElementById(id).addEventListener('click', function() {
        window.location.href = url;
    });
}
});

