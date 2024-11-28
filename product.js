const bar = document.getElementById('bar');
const times = document.getElementById('times');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(times){
    times.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


// Filter Product
let list = document.querySelectorAll('.list');
let cat = document.querySelectorAll('.cat');

for(let i = 0; i < list.length; i++){
    list[i].addEventListener('click', function(){
        for(let j = 0; j < list.length; j++){
            list[j].classList.remove('active');
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');

        for(let k = 0; k < cat.length; k++){
            cat[k].classList.remove('hide');
            cat[k].classList.add('hide');

            if(cat[k].getAttribute('data-item') == dataFilter || dataFilter == "all"){
                cat[k].classList.remove('hide');
                cat[k].classList.add('active');
            }
        }
    })
}

// Retrieve the filter parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const filter = urlParams.get('filter');

// Apply the filter if it exists
if (filter) {
  // Select the corresponding filter option
  const filterOption = document.querySelector(`.list[data-filter="${filter}"]`);
  if (filterOption) {
    filterOption.click(); // Trigger the click event to apply the filter
  }
}