 function verify()
 {
let username=document.getElementById("username").value;
if(username=="")
{
    alert("please enter ur username");
}
let password=document.getElementById("password").value;
let confirm=document.getElementById("confirm").value;
if(password!=confirm)
{
    alert("the confirm  password must be the same of password ");
}
let mobile=document.getElementById("mobile").value;
if(mobile=="")
{
    alert("the mobile number cannot be empty")
}
let email=document.getElementById("email").value;
if(email=="")
{
    alert("the email cannot be empty");
}
 }