var modal = document.getElementById('id01');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("demo").innerHTML =
        '<button type="button" onclick="loadDoc()">Refresh Users</button><br><br>' +
        this.responseText;
    }
    xhttp.open("GET", "php/admin.php");
    xhttp.send();
}