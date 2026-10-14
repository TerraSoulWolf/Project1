var responses = ["Woof", "Arf", "Grrrr", "Yipe"];
var form = document.getElementById("commentForm");

form.addEventListener("submit", function(event) {
    // Don't reload page
    event.preventDefault();

    // Get the data from form
    var formData = new FormData(form);
    var name = formData.get("name");
    var comment = formData.get("comment");

    // Write the comment and response
    document.getElementById("result").textContent = name + " says " + comment;
    document.getElementById("dog").textContent = "Canela says " + responses[Math.floor(Math.random() * responses.length)] + "!";
});