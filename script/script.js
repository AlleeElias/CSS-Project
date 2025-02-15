let actieTekst = "Je hebt op de knop geklikt!";

let footerHTML = "<div>Copyright @Allee</div><div><a target='_blank' rel='noopener noreferrer' href='https://github.com/AlleeElias/CSS-Project'>Github</a></div>";

function doeIets(){
    document.getElementById("actiediv").innerText = actieTekst;
}

window.onload = function() { 
    document.getElementById("footerdiv").innerHTML = footerHTML;
}