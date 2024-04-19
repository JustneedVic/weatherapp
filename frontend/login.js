// Insert your code here

document.querySelector('#register').addEventListener('click', () => {

    const userName = document.querySelector('#registerName').value
    const userEmail = document.querySelector('#registerEmail').value
    const userPassword = document.querySelector('#registerPassword').value


    fetch('http://localhost:3000/users/signup', {

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: userName, email: userEmail, password: userPassword })

    }).then(response => response.json())
        .then(data => {
            if (data.result) {
                window.location.assign('index.html')
            }
        })

})



document.querySelector('#connection').addEventListener('click', () => {

    const memberEmail = document.querySelector('#connectionEmail').value
    const memberPassword = document.querySelector('#connectionPassword').value


    fetch('http://localhost:3000/users/signin', {

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: memberEmail, password: memberPassword })

    }).then(response => response.json())
        .then(data => {
            if (data.result) {
                window.location.assign('index.html')
            }
        })

})