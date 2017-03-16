/* global CONTENT */

/**
 * Requete ajax de type get
 */
function getBooks() {
    $(CONTENT).empty();
    $.ajax({
        url: URL + "consulting/books",
        async: true,
        type: 'GET',
        dataType: 'json',
        success: function (books) {
            createTableBooks(books);
        },
        error: function () {
            alert("probleme");
        }
    });
}

function getCopiesFromBook(id) {
    $(CONTENT).empty();
    $.ajax({
        url: URL + "consulting/books/" + id + "/copies",
        async: true,
        type: 'GET',
        dataType: 'json',
        success: function (copies) {
            $(CONTENT).empty();
            createTableCopies(copies);
        },
        error: function () {
            alert("probleme");
        }
    });
}

function getStates() {
    $.ajax({
        url: URL + "consulting/state",
        async: false,
        type: 'GET',
        dataType: 'json',
        success: function (states) {
            listOfStates = states;
        },
        error: function () {
            alert("probleme");
        }
    });
}
function updateStatesOfCopy(id, value) {
    $.ajax({
        url: URL + "administration/copies/"+id+"/state",
        async: true,
        type: 'PUT',
        dataType: 'json',
        data:{"stateId" : value} ,
        success: function (copy) {
            alert(copy);
        },
        error: function () {
            alert("probleme");
        }
    });
}