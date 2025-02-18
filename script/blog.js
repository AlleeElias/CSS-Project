let parsedData="";
let blogHTML = "";
let actieveBlog="";

function vulBlogs() {
    fetch('../_backend/data/data.txt')
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
             + "<section class='voorbeeldKaart' id='kaart" + element.id + "' onclick='toonKaart(" + element.id + ")'>"
             + "<h2 class='kaartTitel'>" + element.titel + "</h2>"
             + "<image class='voorbeeldFoto' src='" + element.foto + "'</image>"
             + "<p id='omschrijving" + element.id + "'>" + element.omschrijving + "</p>"
             + "</section>";
}

function toonKaart(zoekId) {
    document.getElementById("kaartbody").style.display = "grid";
    actieveBlog = parsedData.find(({id}) => id === zoekId);
    //console.log(actieveBlog);

    document.getElementById("kaartbody").innerHTML = "<section class='getoondeKaart'><h2>" + actieveBlog.titel + "</h2>"
                                                   + "<button class='kaartKnop' onclick='verbergKaart()'>X</button>"
                                                   + "<p>" + actieveBlog.inhoud + "</p>"
                                                   + "</section>"
}

function verbergKaart() {
    document.getElementById("kaartbody").style.display = "none";
}