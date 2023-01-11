let postArray = []

function render(){
    let html = ""
        for(item of postArray){
            html += `
                <h3>${item.title}</h3>
                <p>${item.body}</p>
            `
        }

        document.getElementById("root").innerHTML = html
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        postArray = data.slice(0,5)
        render()
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
                postArray.unshift(data)
                render()
                document.getElementById("formData").reset()
            })
  
    })