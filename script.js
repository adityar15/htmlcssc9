window.addEventListener("load", function(){
    handleFormSubmit()
})

function handleFormSubmit()
{
    // get the form element using the id from the document.
    let form = document.getElementById("username-form")
    
    form.addEventListener("submit", function(event){
    //    prevent default behaviour
        event.preventDefault()

        // create a form data object providing the form element
        let formData = new FormData(form)
        // convert the form data object to an usable object
        let data = Object.fromEntries(formData.entries())

        getUserDetailsFromGithub(data)
    })
}




function getUserDetailsFromGithub(userInput)
{
 fetch(`https://api.github.com/users/${userInput.username}`)
 .then((response) => response.json())
 .then((data) => {
    let userimage = document.querySelector("#userimage")
    let public_repos = document.querySelector("#public_repos")
    let followers = document.querySelector("#followers")
    let usernameTag = document.querySelector("#username")

    usernameTag.innerHTML = data.login
    followers.innerHTML = data.followers
    public_repos.innerHTML = data.public_repos
    userimage.setAttribute("src", data.avatar_url) 

    console.log('data', data)
 })
}


