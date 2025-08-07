function connect() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    console.log(this.responseText);
  };
  const url = `../Standard/connect2DB.php`;
  xhttp.open("GET", url);
  xhttp.send();
}
