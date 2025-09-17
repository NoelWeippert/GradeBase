function getName() {
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 200) {
        try {
          let data = JSON.parse(this.responseText);
          if (data.name) {
            document.getElementById("name").innerHTML = data.name;
          }
          if (data.klasse) {
            document.getElementById("klasse").innerHTML = data.klasse;
          }
        } catch (e) {
          console.error("Antwort ist kein JSON:", this.responseText);
        }
      } else {
        window.location.href = "../LogReg/index.html";
      }
    }
  };
  xmlhttp.open("GET", "../../Benutzerverwaltung/getUserName.php");
  xmlhttp.send();
}

function loadBasicHeadHTML(nextPage) {
  document.getElementById("basicHead").innerHTML = `
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7" crossorigin="anonymous">
            <link rel="icon" type="image/png" href="http://gradebase.de/Bilder/Logo.png">
            <title>GradeBase</title>
    `;
  if (nextPage === 1) {
    loadBasicBodyHTML();
    getName();
  } else {
    loadBasicLogRegBodyHTML();
  }
}

function loadBasicBodyHTML() {
  document.getElementById("basicBody").innerHTML = ``;
  document.getElementById("basicBody").innerHTML = `
            <style>
                :root {
                    --mainGreen: #35b54a;
                    --secondPurple: #6A2E9D;
                    --UIGray: #F3F4F6;
                    --Text: #1F1F1F;
                }

                body {
                    background-color: var(--UIGray);
                    display: flex;
                    flex-direction: column;
                    color: var(--Text);
                    font-family: Arial, Helvetica, sans-serif;
                }

                .topBarDiv {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1.5em 3em;
                    position: relative;
                }

                .headline {
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    font-weight: bold;
                    font-size: 4em;
                    color: var(--mainGreen);
                }

                .imageLogo {
                    height: 5em;
                    width: auto;
                }

                .profilDiv {
                    display: flex;
                    flex-direction: row;
                    background-color: lightgrey;
                    border-radius: 1em;
                    padding: 1em;
                    font-weight: bold;
                }

                .profilInformationDiv {
                    display: flex;
                    flex-direction: column;
                    margin-left: 1em;
                    justify-content: center;
                }
            </style>

            <div class="topBarDiv">
                <img src="http://gradebase.de/Bilder/Logo.png" class="imageLogo">
                <span class="headline">GradeBase</span>
                <div class="profilDiv" onclick="window.location.href = '../Settings/index.html'">
                    <img src="http://gradebase.de/Bilder/userIcon.png" style="width: 6em;">
                    <div class="profilInformationDiv">
                        <span id="name">Name: <span>Noel Weippert</span></span>
                        <span id="klasse">Klasse: <span>10FI4</span></span>
                    </div>
                </div>
            </div>
            <hr style="margin-left: 3em; margin-right: 3em;">
            <div id="mainDiv"></div>
    `;
}

function loadBasicLogRegBodyHTML() {
  document.getElementById("basicBody").innerHTML = `
            <style>
                :root {
                    --mainGreen: #35b54a;
                    --secondPurple: #6A2E9D;
                    --UIGray: #F3F4F6;
                    --Text: #1F1F1F;
                }

                body {
                    background-color: var(--UIGray);
                    display: flex;
                    flex-direction: column;
                    color: var(--Text);
                    font-family: Arial, Helvetica, sans-serif;
                }

                .topBarDiv {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1.5em 3em;
                    position: relative;
                }

                .imageLogo {
                    height: 5em;
                    width: auto;
                }

                .headline {
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    font-weight: bold;
                    font-size: 4em;
                    color: var(--mainGreen);
                }
            </style>

            <div class="topBarDiv">
                <img src="http://gradebase.de/Bilder/Logo.png" class="imageLogo">
                <span class="headline">GradeBase</span>
            </div>
            <hr style="margin-left: 3em; margin-right: 3em;">
            <div id="mainDiv"></div>
    `;
}
