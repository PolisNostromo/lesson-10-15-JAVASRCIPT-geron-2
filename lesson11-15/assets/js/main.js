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


const navigation = (page_name) =>{
    const pages = document.querySelectorAll('.fullpage')
    pages.forEach(page =>{
        page.classList.remove('open')
        page.classList.forEach(class_name =>{
            if(class_name === page_name){
                page.classList.add('open')
            }
        })
    })
}


const changeCheckbox = (e) =>{
    // получаем родителя у скрытого чекбокса
    let label = e.parentElement
    // находим стилизованный чекбокс
    let checkbox = label.querySelector('.checkbox')
    // переключаем класс у чекбокса
    checkbox.classList.toggle('checked')
}

const setCheckbox = () =>{
    // получил в виде массива все чекбоксы
    let checkbox_array = document.querySelectorAll('input[type=checkbox]')
    checkbox_array.forEach(item =>{
        if(item.checked){
            item.parentElement.querySelector('.checkbox').classList.add('checked')
        }
    })
}


// для продукта и его размеров с цветами

const setSize = (e) =>{
    // получаем все размеры со страницы
    let size_array = e.parentElement.querySelectorAll('p')
    // перебираем размеры по одному
    size_array.forEach(item =>{
        // у всех размеров удаляем класс
        item.classList.remove('active')
    })
    // устанавливаем выбранному размеру класс активность
    e.classList.add('active')
}

const setColor = (e) =>{
    let color_array = e.parentElement.parentElement.querySelectorAll('.elipse')
    color_array.forEach(item =>{
        item.classList.remove('active')
    })
    e.classList.add('active')
}