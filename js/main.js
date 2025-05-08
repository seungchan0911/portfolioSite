// 개발, 디자인을 따로 만든 데이터들, 팝업 개발 후 모두 병합예정.
const contents = [
    {
        "link": "https://life-sharp-high-school-assignment.vercel.app/",
        "freeview-img": "",
        "freeview-categorys": ["HTML", "CSS", "JS"],
        "title": "life sharp",
        "sub-title": "2024 October Project",
        "hashtags": ["original", "development", "design", "moblie & desktop"]
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
        "title": "kream remake",
        "sub-title": "2024 September Project",
        "hashtags": ["remake", "design", "moblie & desktop"]
    },
    {
        "link": "https://www.figma.com/design/xkM0jdRxf07BPLfo6Ou2Sc/%EC%9D%B8%EC%8A%A4%ED%83%80%EA%B7%B8%EB%9E%A8-%EB%94%94%EC%9E%90%EC%9D%B8?node-id=0-1&t=Usq84usm7qesswt8-1",
        "freeview-img": "",
        "freeview-categorys": ["Figma"],
        "title": "introduce items",
        "sub-title": "2024 December Project",
        "hashtags": ["gallery", "design", "moblie"]
    },
    {
        "link": "https://kream-remake-phone.vercel.app/",
        "freeview-img": "",
        "freeview-categorys": ["HTML", "CSS", "JS"],
        "title": "kream remake",
        "sub-title": "2025 January Project",
        "hashtags": ["remake", "development", "moblie"]
    },
    {
        "link": "https://geul-fun.vercel.app/",
        "freeview-img": "",
        "freeview-categorys": ["HTML", "CSS", "JS"],
        "title": "geulfun",
        "sub-title": "2025 April Project",
        "hashtags": ["original", "development", "design","desktop"]
    },
    {
        "link": "https://enforce-sword-game.vercel.app/",
        "freeview-img": "",
        "freeview-categorys": ["HTML", "CSS", "JS"],
        "title": "enforce sword game",
        "sub-title": "2025 May Project",
        "hashtags": ["game", "development", "design", "moblie & desktop"]
    },
    {
        "link": "https://www.figma.com/proto/IpQosbyH9h95uOpZxfMns1/Untitled?page-id=0%3A1&node-id=170-98&p=f&viewport=-189%2C50%2C0.82&t=yWTdOuWaynSJsrA4-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=170%3A98",
        "freeview-img": "",
        "freeview-categorys": ["Figma"],
        "title": "find lost items at our school",
        "sub-title": "2025 May Project",
        "hashtags": ["team project", "design", "moblie"]
    },
    {
        "link": "https://www.figma.com/design/iXpUuEMufOuONhvsF2AX7k/Portfolio-site-design?node-id=0-1&t=m3LnUAbntuCCvPTy-1",
        "freeview-img": "",
        "freeview-categorys": ["Figma"],
        "title": "seungchan kim portfolio site",
        "sub-title": "2025 May Project",
        "hashtags": ["original", "design", "moblie & desktop"]
    },
    {
        "link": "https://seungchan-kim-portfolio-site.vercel.app/index.html",
        "freeview-img": "",
        "freeview-categorys": ["HTML", "CSS", "JS"],
        "title": "seungchan kim portfolio site",
        "sub-title": "2025 May Project",
        "hashtags": ["original", "development", "moblie & desktop"]
    },
    {
        "link": "https://www.figma.com/proto/iuwlVsMMfenFheEWXhq890/cactus-curry-club-design-prototype?page-id=0%3A1&node-id=1-2&viewport=45%2C224%2C1.12&t=eaQDwzbiMXW6RYKh-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=62%3A529",
        "freeview-img": "",
        "freeview-categorys": ["Figma"],
        "title": "cactus curry club",
        "sub-title": "2025 May Project",
        "hashtags": ["real project", "design", "mobitle & desktop"]
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
            <a href="${content.link}" target="_blank">
                <div class="freeview" style="background-image: url(${content["freeview-img"]})">
                    <ul class="freeview-category">
                        ${categoryListItems}
                    </ul>
                </div>
            </a>
            <div class="text-group">
                <div class="content-title">
                    <a href="${content.link}" target="_blank">${content.title}</a>
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
