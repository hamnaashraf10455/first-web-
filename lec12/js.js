$(function () {
    loadUsers();
    $("#users").on("click", ".btn-danger", handleDelete);
    $("#users").on("click", ".btn-warning", handleUpdate);
    $("#addbtn").click(addUsers);
    $(".close").click(function () {
        $("#updateModel").modal("hide");
    });

    $("#updateSave").click(function () {
        var id = $("#updateId").val();
        var title = $("#updateUname").val();
        var body=$("#updateEmail").val();
        $.ajax({
            url: "https://usman-fake-api.herokuapp.com/api/recipes/" + id,
            method: "PUT",
            data:{title, body},
            success: function (response) {
                console.log(response);
                loadUsers();
                $("#updateModel").modal("hide");
            }
            })
    });
})
function handleUpdate() {

    console.log("yeee");
    var btn = $(this);
    var parentDiv = btn.closest(".user");
    let id = parentDiv.attr("data-id");

    $.get("https://usman-fake-api.herokuapp.com/api/recipes/" + id, function (response) {
        $("#updateId").val(response._id);
        $("#updateUname").val(response.title);
        $("#updateEmail").val(response.body);
        $("#updateModel").modal("show");
    });
}

function handleDelete() {
    var btn = $(this);
    var parentDiv = btn.closest(".user");
    let id = parentDiv.attr("data-id");
    console.log(id);
    $.ajax({
        url: "https://usman-fake-api.herokuapp.com/api/recipes/" + id,
        method: "DELETE",
        success: function () {
            loadUsers();
        }
    });

}

function loadUsers() {
    $.ajax({
        url: "https://usman-fake-api.herokuapp.com/api/recipes",
        method: "GET",
        error: function () {
            var r = $("#users");
            r.html("error occured!")
        },
        success: function (response) {
            console.log(response);
            let users = $("#users");
            users.empty();
            for (let index = 0; index < response.length; index++) {
                element = response[index];
                users.append(`<div class="user" data-id="${element._id}">
                <h5>Title: ${element.title}</h5>
                 <p>Body: ${element.body}
                 <button id="del" class="btn btn-danger btn-sm">Delete</button>
                 <button id="edit" class="btn btn-warning btn-sm">Edit</button>
                 </p>
                 </div>`)
            }

        }
    })
}

function addUsers() {
    var title = $("#uname").val();
    var body = $("#email").val();

    $.ajax({
        url: "https://usman-fake-api.herokuapp.com/api/recipes",
        method: "POST",
        data: { title, body },
        success: function (response) {
            console.log(response);
            loadUsers();
        }
    });
}
