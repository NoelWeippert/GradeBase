function loadLoginHTML() {
  document.getElementById("mainDiv").innerHTML = `

  <style>
    .regButton{
      border-color: #35b54a;
      color: #35b54a;
    }

    .regButton:hover{
      background-color: #35b54a;
      color: black;
      border-color: #35b54a;
    }
  </style>

  <div class="d-flex flex-column align-items-center">
    <!-- Login Card -->
    <div class="card shadow-lg" style="width: 100%; max-width: 380px; border-radius: 15px; margin-top:7rem;">
      <div class="card-body p-4">
        <h4 class="text-center mb-4">Anmelden</h4>

        <!-- Benutzername -->
        <div class="input-group mb-3">
          <span class="input-group-text"><img src="../../Bilder/user.png" style="height:1.5em;"></span>
          <input type="text" class="form-control" placeholder="Benutzername" id="Benutzername" aria-label="Benutzername">
        </div>

        <!-- Passwort -->
        <div class="input-group mb-3">
          <span class="input-group-text"><img src="../../Bilder/passwort.png" style="height:1.5em;"r></span>
          <input type="password" class="form-control" placeholder="Passwort" id="Passwort" aria-label="Passwort">
        </div>

        <!-- Anmelden Button -->
        <button class="btn w-100 mb-3" style="background-color: #35b54a;" onclick="login()">Anmelden</button>

        <!-- Passwort vergessen -->
        <div class="text-center mb-3">
          <a href="#" class="small text-decoration-none">Passwort vergessen?</a>
        </div>

        <hr>

        <!-- Registrieren -->
        <h6 class="text-center mb-3">Neuer Benutzer</h6>
        <button class="btn w-100 regButton" onclick=loadRegisterHTML()>Registrieren</button>
      </div>
    </div>
  </div>
  `;
}

function login() {
  let nutzername = document.getElementById("Benutzername").value;
  let passwort = document.getElementById("Passwort").value;

  if (!nutzername || !passwort) {
    alert("Bitte Nutzername und Passwort eingeben!");
    return;
  }

  let letter = {
    nutzername: nutzername,
    password: passwort,
  };

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 200) {
        // Server gibt Weiterleitungs-URL zurück
        console.log("Login erfolgreich:", this.responseText);
        window.location.href = this.responseText;
      } else {
        alert("Login fehlgeschlagen: " + this.responseText);
      }
    }
  };

  xhttp.open("POST", "../../Benutzerverwaltung/login.php");
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.send(JSON.stringify(letter));
}

function loadRegisterHTML() {
  document.getElementById("mainDiv").innerHTML = `

  <style>
    .regButton{
      border-color: #35b54a;
      color: #35b54a;
    }

    .regButton:hover{
      background-color: #35b54a;
      color: black;
      border-color: #35b54a;
    }
  </style>

  <div class="d-flex flex-column align-items-center">
    <!-- Login Card -->
    <div class="card shadow-lg" style="width: 100%; max-width: 380px; border-radius: 15px; margin-top:7rem;">
      <div class="card-body p-4">
        <h4 class="text-center mb-4">Anmelden</h4>

        <!-- Benutzername -->
        <div class="input-group mb-3">
          <span class="input-group-text"><img src="../../Bilder/user.png" style="height:1.5em;"></span>
          <input type="text" class="form-control" placeholder="Benutzername" id="nutzername" aria-label="Benutzername">
        </div>
        
        <!-- Vorname -->
        <div class="input-group mb-3">
          <span class="input-group-text"><img src="../../Bilder/User.png" style="height:1.5em;"r></span>
          <input type="text" class="form-control" placeholder="Vorname" id="vorname" aria-label="Vorname">
        </div>

        <!-- Nachname -->
        <div class="input-group mb-3">
          <span class="input-group-text"><img src="../../Bilder/User.png" style="height:1.5em;"r></span>
          <input type="text" class="form-control" placeholder="Nachname" id="nachname" aria-label="Nachname">
        </div>

        <!-- Klasse -->
        <div class="input-group mb-3">
          <span class="input-group-text"><img src="../../Bilder/User.png" style="height:1.5em;"r></span>
          <input type="text" class="form-control" placeholder="Klasse" id="klassenname" aria-label="Klasse">
        </div>

        <!-- Passwort -->
        <div class="input-group mb-3">
          <span class="input-group-text"><img src="../../Bilder/passwort.png" style="height:1.5em;"r></span>
          <input type="password" class="form-control" placeholder="Passwort" id="Passwort" aria-label="Passwort">
        </div>

        <!-- Passwort Wiederholen -->
        <div class="input-group mb-3">
          <span class="input-group-text"><img src="../../Bilder/passwort.png" style="height:1.5em;"r></span>
          <input type="password" class="form-control" placeholder="Passwort Wiederholen" id="Passwort2" aria-label="Passwort2">
        </div>

        <!-- Registrieren Button -->
        <button class="btn w-100 mb-3" style="background-color: #35b54a;" onclick=register()>Registrieren</button>

        <hr>

        <!-- Anmelden -->
        <h6 class="text-center mb-3">Bereits Registriert</h6>
        <button class="btn w-100 regButton" onclick=loadLoginHTML()>Anmelden</button>
      </div>
    </div>
  </div>
  `;
}

function checkEingaben() {
  // TODO LOGIK
  return true;
}

function register() {
  if (checkEingaben()) {
    // Passwort an hashPassword.php senden
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let letter = {
          nutzername: document.getElementById("nutzername").value,
          vorname: document.getElementById("vorname").value,
          nachname: document.getElementById("nachname").value,
          klassenname: document.getElementById("klassenname").value,
          hash: this.responseText,
        };

        // Account erstellen (als JSON senden)
        var xhttp2 = new XMLHttpRequest();
        xhttp2.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            console.log("Account erstellt:", this.responseText);
          }
        };
        xhttp2.open("POST", "../../Benutzerverwaltung/createUser.php");
        xhttp2.setRequestHeader("Content-Type", "application/json");
        xhttp2.send(JSON.stringify(letter));
      }
    };

    xhttp.open("POST", "../../Benutzerverwaltung/hashPassword.php");
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("pswd=" + document.getElementById("Passwort2").value);
  }
}
