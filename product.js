// selecting sidenavbar, menubar

var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click", function () {
    sidenav.style.right = 0
})

closenav.addEventListener("click", function () {
    sidenav.style.right = "-50%"

})

// searchbox

var search = document.getElementById("search")
var productcontainer = document.getElementById("productcontainer")
var h1list = productcontainer.querySelectorAll("div")

search.addEventListener("keyup", function () {
    var enteredvalue = event.target.value.toUpperCase()

    for (count = 0; count < h1list.length; count = count + 1) {
        var productname = h1list[count].querySelector("h1").textContent
        if (productname.toUpperCase().indexOf(enteredvalue) < 0) {
            h1list[count].style.display = "none"
        }
        else {
            h1list[count].style.display = "block"
        }
    }
})

