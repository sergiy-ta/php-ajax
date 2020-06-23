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
        url: 'ajax/main.php',
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