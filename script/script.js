let parsedData;

let actieTekst = "You pressed the button!";

let footerHTML = "<div>Copyright @Allee</div>" +
                 "<div><a class='gitknop' target='_blank' rel='noopener noreferrer' href='https://github.com/AlleeElias/CSS-Project'>Github</a></div>";

let headerHTML = "<div class='headertitle'>Home</div>" + 
                 "<div class='headerlist'>" +
                 "<a href='../html/home.html'>Home</a>" +
                 "<a href='../html/blog.html'>Blog</a>" +
                 "<a href='../html/info.html'>Info</a>" +
                 "</div>";

let blogHTML = "";

function doeIets(){
    document.getElementById("actiediv").innerText = actieTekst;
}

window.onload = function() { 
    document.getElementById("footerdiv").innerHTML = footerHTML;
    document.getElementById("pageheader").innerHTML = headerHTML;

    if (document.getElementById("blogcontainer") != null){
        vulBlogs();
    }
}

function vulBlogs() {
    fetch('../data/data.txt')
    .then(res => res.text())
    .then(res => parseJSON(res));
}

function parseJSON(data) {
    console.log("Data parsed to JSON");
    parsedData = JSON.parse(data);
    //console.log(parsedData);
    stringDataToHTML(parsedData);
}

function stringDataToHTML(data) {
    //console.log("Loading blogs...");
    data.sort();
    data.reverse();
    data.forEach(element => {
        voegKaartToe(element);
    });

    document.getElementById("blogcontainer").innerHTML = blogHTML;
}

function voegKaartToe(element) {
    //console.log(element.titel);
    blogHTML = blogHTML 
             + "<section id='kaart" + element.id + "' onmouseenter='toonKaartHover(" + element.id + ")'"
             + " onmouseleave='verbergKaartHover(" + element.id + ")' onclick='toonKaart(" + element.id + ")'>"
             + "<h2>" + element.titel + "</h2>"
             + "<p id='omschrijving" + element.id + "' class='kaartinhoud'>" + element.omschrijving + "</p>"
             + "<p id='inhoud" + element.id + "' class='kaartinhoud'>" + element.inhoud + "</p>"
             + "</section>";
}

function toonKaartHover(id) {
    console.log("Kaart getoond");
    document.getElementById("omschrijving" + id).style.display="block";
}

function verbergKaartHover(id) {
    console.log("Kaart verborgen");
    document.getElementById("omschrijving" + id).style.display= "none";
}

function toonKaart(id) {
    document.getElementById("kaartbody").style.display = "grid";
    document.getElementById("kaartbody").innerHTML = "<div class='getoondeKaart'><h2>"+parsedData[id].titel+"</h2>"
                                                   + "<button class='kaartKnop' onclick='verbergKaart()'>X</button>"
                                                   + "<p>"+parsedData[id].inhoud+"</p>"
                                                   + "</div>"
}

function verbergKaart() {
    document.getElementById("kaartbody").style.display = "none";
}