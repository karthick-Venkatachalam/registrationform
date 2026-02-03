function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    if (name == "") {
        alert("Please enter your Name");
        return false;
    }
    if (email == "") {
        alert("Please enter your Email");
        return false;
    }
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Invalid Email Format");
        return false;
    }
    if (mobile == "") {
        alert("Incorrect Mobile Number");
        return false;
    }
    var mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobile)) {
        alert("Mobile number contain only  10 digits");
        return false;
    }
    alert("Form Submitted Successfully!");
    return true;
}
