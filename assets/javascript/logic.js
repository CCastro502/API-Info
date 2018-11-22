// Array of topics to be updated with user-input
var topic = ["rick and morty", "simpsons", "family guy", "big mouth", "spongebob", "rocket power", "futurama", "disenchanted"];
// Function to list & re-list (if user inputs string) topics to be clicked
function listTopics(topic) {
    $("#topic-holder").html("")
    for (i = 0; i < topic.length; i++) {
        $("#topic-holder").append($("<button>").addClass("btn btn-outline-primary ind-topic").attr("id", "item-" + i).text(topic[i]));
    }
}
// Lists original topics
listTopics(topic);
// Function to grab user input, push it into the topic array, then call on listTopics function w/ new topic array
$("#search").on("click", function () {
    topic.push($("#termField").val());
    listTopics(topic);
    $("#termField").val("")
})

// function that, once the user clicks a topic, asks the user to pick a type of information for that topic (gifs, omdb, or books), then calls on the appropriate function
$("body").on("click", "button.ind-topic", function (event) {
    var id1 = (event.currentTarget.attributes.id.value).split("-")[1];
    pickFormat(id1)
})

// function takes in the id from the topic button pushed, and waits until user picks a format to call the corresponding function which pulls api info
function pickFormat(id1) {
    alert("You must select a format. Please press the gif, movie, or book button");
    $(".btn-block").on("click", function (event) {
        var id2 = event.currentTarget.attributes.id.value
        if (id2 === "gifButton") {
            gifPull(id1);
        } else if (id2 === "movieButton") {
            moviePull(id1);
        } else if (id2 === "bookButton") {
            bookPull(id1);
        } else {
            $(".container").html("error");
        }
    })
}

// Displays gifs for the user-selected topic
function gifPull(id1) {
    console.log("gif run")
}

// Displays movie info for the user-selected topic
function moviePull(id1) {
    console.log("movie run")
}

// Displays book info for the selected topic
function bookPull(id1) {
    console.log("book run")
}