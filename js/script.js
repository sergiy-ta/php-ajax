var ajax = new XMLHttpRequest();
var method = "GET";
var url = "ajax/getUserFromUsers.php";
var asynchronus = true;

ajax.open(method, url, asynchronus);
ajax.send();

ajax.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        for(var a = 0; a < data.length; a++) {
            var first_name = data[a].first_name;
            var last_name = data[a].last_name;
            var age = data[a].age;
            var tel = data[a].tel;

            var html = "";
            html += "<tr>";
                html += "<td>" + first_name + "</td>";
                html += "<td>" + last_name + "</td>";
                html += "<td>" + age + "</td>";
                html += "<td>" + tel + "</td>";
            html += "</tr>";
            document.getElementById("data").innerHTML += html;
        }
    }
};



$("#button").on("click", () => {
    let first_name = $("#first_name").val().trim();
    let last_name = $("#last_name").val().trim();
    let age = $("#age").val().trim();
    let tel = $("#tel").val().trim();

    if (first_name === "" || first_name === null) {
        alert("Enter your first name");
        return false;
    } else if (last_name === "" || last_name === null) {
        alert("Enter your last name");
        return false;
    } else if (age === "" || age === null || age === 0) {
        alert("Enter your age");
        return false;
    } else if (tel === "" || tel === null) {
        alert("Enter your number phone");
        return false;
    }

    $.ajax({
        url: 'ajax/setUserToUsers.php',
        type: "POST",
        cache: false,
        data: {
            first_name: first_name,
            last_name: last_name,
            age: age,
            tel: tel
        },
        dataType: 'html',
        beforeSend: () => {
            $("#button").prop("disable", true);
        },
        success: (data) => {
            if (data) {
                alert("Save success😁");
                $("#button").prop("disable", false);
            } else {
                alert("Not save success😔");
            }
        }
    })
});