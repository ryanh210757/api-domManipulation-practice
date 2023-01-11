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

    document.getElementById("formData").addEventListener("submit", function(e) {
        e.preventDefault()
        
        const title = document.getElementById("post-title").value
        const body = document.getElementById("post-body").value
        const data = {
            title: title, 
            body: body
        }
 


        const postMethod = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type" : "application/json"
            }
        }

        //adds new entry to top of html
        fetch("https://apis.scrimba.com/jsonplaceholder/posts", postMethod)
            .then(res => res.json())
            .then(data => {
                document.getElementById("root").innerHTML = `
                    <h3>${data.title}</h3>
                    <p>${data.body}</p>
                    ${document.getElementById("root").innerHTML}
                `
            })
  
    })