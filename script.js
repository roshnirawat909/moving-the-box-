let ele = document.querySelectorAll(".element");

ele.forEach((val) => {
    val.addEventListener("mousemove", (e) => {
        val.childNodes[3].style.left = e.x + "px";
    })

    val.addEventListener("mouseenter", (e) => {
        val.childNodes[3].style.opacity = 1;
    })

    val.addEventListener("mouseleave", (e) => {
        val.childNodes[3].style.opacity = 0;
    })

})
