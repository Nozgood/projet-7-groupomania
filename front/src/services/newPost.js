const newPost = (postInfos) => {
    fetch('http://localhost:3000/api/posts/new', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(postInfos),
    })
    .then((res)=> {
        return res.json();
    })
    .then((data)=> {
        return console.log(data);
    })
}

export default newPost;