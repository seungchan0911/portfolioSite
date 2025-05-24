const data = [
    {
        id: "life sharp", 
        description: `
            life sharp는 고등학교 1학년 때 과제로 만든 홈페이지 입니다.<br><br>
            처음으로 만드는 웹페이지였습니다.<br><br>
            헤더부터 푸터까지 신경쓰며 디자인 했습니다.<br><br>
            figma를 알기 전이라, 프로토타입을 제작하지 않고 코드부터 짰던 기억이 있습니다.<br><br>
            높은 점수를 받기 위해서 반응형에 대해 공부해서, 모바일전 웹페이지도 제작했습니다.
        `
    },
]

function getIdByParams() {
    const params = new URLSearchParams(window.location.search)
    const idValue = params.get('id')
    return idValue
}

function getDescriptionById(id) {
    const item = data.find(obj => obj.id === id)
    return item ? item.description : "planning to write..."
}

const headerLogo = document.querySelector("header h2")
const mobileHeaderLogo = document.querySelector(".mobile-menu-top h2")
headerLogo.textContent = getIdByParams()
mobileHeaderLogo.textContent = getIdByParams()

function pushData() {
    const description = document.querySelector(".description")
    
    description.innerHTML = getDescriptionById(getIdByParams())
}

pushData()