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
$("#search").on("click", function() {
    topic.push($("#termField").val());
    listTopics(topic);
    $("#termField").val("")
})

// function that, once the user clicks a topic, asks the user to pick a type of information for that topic (gifs, omdb, or books), then calls on the appropriate function
$(".ind-topic").on("click", function(event) {
    var topicSelected = true;
    console.log(event);
})