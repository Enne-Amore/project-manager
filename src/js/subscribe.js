// Registered users
const users = []

const btn = document.querySelector('#btn-subscribe')
btn.addEventListener('click', (page) => {
    //Written values
    const email = document.querySelector('#email').value
    const name = document.querySelector('#name').value

    // Error checking
    if (email == '' || name == '') {
        page.preventDefault()
        alert('Enter your email and name!')

    } else if (!/^\w+@+\w+\.\w+/.test(email)) {
        page.preventDefault()
        alert('Enter a valid email! ')
        
    } else if (!/^[a-zA-Z0-9-_]/.test(name)) {
        page.preventDefault()
        alert('Enter a valid name! ')
    }

    // Adding registration to the list
    const user = {
        email, name
    }
    users.push(user)

    // Save in Local Storage
    const usersJSON = JSON.stringify(users)
    localStorage.setItem('saveData', usersJSON)
})

// Recovery of save data
const recoveryData = localStorage.getItem('saveData')
localStorage.setItem('saveData', recoveryData)
