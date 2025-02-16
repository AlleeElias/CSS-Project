let parsedData;
let blogHTML = "";
let actieveBlog;

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
    //console.log(element.id);
    blogHTML = blogHTML 
             + "<section id='kaart" + element.id + "' onmouseenter='toonKaartHover(" + element.id + ")'"
             + " onmouseleave='verbergKaartHover(" + element.id + ")' onclick='toonKaart(" + element.id + ")'>"
             + "<h2>" + element.titel + "</h2>"
             + "<p id='omschrijving" + element.id + "' class='kaartinhoud'>" + element.omschrijving + "</p>"
             + "<p id='inhoud" + element.id + "' class='kaartinhoud'>" + element.inhoud + "</p>"
             + "</section>";
}

function toonKaartHover(id) {
    //console.log("Kaart getoond");
    document.getElementById("omschrijving" + id).style.display="block";
}

function verbergKaartHover(id) {
    //console.log("Kaart verborgen");
    document.getElementById("omschrijving" + id).style.display= "none";
}

function toonKaart(zoekId) {
    document.getElementById("kaartbody").style.display = "grid";
    actieveBlog = parsedData.find(({id}) => id === zoekId);
    //console.log(actieveBlog);

    document.getElementById("kaartbody").innerHTML = "<div class='getoondeKaart'><h2>" + actieveBlog.titel + "</h2>"
                                                   + "<button class='kaartKnop' onclick='verbergKaart()'>X</button>"
                                                   + "<p>" + actieveBlog.inhoud + "</p>"
                                                   + "</div>"
}

function verbergKaart() {
    document.getElementById("kaartbody").style.display = "none";
}