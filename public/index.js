$(document).on("click", "#scraper", function () {
    $.ajax({
        method: "GET",
        url: "/scrape"
    }).then(function (data) {
        res.json(data);
        console.log("Scrape Succesful")
    })
})
// Whenever someone clicks a p tag

$(document).on("click", "p", function () {
    // Save the id from the p tag
    var thisId = $(this).attr("data-id");

    // Now make an ajax call for the Article
    $.ajax({
        method: "POST",
        url: "/articles/" + thisId
    })
        // With that done, add the note information to the page
        .then(function (data) {
            res.json(data)
            console.log(data);
        });
});  