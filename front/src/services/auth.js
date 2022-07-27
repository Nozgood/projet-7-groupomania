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
            localStorage.setItem('token', data.token);
            window.location.href = 'http://localhost:3000/';

            if(data.isAdmin) {
                localStorage.setItem('admin', 1);
            } else {
                localStorage.setItem('admin', 0);
            }
        })
}



export default authenticate;