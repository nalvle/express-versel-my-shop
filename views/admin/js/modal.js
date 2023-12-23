const modal = {
    open(el){
        document.getElementsByClassName(el)[0].style.display = "block";
    },
    close(el){
        document.getElementsByClassName(el)[0].style.display = "none";
    }
}
