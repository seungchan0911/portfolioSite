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