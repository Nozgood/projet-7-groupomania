const newUser = (userInfos) => {
    fetch('http://localhost:8000/api/auth/signup', {
        method: 'POST',
        headers : {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(userInfos)
    })
    .then((res)=> {
        return res.json();
    })
    .then((data)=> {
        console.log(data);
    })
}

export default newUser;