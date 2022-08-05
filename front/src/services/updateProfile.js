const userId = localStorage.getItem('userId');

const updateProfile = (data)=> {
    fetch('http://localhost:3000/api/auth/update/' + userId, {
        method: 'PUT',
        headers: {
            'Content-Type': 'Application-json',
        },
        body: JSON.stringify(data),
    })
        .then((res)=> console.log(res))
        .catch((err)=> console.log(err))
}

export default updateProfile