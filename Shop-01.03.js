"use strict";
const products = document.querySelector(".products");
const buttons = document.querySelectorAll("button");
const inventory = document.querySelector(".inventory");
const allMoney = document.querySelector(".money");
const weight = document.querySelector(".weight");
const input = document.querySelectorAll("input");
const select = document.querySelector("select");
const modal = document.querySelector(".modal");
let money = 200;
let weightLimit = 30;
const items = [
    {
        name: "Milk",
        photo: "https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Glass-and-bottle-of-milk-fe0997a.jpg?quality=90&resize=960,872",
        weight: 0.7,
        price: 2,
        category: "food"
    },
    {
        name: "Bread",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Korb_mit_Br%C3%B6tchen.JPG/1200px-Korb_mit_Br%C3%B6tchen.JPG",
        weight: 0.5,
        price: 3,
        category: "food"
    },
    {
        name: "Meat",
        photo: "https://media.wired.com/photos/5b493b6b0ea5ef37fa24f6f6/125:94/w_2393,h_1800,c_limit/meat-80049790.jpg",
        weight: 2.5,
        price: 4.50,
        category: "food"
    },
    {
        name: "Camera",
        photo: "http://i1.adis.ws/i/canon/eos-r6-rf24-105mm-f4_7.1_is_stm_front-on_square_6412568cc0e7484b96bd55e43069a56c",
        weight: 5,
        price: 200,
        category: "electronics"
    },
    {
        name: "Screen",
        photo: "https://lh3.googleusercontent.com/proxy/wl4THlWX1WeI7MVeP2X0DKLUE7NZr6fdm4WQ32TDzYefkQ67htVue1e-F_RKzSA8oTLNNfsBqGnUSbfeBip4F09i-PnAIyxMCd-l-zgh9ZNxSqcF20aBf_0BbdQ",
        weight: 8,
        price: 150,
        category: "electronics"
    },
    {
        name: "Phone",
        photo: "https://i5.walmartimages.com/asr/10accd37-b241-4d55-b39d-2417f2f80f74.dd8421d47ac8c8517d0b81fe716760b2.jpeg",
        weight: 0.5,
        price: 400,
        category: "electronics"
    },
    {
        name: "Chair",
        photo: "https://www.ikea.com/kr/en/images/products/stefan-chair-brown-black__0727320_pe735593_s5.jpg?f=s",
        weight: 4,
        price: 20,
        category: "furniture"
    },
    {
        name: "Sofa",
        photo: "https://cdn.shopify.com/s/files/1/0056/0912/8000/products/Sofa_lova_Svan_1800x1800.jpg?v=1583269013",
        weight: 60,
        price: 200,
        category: "furniture"
    },
    {
        name: "Lamp",
        photo: "https://greenice.com/57848/a.jpg",
        weight: 4,
        price: 80,
        category: "furniture"
    },
];
function cardClick() {
}
function showAll() {
    //@ts-ignore
    products.innerHTML = "";
    for (const item of items) {
        const card = document.createElement("div");
        card.classList.add("productCard");
        card.onclick = () => {
            if (item.weight <= weightLimit && item.price <= money) {
                // @ts-ignore
                inventory.appendChild(card.cloneNode(true));
                money -= item.price;
                // @ts-ignore
                allMoney.innerHTML = "";
                // @ts-ignore
                allMoney.innerHTML = `Money: ${money}`;
                weightLimit -= item.weight;
                // @ts-ignore
                weight.innerHTML = "";
                // @ts-ignore
                weight.innerHTML = `Weight Limit: ${weightLimit}`;
            }
        };
        card.innerHTML = `

<img src="${item.photo}" alt="">
<div>
<h5>Name:${item.name}</h5>
<h5>Weight:${item.weight}</h5>
<h5>Price:${item.price}</h5>
</div>
`;
        products?.appendChild(card);
    }
}
showAll();
function showCategory(category) {
    products.innerHTML = "";
    for (const item of items) {
        if (item.category === category) {
            const card = document.createElement("div");
            card.classList.add("productCard");
            card.onclick = () => {
                inventory.appendChild(card.cloneNode(true));
                money -= item.price;
                // @ts-ignore
                allMoney.innerHTML = "";
                // @ts-ignore
                allMoney.innerHTML = `Money: ${money}`;
                weightLimit -= item.weight;
                // @ts-ignore
                weight.innerHTML = "";
                // @ts-ignore
                weight.innerHTML = `Weight Limit: ${weightLimit}`;
            };
            card.innerHTML = `

<img src="${item.photo}" alt="">
<div>
<h5>Name:${item.name}</h5>
<h5>Weight:${item.weight}</h5>
<h5>Price:${item.price}</h5>
</div>
`;
            products?.appendChild(card);
        }
    }
}
//@ts-ignore
buttons[0].onclick = () => showCategory("food");
//@ts-ignore
buttons[1].onclick = () => showCategory("electronics");
//@ts-ignore
buttons[2].onclick = () => showCategory("furniture");
//@ts-ignore
buttons[3].onclick = showAll;
//@ts-ignore
buttons[4].onclick = () => {
    modal.style.display = "flex";
};
console.log(buttons);
//@ts-ignore
buttons[5].onclick = () => {
    console.log(select.value);
    if (select.value !== "") {
        const card = document.createElement("div");
        items.push({
            name: input[0].value,
            photo: input[3].value,
            weight: Number(input[2].value),
            price: Number(input[1].value),
            category: select.value
        });
        card.onclick = () => {
            inventory.appendChild(card.cloneNode(true));
            money -= Number(input[1].value);
            // @ts-ignore
            allMoney.innerHTML = "";
            // @ts-ignore
            allMoney.innerHTML = `Money: ${money}`;
            weightLimit -= Number(input[2].value);
            // @ts-ignore
            weight.innerHTML = "";
            // @ts-ignore
            weight.innerHTML = `Weight Limit: ${weightLimit}`;
        };
        card.classList.add("productCard");
        card.innerHTML = `

<img src="${input[3].value}" alt="">
<div>
<h5>Name:${input[0].value}</h5>
<h5>Weight:${input[2].value}</h5>
<h5>Price:${input[1].value}</h5>
</div>
`;
        products?.appendChild(card);
    }
    modal.style.display = "none";
};
