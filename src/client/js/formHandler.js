function handleSubmit(event) {
    event.preventDefault()
        // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
        .then(res => res.json())
        .then(function(res) {
            console.log(res)
            document.getElementById('results').innerHTML = ""
            var cat = res.category_list
            cat.forEach(function(category) {
                append(category);
            });



        })
}

function append(category) {
    var div = document.createElement('div');
    var str = "category code : " + category.code
    str += "</br>"
    str += "category lablel: " + category.label
    str += "</br>"
    str += "Abs Relevance: " + category.abs_relevance
    str += "</br>"
    str += "Relevance: " + category.relevance
    str += "</br>"
    str += "<hr>"


    div.innerHTML = str;
    //document.body.appendChild(div);
    document.getElementById('results').appendChild(div)
}


export { handleSubmit }