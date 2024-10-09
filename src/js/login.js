const btn = document.querySelector('#btn-login')
btn.addEventListener('click', (page) => {
    //Written values
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    // Error checking
    if (email == '' || password == '') {
        page.preventDefault()
        alert('Enter your email and password! ❌')

    } else if (!/^\w+@+\w+\.\w+/.test(email)) {
        page.preventDefault()
        alert('Enter a valid email! ❌')

    } else { // Sucess login
        alert('Login successfully ✅')
    }
})
