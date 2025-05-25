const data = [
    {
      id: "life sharp",
      description: "",
      subTitle: "2024 October Project",
      link: "https://life-sharp-high-school-assignment.vercel.app/"
    },
    {
      id: "airpods introduce remake prototype",
      description: "",
      subTitle: "2024 September Project",
      link: "https://www.figma.com/proto/HcseLEn4BIf8xOkBVxBTeJ/Airpods?page-id=&node-id=2-79&viewport=776%2C368%2C0.24&t=dLd32EsSN1DZmX9x-1&scaling=contain&content-scaling=fixed&starting-point-node-id=1%3A2"
    },
    {
      id: "kream remake prototype",
      description: "",
      subTitle: "2024 September Project",
      link: "https://www.figma.com/design/ScoxT2wWOwiOZQIGnWl1Vg/KREAM?node-id=0-1&t=76dSHa5mUh2ycTir-1"
    },
    {
      id: "introduce items prototype",
      description: "",
      subTitle: "2024 December Project",
      link: "https://www.figma.com/design/xkM0jdRxf07BPLfo6Ou2Sc/%EC%9D%B8%EC%8A%A4%ED%83%80%EA%B7%B8%EB%9E%A8-%EB%94%94%EC%9E%90%EC%9D%B8?node-id=0-1&t=Usq84usm7qesswt8-1"
    },
    {
      id: "kream remake",
      description: "",
      subTitle: "2025 January Project",
      link: "https://kream-remake-phone.vercel.app/"
    },
    {
      id: "geulfun",
      description: "",
      subTitle: "2025 April Project",
      link: "https://geul-fun.vercel.app/"
    },
    {
      id: "enforce sword game",
      description: "",
      subTitle: "2025 May Project",
      link: "https://enforce-sword-game.vercel.app/"
    },
    {
      id: "find lost items at our school",
      description: "",
      subTitle: "2025 May Project",
      link: "https://www.figma.com/proto/IpQosbyH9h95uOpZxfMns1/Untitled?page-id=0%3A1&node-id=170-98&p=f&viewport=-189%2C50%2C0.82&t=yWTdOuWaynSJsrA4-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=170%3A98"
    },
    {
      id: "find lost items at our school",
      description: "",
      subTitle: "2025 May Project",
      link: "https://asan-project.vercel.app"
    },
    {
      id: "seungchan kim portfolio site prototype",
      description: "",
      subTitle: "2025 May Project",
      link: "https://www.figma.com/design/iXpUuEMufOuONhvsF2AX7k/Portfolio-site-design?node-id=0-1&t=m3LnUAbntuCCvPTy-1"
    },
    {
      id: "seungchan kim portfolio site",
      description: "",
      subTitle: "2025 May Project",
      link: "https://seungchan-kim-portfolio-site.vercel.app/index.html"
    },
    {
      id: "cactus curry club prototype",
      description: "",
      subTitle: "2025 May Project",
      link: "https://www.figma.com/proto/iuwlVsMMfenFheEWXhq890/cactus-curry-club-design-prototype?page-id=0%3A1&node-id=1-2&viewport=45%2C224%2C1.12&t=eaQDwzbiMXW6RYKh-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=62%3A529"
    },
    {
      id: "cactus curry club",
      description: "",
      subTitle: "2025 May Project",
      link: "https://cactus-curry-club.vercel.app"
    }
]

function generateUrlboxThumbnail(originalUrl) {
    const baseUrl = "https://api.urlbox.com/v1/SIDlYRZd5lErceb0/png"
    const width = 1600
    const height = 900
    const encodedUrl = encodeURIComponent(originalUrl)

    return `${baseUrl}?width=${width}&height=${height}&url=${encodedUrl}`
}

function getIdByParams() {
    const params = new URLSearchParams(window.location.search)
    const idValue = params.get('id')
    return idValue
}

function getDescriptionById(id) {
    const item = data.find(obj => obj.id === id)
    return item ? item.description : "planning to write..."
}

function pushData() {
    const mobileHeaderLogo = document.querySelector(".mobile-menu-top h2")
    const description = document.querySelector(".description")
    const freeview = document.querySelector(".freeview")
    const freeviewTitle = document.querySelector(".freeview-title")
    const freeviewDate = document.querySelector(".freeview-date")

    const id = getIdByParams()
    const content = data.find(item => item.id === id)

    mobileHeaderLogo.textContent = id
    description.innerHTML = content.description || "planning to write..."
    const thumbnailUrl = generateUrlboxThumbnail(content.link)
    freeview.style.backgroundImage = `url('${thumbnailUrl}')`
    freeviewTitle.textContent = content.id
    freeviewDate.textContent = content.subTitle
    freeview.onclick = () => {
        window.open(content.link)
    }
}


pushData()
