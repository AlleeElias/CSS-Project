let actieTekst = "You pressed the button!";

let footerHTML = "<div>Copyright @Allee</div>" +
                 "<div><a class='gitknop' target='_blank' rel='noopener noreferrer' href='https://github.com/AlleeElias/CSS-Project'>Github</a></div>";

let headerHTML = "<div class='headertitle'>Home</div>" + 
                 "<div class='headerlist'>" +
                 "<a href='../html/home.html'>Home</a>" +
                 "<a href='../html/blog.html'>Blog</a>" +
                 "<a href='../html/info.html'>Info</a>" +
                 "</div>";

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