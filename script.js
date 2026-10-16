var btn = document.getElementById("send-btn");

btn.addEventListener("click", function () {
    var status = document.getElementById("status");
    status.innerHTML = "Loading...";

    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            document.getElementById("userId").innerHTML = data.userId;
            document.getElementById("postId").innerHTML = data.id;
            document.getElementById("title").innerHTML = data.title;
            document.getElementById("body").innerHTML = data.body;

            status.innerHTML = "Got the response!";
            document.getElementById("post-box").classList.remove("hidden");
        })
        .catch(function (error) {
            console.log(error);
            status.innerHTML = "Something went wrong, try again";
        });
});
