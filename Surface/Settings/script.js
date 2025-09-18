function loadSettingsHTML() {
  document.getElementById("mainDiv").innerHTML = `

  <style>
    .settingsButton {
        border: 1px solid #35b54a;
        color: black;
        margin-bottom: 0.7rem;
        background-color: #35b54a;
        font-weight: normal;
    }

    .settingsButton:hover{
      background-color: #2a8d3bff; !important
    }

    .backButton {
        background-color: white;
        border: 1px solid #35b54a;
        color: #35b54a;
        padding: 0.4rem 1rem;
        border-radius: 8px;
        font-weight: 500;
        margin: 20px; /* Abstand von oben/links */
    }

    .backButton:hover {
        background-color: #35b54a;
        color: white;
    }
  </style>
  
  <!-- Back Button oben links mit Abstand -->
  <div style="text-align: left; width: 100%;">
    <button class="backButton" onclick="window.location.href = '../Startseite/index.html' ">Zurück</button>
  </div>
  
  <div class="d-flex flex-column align-items-center">
    <!-- Settings Card -->
    <div class="card shadow-lg" style="width: 100%; max-width: 380px; border-radius: 15px; margin-top:3rem;">
      <div class="card-body p-4">
        <h4 class="text-center mb-4">Einstellungen</h4>

        <!-- Buttons -->
        <button class="btn w-100 mb-3 settingsButton" onclick="logout()">Abmelden</button>
        <button class="btn w-100 mb-3 settingsButton" onclick="deleteAccount()">Konto löschen</button>
        <button class="btn w-100 mb-3 settingsButton" onclick="loadFAQ()">FAQ</button>
        <button class="btn w-100 mb-3 settingsButton" onclick="loadAbout()">Über uns</button>
        <button class="btn w-100 mb-3 settingsButton" onclick="loadImpressum()">Impressum</button>

      </div>
    </div>
  </div>
  `;
}

function logout() {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      window.location.replace(this.responseText);
    }
  };
  xhr.open("GET", "../../Benutzerverwaltung/logout.php", true);
  xhr.send();
}
