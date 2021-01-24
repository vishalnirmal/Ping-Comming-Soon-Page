document.querySelector(".notify-button").addEventListener("click", () => {
    var email = document.querySelector(".email").value;
    var pattern = /\w+@\w+\.\w+/g;
    var reg = new RegExp(pattern);
    if (!reg.test(email)){
        document.querySelector(".email").classList.add("wrong-email");
        document.querySelector(".error").classList.add("show-error");
    }
    else{
        document.querySelector(".email").classList.remove("wrong-email");
        document.querySelector(".error").classList.remove("show-error");
    }
});