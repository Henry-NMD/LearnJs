//check null
function myFunction() {
    let x = document.getElementById("id1").value;
    if (x == null || x == "") {
        alert("input not null");
        document.getElementById("id1").focus();
    } else {
        document.getElementById("demo").innerHTML = x;
        //document.getElementById("id2").value  = x; //set value from input
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
var x = 0;
var array = [];
function list() {
    var e = "<hr/>";   
    let i  = document.getElementById("id1").value;
    let i2 = document.getElementById("id2").value;
    array.push(i);
    array.push(i2);
    //array[x] = i;
    x++;
   document.getElementById("id1").value = "";
   for (let y = 0 ; y < array.length ;y++) {
       e += array[y] + " ";      
       document.getElementById("demo").innerHTML = e;

   }

}
