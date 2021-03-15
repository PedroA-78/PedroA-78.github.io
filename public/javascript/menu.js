let no_js = document.querySelector(".no_js")
no_js.classList.remove("no_js")
no_js.classList.add("js_on")


let showMenu = document.querySelector(".btn_menu")
showMenu.addEventListener("click", function(){
    let navigation = document.querySelector("header nav")
    navigation.classList.toggle("open_menu")
})