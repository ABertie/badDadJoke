function getJoke() {
    const amIaJoke2u = document.querySelector(".amIaJoke2u")
    amIaJoke2u.innerText = "Loading..."

    fetch("https://icanhazdadjoke.com", {
        header: {
            "accept": "application/json"
        },
        method: "GET" // optional, fordi det er GET
    })
        .then(function(response) {
            if (response.status === 200) {
            return response.json()
            }
        })
        .then(function(result) {
            amIaJoke2u.innerText = result.joke
        })
}

const button = document.querySelector(".jokeButton")
button.addEventListener("click", getJoke)