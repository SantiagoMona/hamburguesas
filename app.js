
function cambiarTema() {
    let tema = document.getElementById("tema");
    let body = document.getElementById("body")
    console.log(body);
    if (tema.value == "oscuro") {
        body.classList.toggle("theme-oscuro")
        body.classList.remove("theme-claro","theme-free")

    }else if (tema.value == "claro") {
        body.classList.toggle("theme-claro")
        body.classList.remove("theme-oscuro","theme-free")


    }else if (tema.value == "libre") {
        body.classList.toggle("theme-free")
        body.classList.remove("theme-claro","theme-oscuro")

    }
    console.log(body);
}