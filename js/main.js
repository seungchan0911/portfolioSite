// 개발, 디자인을 따로 만든 데이터들, 팝업 개발 후 모두 병합예정.
const contents = [
    {
        id: "life sharp",
        "link": "https://life-sharp-high-school-assignment.vercel.app/",
        "freeview-categorys": ["HTML", "CSS", "JS"],
        "title": "life sharp",
        "sub-title": "2024 October Project",
        "hashtags": ["original", "development", "design", "moblie & desktop"]
    },
    {
        id: "airpods introduce remake prototype",
        "link": "https://www.figma.com/proto/HcseLEn4BIf8xOkBVxBTeJ/Airpods?page-id=&node-id=2-79&viewport=776%2C368%2C0.24&t=dLd32EsSN1DZmX9x-1&scaling=contain&content-scaling=fixed&starting-point-node-id=1%3A2",
        "freeview-categorys": ["Figma"],
        "title": "airpods introduce remake",
        "sub-title": "2024 September Project",
        "hashtags": ["remake", "design", "desktop"]
    },
    {
        id: "kream remake prototype",
        "link": "https://www.figma.com/design/ScoxT2wWOwiOZQIGnWl1Vg/KREAM?node-id=0-1&t=76dSHa5mUh2ycTir-1",
        "freeview-categorys": ["Figma"],
        "title": "kream remake",
        "sub-title": "2024 September Project",
        "hashtags": ["remake", "design", "moblie & desktop"]
    },
    {
        id: "introduce items prototype",
        "link": "https://www.figma.com/design/xkM0jdRxf07BPLfo6Ou2Sc/%EC%9D%B8%EC%8A%A4%ED%83%80%EA%B7%B8%EB%9E%A8-%EB%94%94%EC%9E%90%EC%9D%B8?node-id=0-1&t=Usq84usm7qesswt8-1",
        "freeview-categorys": ["Figma"],
        "title": "introduce items",
        "sub-title": "2024 December Project",
        "hashtags": ["gallery", "design", "moblie"]
    },
    {
        id: "kream remake",
        "link": "https://kream-remake-phone.vercel.app/",
        "freeview-categorys": ["HTML", "CSS", "JS"],
        "title": "kream remake",
        "sub-title": "2025 January Project",
        "hashtags": ["remake", "development", "moblie"]
    },
    {
        id: "geulfun",
        "link": "https://geul-fun.vercel.app/",
        "freeview-categorys": ["HTML", "CSS", "JS"],
        "title": "geulfun",
        "sub-title": "2025 April Project",
        "hashtags": ["original", "development", "design","desktop"]
    },
    {
        id: "enforce sword game",
        "link": "https://enforce-sword-game.vercel.app/",
        "freeview-categorys": ["HTML", "CSS", "JS"],
        "title": "enforce sword game",
        "sub-title": "2025 May Project",
        "hashtags": ["game", "development", "design", "moblie & desktop"]
    },
    {
        id: "find lost items at our school",
        "link": "https://www.figma.com/proto/IpQosbyH9h95uOpZxfMns1/Untitled?page-id=0%3A1&node-id=170-98&p=f&viewport=-189%2C50%2C0.82&t=yWTdOuWaynSJsrA4-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=170%3A98",
        "freeview-categorys": ["Figma"],
        "title": "find lost items at our school",
        "sub-title": "2025 May Project",
        "hashtags": ["team project", "design", "moblie"]
    },
    {
        id: "find lost items at our school",
        "link": "https://asan-project.vercel.app",
        "freeview-categorys": ["HTML", "CSS", "JS"],
        "title": "find lost items at our school",
        "sub-title": "2025 May Project",
        "hashtags": ["team project", "develop", "moblie"]
    },
    {
        id: "seungchan kim portfolio site prototype",
        "link": "https://www.figma.com/design/iXpUuEMufOuONhvsF2AX7k/Portfolio-site-design?node-id=0-1&t=m3LnUAbntuCCvPTy-1",
        "freeview-categorys": ["Figma"],
        "title": "seungchan kim portfolio site",
        "sub-title": "2025 May Project",
        "hashtags": ["original", "design", "moblie & desktop"]
    },
    {
        id: "seungchan kim portfolio site",
        "link": "https://seungchan-kim-portfolio-site.vercel.app/index.html",
        "freeview-categorys": ["HTML", "CSS", "JS"],
        "title": "seungchan kim portfolio site",
        "sub-title": "2025 May Project",
        "hashtags": ["original", "development", "moblie & desktop"]
    },
    {
        id: "cactus curry club prototype",
        "link": "https://www.figma.com/proto/iuwlVsMMfenFheEWXhq890/cactus-curry-club-design-prototype?page-id=0%3A1&node-id=1-2&viewport=45%2C224%2C1.12&t=eaQDwzbiMXW6RYKh-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=62%3A529",
        "freeview-categorys": ["Figma"],
        "title": "cactus curry club",
        "sub-title": "2025 May Project",
        "hashtags": ["real project", "design", "mobile & desktop"]
    },
    {
        id: "cactus curry club",
        "link": "https://cactus-curry-club.vercel.app",
        "freeview-categorys": ["HTML", "CSS", "JS"],
        "title": "cactus curry club",
        "sub-title": "2025 May Project",
        "hashtags": ["real project", "develop", "mobile & desktop"]
    },
]

function generateUrlboxThumbnail(originalUrl) {
    const baseUrl = "https://api.urlbox.com/v1/SIDlYRZd5lErceb0/png"
    const width = 1600
    const height = 900
    const encodedUrl = encodeURIComponent(originalUrl)

    return `${baseUrl}?width=${width}&height=${height}&url=${encodedUrl}`
}


function loadingData() {
    const main = document.querySelector("main")
    
    contents.forEach(content => {
        const thumbnailUrl = generateUrlboxThumbnail(content.link)

        const div = document.createElement("div")
        div.classList.add("content")

        const categoryListItems = content["freeview-categorys"]
            .map(category => `<li class="${category.toLocaleLowerCase()}">${category}</li>`)
            .join("")

        const hashtagListItems = content.hashtags
            .map(tag => `<li class="hashtag">${tag}</li>`)
            .join("")

        div.innerHTML = `
            <a href="detail.html?id=${content.id}">
                <div class="freeview" style="background-image: url('${thumbnailUrl}') !important">
                </div>
                <div class="text-group">
                    <div class="content-title">
                        <a href="detail.html?id=${content.id}">${content.title}</a>
                        <a href="${content.link}" class="link" target="_blank">🔗</a>
                    </div>
                    <div class="content-sub-title">${content["sub-title"]}</div>
                    <ul class="freeview-category">
                        ${categoryListItems}
                        ${hashtagListItems}
                    </ul>
                </div>
            </a>
        `

        main.append(div)
    })
}

loadingData()