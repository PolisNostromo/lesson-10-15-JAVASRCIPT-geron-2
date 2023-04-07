fetch('./pages/components/header.html')
    .then(response =>{
        return response.text()
    })
    .then(data =>{
        document.querySelector('.wrapper').innerHTML = data
    })

fetch('./pages/components/main.html')
    .then(response =>{
        return response.text()
    })
    .then(data =>{
        document.querySelector('.include-main').innerHTML = data
    })

    fetch('./pages/components/category.html')
    .then(response =>{
        return response.text()
    })
    .then(data =>{
        document.querySelector('.include-category').innerHTML = data
    })

fetch('./pages/components/cards.html')
    .then(response =>{
        return response.text()
    })
    .then(data =>{
        document.querySelector('.include-cards').innerHTML = data
        setCards()
    })

    fetch('./pages/components/footer.html')
    .then(response =>{
        return response.text()
    })
    .then(data =>{
        document.querySelector('.include-footer').innerHTML = data
    })