const newUser = (userInfos) => {
    fetch('http://localhost:8000/api/auth/signup', {
        method: 'POST',
        headers : {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(userInfos)
    })
    .then(()=> {
        window.location.href= 'http://localhost:3000';
        alert('Vous venez de créer votre compte !')
    })
}

export default newUser;