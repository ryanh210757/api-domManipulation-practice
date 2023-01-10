fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        const newArray = data.slice(0,5)
        const rootHTML = document.getElementById("root")
        console.log(newArray)
        for(let i=0; i < newArray.length; i++){
            rootHTML.innerHTML += `The title to index ${i} is ${newArray[i].title}`
        }
        
    })