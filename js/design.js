const contents = [
    {"img": "../img/original/posterDesign01.png"},
    // {"img": "../img/original/posterDesign02.png"},
    {"img": "../img/original/posterDesign03.png"},
    {"img": "../img/original/posterDesign04.png"},
    {"img": "../img/original/posterDesign05.png"},
    {"img": "../img/original/posterDesign06.png"},
    {"img": "../img/original/posterDesign07.png"},
]

function loadingData() {
    const main = document.querySelector("main")

    contents.forEach(content => {
        const div = document.createElement("div")
        div.classList.add("content")

        div.innerHTML = `
            <img src="${content.img}">
        `

        main.append(div)
    })
}

loadingData()