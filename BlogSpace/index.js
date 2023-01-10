fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        const newArray = data.slice(0,5)
        let html = ""
        for(item of newArray){
            html += `
                <h3>${item.title}</h3>
                <p>${item.body}</p>
            `
        }

        document.getElementById("root").innerHTML = html

        
        
    })