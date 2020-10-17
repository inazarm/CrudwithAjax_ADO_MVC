$(document).ready(function () {
    LoadData();
})

function LoadData() {
    $.ajax({
        url: "Home/empList",
        type: "GET",
        ContentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            var row = "";
            $.each(result, function (key, item) {
                row += "<tr>";
                row += "<td>" + item.EmployeeID + "</td>";
                row += "<td>" + item.Name + "</td>";
                row += "<td>" + item.Age + "</td>";
                row += "<td>" + item.State + "</td>";
                row += "<td>" + item.Country + "</td>";
                row += '<td><a href="#" onclick="return getbyID(' + item.EmployeeID + ')">Edit</a> | <a href="#" onclick="Delele(' + item.EmployeeID + ')">Delete</a></td>';
                row += "<tr>"
            });

            $(".tbody").html(row);
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }

    });
}

function AddRecord() {
    var response = validate();
    if (response == true) {

    }

}
function ClearData() {

    $('#EmployeeID').val("");
    $('#Name').val("");
    $('#Age').val("");
    $('#State').val("");
    $('#Country').val("");
    $('#btnUpdate').hide();
    $('#btnAdd').show();
    $('#Name').css('border-color', 'lightgrey');
    $('#Age').css('border-color', 'lightgrey');
    $('#State').css('border-color', 'lightgrey');
    $('#Country').css('border-color', 'lightgrey');  
}
function validate() {
    var isValid = true;
    if ($('#Name').val().trim() == "") {
        $('#Name').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Name').css('border-color', 'lightgrey');
    }
    if ($('#Age').val().trim() == "") {
        $('#Age').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Age').css('border-color', 'lightgrey');
    }
    if ($('#State').val().trim() == "") {
        $('#State').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#State').css('border-color', 'lightgrey');
    }
    if ($('#Country').val().trim() == "") {
        $('#Country').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Country').css('border-color', 'lightgrey');
    }
    return isValid;
}  