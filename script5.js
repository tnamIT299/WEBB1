// coding implementation
function validate() {
    let x = document.forms["search"]["email"].value;
    let y = document.forms["search"]["com"].value;
    let z = document.forms["search"]["rate"].value;
    let l = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (x == "" || l.test(x) == false) {
        alert("Please write correct input!");
        return false;
    }
    if (y == "" || y.length < 30) {
        alert("You must be fill comment and length more than 29");
        return false;
    }
    if (z == "" || isNaN(z)) {
        alert("You must be fill field rat and is a number ");
        return false;
    }
}
// end coding implementation