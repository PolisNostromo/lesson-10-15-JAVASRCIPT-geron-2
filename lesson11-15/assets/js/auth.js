const users = [
    {
        id: 1,
        login: "test",
        password: "qwerty",
        phone: "777"
    }
]

const login = () =>{
    let email = document.querySelector('input[type=email]').value
    let phone = document.querySelector('input[type=tel]').value
    let password = document.querySelector('input[type=password]').value

    users.forEach(user=>{
        if(user.login === email & user.password === password && user.phone === phone){
            window.location = 'app.html'
        }
    })
}