//check null
function myFunction() {
    let x = document.getElementById("id1").value;
    let y = document.getElementById("frm").value;
    if (x == null || x == "") {
        alert("input not null");
        document.getElementById("id1").focus();
    } else {
        alert(y);
    }
}
//check null to focus
function upperCase() {
    let x = document.getElementById("id1");
    if (x.value == "") {
        alert("please input!");
        document.getElementById("id1").focus();
        
    }
    x.value = x.value.toUpperCase();
}
//only reset from form
function reset() {
    document.getElementById("frm").reset();
}
