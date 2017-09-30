$(document).ready(function () {
    $('#fullpage').fullpage();
});
console.log('hi');

function setUserType(data) {
    if (data == "mentee") {
        var userType = document.getElementById("userType");
        userType.innerHTML = "mentee";
    } else if (data == "mentor") {
        var userType = document.getElementById("userType");
        userType.innerHTML = "mentor";
    }



}
