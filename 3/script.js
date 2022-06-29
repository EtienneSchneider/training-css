var elements = document.getElementsByClassName("nav_elt")
var title = document.getElementById("title")

for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click",function () {
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.remove("nav_elt_activate")
            
        }
        this.classList.add("nav_elt_activate")
        title.innerHTML = this.childNodes[1].innerHTML;
        console.log(this.childNodes[1].innerHTML);
    });
    
}
