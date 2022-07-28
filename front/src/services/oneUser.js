const getOneUser = (userInfos) => {
    const userId = localStorage.getItem('userId');

    fetch('http://localhost:3000/api/auth/' + userId)
    .then((res)=> {
        return res.json()
    })
    .then((data)=> {
        userInfos.userName = data.userName;
        userInfos.userSurname = data.userSurname;
        userInfos.profilePhoto = data.profilePhoto;
        userInfos.coverPhoto = data.coverPhoto;
        console.log(userInfos);
    })
}
export default getOneUser