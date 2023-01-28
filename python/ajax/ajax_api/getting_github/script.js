async function main() {
    var response = await fetch('https://api.github.com/users/anthonyrsaephan')
    var codeData = await response.json()

    console.log(codeData)
    tag = document.querySelector("#p")
    tag.innerHTML = codeData.login + " has " + codeData.followers + "followers"
    imageTag = document.querySelector("#img")
    imageTag.src = codeData.avatar_url

}