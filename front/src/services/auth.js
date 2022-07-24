const authenticate = (credentials) => {
    fetch('http://localhost:8000/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-type' : 'Application/json',
        },
        body: JSON.stringify(credentials)
    })
        .then((res) => {
            return res.json();
        })
        .then((data)=> {
            console.log(data.token);
        })
}



export default authenticate;