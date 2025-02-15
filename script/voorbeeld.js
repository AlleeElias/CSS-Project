let actieTekst = "Je hebt op de knop geklikt!"

let footerHTML = "<div>Copyright @Allee</div><div><a href='https://github.com/AlleeElias/'>Github</a></div>"

function doeIets(){
    document.getElementById("actiediv").innerText = actieTekst;
}

window.onload = function() { 
    document.getElementById("footerdiv").innerHTML = footerHTML
}