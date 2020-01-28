/* 305/pizza/pizza.js */

document.getElementById("pizzaform").onsubmit = validate;
function validate()
{
    var isValid = true;

    //Clear all error messages
    var errors = document.getElementsByClassName("err");
    for (var i=0; i<errors.length; i++)
    {
        errors[i].style.visibility = "hidden";
    }

    //alert("Checking");

    //Check first name
    var first = document.getElementById("fname").value;
    if(first == "")
    {
        var errFirst = document.getElementById("err-fname");
        errFirst.style.visibility = "visible";
        isValid = false;
    }

    //Check last name


    //Check size
    var size = document.getElementById("size").value;
    if (size == "none")
    {
        var errSize = document.getElementById("err-size");
        errSize.style.visibility = "visible";
        isValid = false;
    }

    //Check pickup or delivery
    var method = document.getElementsByName("method");
    var methodValue = "";
    for (var i = 0; i < method.length; i++) {
        if (method[i].checked) {
            methodValue = method[i].value;
        }
    }
    if (methodValue == "")
    {
        var errMethod = document.getElementById("err-method");
        errMethod.style.visibility = "visible";
        isValid = false;
    }

    //Check address if delivery method is selected
    //alert(methodValue);
    if (methodValue == "delivery")
    {
        var address = document.getElementById("address").value;
        if(address == "")
        {
            var errAddress = document.getElementById("err-address");
            errAddress.style.visibility = "visible";
            isValid = false;
        }
    }

    return isValid;
}