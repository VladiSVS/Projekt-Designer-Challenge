function sendForm() {
    document.getElementById("sendPage").style.display = "none"
    document.getElementById("backPage").style.display = "flex"
    console.log(document.getElementById("writeEmail").value)
}

function reload() {
    document.location.href = "#"
    // document.location.reload()
}