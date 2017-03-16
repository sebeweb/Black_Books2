/**
 * rendu des données
 */
var table = null;
/*BOOKS*/
function createTableBooks(books) {
    table = document.createElement("table");
    $(CONTENT).append(table);
    $(table).append(getHeaderLineForTableBook());
    getContentForTableBook(books);
    $(table).addClass("col-xs-10 books");
}

function getContentForTableBook(books) {

    $.each(books, function () {
        $(table).append(getLineForTableBook(this));
    });
}

function getLineForTableBook(book) {
    var line = document.createElement("tr");
    var cellId = document.createElement("td");
    var cellTitle = document.createElement("td");
    var cellAuthor = document.createElement("td");

    $(cellId).append(book.id);
    $(cellTitle).append(book.title);
    $(cellAuthor).append(book.author.name);

    $(line).append($(cellId).addClass("col-xs-1"));
    $(line).append($(cellTitle).addClass("col-xs-8"));
    $(line).append($(cellAuthor).addClass("col-xs-3"));
    $(line).click(function () {
        $(CONTENT).empty();
        getCopiesFromBook(book.id);
    });

    return line;
}

function getHeaderLineForTableBook() {
//    creation des balises
    var line = document.createElement("tr");
    var idBook = document.createElement("th");
    var titleBook = document.createElement("th");
    var authorName = document.createElement("th");

//    affectation des textes
    $(idBook).text("id");
    $(titleBook).text("titre");
    $(authorName).text("auteur");

//    insertion des th dans la ligne
    $(line).append(idBook);
    $(line).append(titleBook);
    $(line).append(authorName);

    return line;
}

/*COPIES*/

function createTableCopies(copies) {
    if (listOfStates === null) {
        getStates();
    }
    tables = document.createElement("table");
    $(CONTENT).empty();
    $(CONTENT).append(table);
    $(table).append(getHeaderLineForTableCopies());
    getContentForTableCopies(copies);
    $(table).addClass("col-xs-10");
}
function  getContentForTableCopies(copies) {
    $.each(copies, function () {
        $(table).append(getLineForTableCopy(this));
    });
}

function getSelec(list, selectedId) {
    var select = document.createElement("select");
    $.each(list, function () {
        var opt = document.createElement("option");
        $(opt).val(this.id).text(this.state);
        if (selectedId !== null) {
            if (this.id === selectedId) {
                $(opt).attr("selected", "selected");
            }
        }
        $(select).append(opt);
    });

    return select;
}

function getLineForTableCopy(copy) {
    var line = document.createElement("tr");
    var cellId = document.createElement("td");
    var cellState = document.createElement("td");
    var cellStatus = document.createElement("td");
    var cellPrice = document.createElement("td");
    var cellCtrl = document.createElement("td");

    $(cellId).text(copy.id);
    $(line).append(cellId);

    var selectState = getSelec(listOfStates, copy.state.id);
    $(selectState).change(function () {
        updateStatesOfCopy(copy.id, $(this).val());
    });
    $(cellState).append(selectState);
    $(line).append(cellState);

    $(cellStatus).text(copy.status.status);
    $(line).append(cellStatus);

    $(cellPrice).text(copy.price);
    $(line).append(cellPrice);

    $(cellCtrl).text("");
    $(line).append(cellCtrl);

    return line;
}


function getHeaderLineForTableCopies() {
    var line = document.createElement("tr");
    var cellId = document.createElement("th");
    var cellState = document.createElement("th");
    var cellStatus = document.createElement("th");
    var cellPrice = document.createElement("th");
    var cellCtrl = document.createElement("th");

    $(cellId).text("id").addClass(".col-xs-1");
    $(line).append(cellId);

    $(cellState).text("etat").addClass(".col-xs-3");
    $(line).append(cellState);

    $(cellStatus).text("status").addClass(".col-xs-3");
    $(line).append(cellStatus);

    $(cellPrice).text("prix").addClass(".col-xs-3");
    $(line).append(cellPrice);

    $(cellCtrl).text("").addClass(".col-xs-2");
    $(line).append(cellCtrl);

    return line;
}