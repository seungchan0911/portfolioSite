const contents = [
    {
        "link": "https://life-sharp-high-school-assignment.vercel.app/",
        "freeview-img": "",
        "freeview-categorys": ["HTML", "CSS", "JS"],
        "title": "life sharp",
        "sub-title": "2024 October Project",
        "hashtags": ["original", "devlop", "design", "moblie & desktop"]
    },
    {
        "link": "https://www.figma.com/proto/HcseLEn4BIf8xOkBVxBTeJ/Airpods?page-id=&node-id=2-79&viewport=776%2C368%2C0.24&t=dLd32EsSN1DZmX9x-1&scaling=contain&content-scaling=fixed&starting-point-node-id=1%3A2",
        "freeview-img": "",
        "freeview-categorys": ["Figma"],
        "title": "airpods introduce remake",
        "sub-title": "2024 September Project",
        "hashtags": ["remake", "design", "desktop"]
    },
    {
        "link": "https://www.figma.com/design/ScoxT2wWOwiOZQIGnWl1Vg/KREAM?node-id=0-1&t=76dSHa5mUh2ycTir-1",
        "freeview-img": "",
        "freeview-categorys": ["Figma"],
        "title": "kream remake design",
        "sub-title": "2024 September Project",
        "hashtags": ["remake", "design", "moblie & desktop"]
    },
    {
        "link": "https://kream-remake-phone.vercel.app/",
        "freeview-img": "",
        "freeview-categorys": ["HTML", "CSS", "JS"],
        "title": "kream remake",
        "sub-title": "2025 January Project",
        "hashtags": ["remake", "devleop", "moblie"]
    },
    {
        "link": "https://geul-fun.vercel.app/",
        "freeview-img": "",
        "freeview-categorys": ["HTML", "CSS", "JS"],
        "title": "geulfun",
        "sub-title": "2025 April Project",
        "hashtags": ["original", "devleop", "design","desktop"]
    },
    {
        "link": "https://enforce-sword-game.vercel.app/",
        "freeview-img": "",
        "freeview-categorys": ["HTML", "CSS", "JS"],
        "title": "enforce sword game",
        "sub-title": "2025 May Project",
        "hashtags": ["game", "devleop", "design", "moblie & desktop"]
    },
]

function loadingData() {
    const main = document.querySelector("main")

    contents.forEach(content => {
        const div = document.createElement("div")
        div.classList.add("content")

        const categoryListItems = content["freeview-categorys"]
            .map(category => `<li>${category}</li>`)
            .join("")

        const hashtagListItems = content.hashtags
            .map(tag => `<li>${tag}</li>`)
            .join("")

        div.innerHTML = `
            <a href="${content.link}">
                <div class="freeview" style="background-image: url(${content["freeview-img"]})">
                    <ul class="freeview-category">
                        ${categoryListItems}
                    </ul>
                </div>
            </a>
            <div class="text-group">
                <div class="content-title">
                    <a href="${content.link}">${content.title}</a>
                </div>
                <div class="content-sub-title">${content["sub-title"]}</div>
                <ul class="content-hashtag">
                    ${hashtagListItems}
                </ul>
            </div>
        `

        main.append(div)
    })
}

loadingData()

function headerMargin() {
    const header = document.querySelector("header")
    const main = document.querySelector("main")
    
    main.style.marginTop = header.offsetHeight + "px"
}

headerMargin()

function mobileMenuScroll() {
    let scrollY

    const checkbox = document.getElementById('mobile-menu')

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            scrollY = window.scrollY

            document.body.style.position = 'fixed'
            document.body.style.top = `-${scrollY}px`
            document.body.style.left = '0'
            document.body.style.right = '0'
        } else {
            document.body.style.position = ''
            document.body.style.top = ''
            document.body.style.left = ''
            document.body.style.right = ''

            window.scrollTo(0, scrollY);
        }
    })
}

mobileMenuScroll()
