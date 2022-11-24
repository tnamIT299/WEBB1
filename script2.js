// coding implementation
function validate() {
    let x = document.forms["search"]["key"].value;
    let y = document.forms["search"]["cat"].value;
    let z = document.forms["search"]["from"].value;
    let t = document.forms["search"]["to"].value;
    if (x == "") {
        alert("You must be fill key");
        return false;
    }
    if (y == "") {
        alert("You must be fill cat");
        return false;
    }
    if (z == "" || isNaN(z)) {
        alert("You must be fill field from and is a number ");
        return false;
    }
    if (t == "" || isNaN(t)) {
        alert("You must be fill field to and is a number ");
        return false;
    }
    return true;
}
// end coding implementation