$(document).ready(function () {
 
    getHeaderLine();
    getNavBar();
});

function getHeaderLine() {
    var entete = $("#list").append("<tr class='col-xs-12'></tr>");
    $("tr").append("<th class='col-xs-1'>id</th>");
    $("tr").append("<th class='col-xs-3'>etat</th>");
    $("tr").append("<th class='col-xs-4'>status</th>");
    $("tr").append("<th class='col-xs-4'>prix</th>");
    return entete;
}
function getNavBar() {
    var nav = $("nav").append("<ul></ul>");
    $("ul").append("<li><a>Consulter livre</a></li>");
    $("ul").append("<li><a>Ajout exemplaire</a></li>");
    $("ul").append("<li><a>Ajout livre</a></li>");
    $("ul").append("<li><a>Ajout auteur</a></li>");
    return nav;
}