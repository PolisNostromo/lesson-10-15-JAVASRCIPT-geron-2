let cards = [
    {
        img: "./assets/img/t-shirt.png",
        title: "T-Shirt Spring Collection",
        price: 300
    },
    {
        img: "./assets/img/sneaker.jpg",
        title: "Sneakers Spring Collection",
        price: 320
    },
    {
        img: "./assets/img/accessories.jpg",
        title: "Clocks Xiaomi Collection",
        price: 420
    }
]


const setCards = () =>{
    let cards_container = document.querySelector('.cards .container')
    cards.forEach(card => {
        let html_card = `
        <div class="card">
        <div class="cover">
            <img src=${card.img} alt="">
            <div class="circle"></div>
        </div>
        <div class="card-content">
            <h4>${card.title}</h4>
            <p class="price">${card.price}$</p>
        </div>
    </div>
        `
        cards_container.innerHTML += html_card
    });
}


const sortCards = () =>{
    cards.sort((a, b)=>{
        return b.price - a.price
    })
}
sortCards()