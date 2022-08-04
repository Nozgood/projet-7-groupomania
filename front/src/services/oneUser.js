const getOneUser = (userInfos) => {
    const userId = localStorage.getItem('userId');

    fetch('http://localhost:3000/api/auth/' + userId)
    .then((res)=> {
        return res.json()
    })
    .then((data)=> {
        userInfos.userName = data.userName + ' ' + data.userSurname;
        userInfos.profilePhoto = data.profilePhoto;
        userInfos.coverPhoto = data.coverPhoto;
    })
    console.log(userInfos);
    return userInfos;
}
export default getOneUser