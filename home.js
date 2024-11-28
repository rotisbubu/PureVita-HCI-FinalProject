const bar = document.getElementById('bar');
const times = document.getElementById('times');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (times) {
    times.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}

// Filter Product
let list = document.querySelectorAll('.list');
let cat = document.querySelectorAll('.cat');

for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function() {
        for (let j = 0; j < list.length; j++) {
            list[j].classList.remove('active');
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');

        // Redirect to product page with filter parameter
        window.location.href = `product.html?category=${dataFilter}`;
    });
}
