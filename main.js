// alert("hello");

const digtype = document.getElementById("digtype");

window.addEventListener("resize", () => {
    if(window.innerWidth<1035){
        digtype.classList.remove("col-4");
        digtype.classList.add("form-control");
    }
    else{
        digtype.classList.add("col-4");
        digtype.classList.remove("form-control");
    }
});
