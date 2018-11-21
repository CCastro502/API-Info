// Array of topics to be updated with user-input
var arr = ["rick and morty", "simpsons", "family guy", "big mouth", "spongebob", "rocket power"];
// Function to list & re-list (if user inputs string) topics to be clicked
function listTopics(arr) {
    $("#topic-holder").html("")
    for (i = 0; i < arr.length; i++) {
        $("#topic-holder").append($("<button>").attr("id", "item-" + i).text(arr[i]));
    }
}

listTopics(arr);