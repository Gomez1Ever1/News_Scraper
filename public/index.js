$(document).on("click", "#scrapeBtn", function () {
    //scrapes then renders with handlebars
    $.ajax({
        method: "GET",
        url: "/scrape"
    })
        .then(function (respnse) {
            $.ajax({
                method: "GET",
                url: "/"
            }).then(function (data) {
                res.json(data);
            })
            location.reload();
        });
});
$(document).on("click", "#deletThis", function () {
    $.ajax({
        url: "/deleteArticles",
        type: "DELETE",
        success: function (response) {
            location.reload();
        }
    })
});

$(document).on("click", "#viewSaved", function () {
    $.ajax({
        method: "GET",
        url: "/viewSaved"
    })
        .then(function (data) {
            res.json(data);
        })
});
$(document).on("click", "#saveBtn", function () {
    // Save the id from the button so we can transfer it from one db to the other
    var thisId = $(this).attr("data-id");
    const savedArticle = { thisId };
    $.ajax({
        method: "POST",
        url: "/article/" + thisId,
        data: savedArticle
    })
        // With that done, add the note information to the page
        .then(function (data) {
            res.json(data)
            console.log(data);
        });
});  