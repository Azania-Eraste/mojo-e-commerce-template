let selected_page = document.querySelectorAll(".selected-page");
let selected_gender = document.querySelectorAll(".selected-gender");
let btn_cart = document.querySelectorAll(".btn-cart");
let buy = 1;

btn_cart.forEach(element => {
    element.addEventListener('click', () => {
        let container = document.querySelector("#cart-counter");
        console.log("1");
        console.log(btn_cart)
        if (container) {
            buy++;
            container.innerHTML = `<span>(${buy})</span>`;
        }
    });
});

