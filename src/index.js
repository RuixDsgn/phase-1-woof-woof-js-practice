// Global Variables
const dogUrl = "http://localhost:3000/pups"
const divBar = document.querySelector("div#dog-bar")
const divInfo = document.querySelector("#dog-info")
const btn = document.createElement("button")

// Fetch API
function getDogs() {
    fetch(dogUrl)
    .then((res) => res.json())
    .then((dogs) => dogs.forEach(dog => {
        renderDogs(dog)
    }))
}

const renderDogs = (dogData) => {
    const span = document.createElement("span")
    span.textContent = dogData.name

    span.addEventListener("click", (e) => {
        console.log(e.target, dogData)
        const img = document.createElement("img")
        const h2 = document.createElement("h2")

        img.src = dogData.image
        h2.textContent = dogData.name
        btn.textContent = dogData.isGoodDog

        divInfo.append(img, h2, btn)
    })

    divBar.append(span)
}

const handleToggle = () => {
  if (btn.textContent === "true") {
    return btn.textContent = "Good Dog!"
  }
  else {
    return btn.textContent = "Bad Dog!"
  }
}

const init = () => {
    getDogs()
}

init()

btn.addEventListener("click", handleToggle)