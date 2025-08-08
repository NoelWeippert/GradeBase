function loadBasicHeadHTML() {
  document.getElementById("basicHead").innerHTML = `
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7" crossorigin="anonymous">
            <link rel="icon" type="image/png" href="../Bilder/Logo.png">
            <title>GradeBase</title>
    `;
  loadBasicBodyHTML();
}

function loadBasicBodyHTML() {
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
                <img src="../Bilder/Logo.png" class="imageLogo">
                <span class="headline">GradeBase</span>
                <div class="profilDiv">
                    <img src="../Bilder/userIcon.png" style="width: 6em;">
                    <div class="profilInformationDiv">
                        <span>Name: <span>Noel Weippert</span></span>
                        <span>Klasse: <span>10FI4</span></span>
                    </div>
                </div>
            </div>
            <hr style="margin-left: 3em; margin-right: 3em;">
            <div id="mainDiv"></div>
    `;
}
