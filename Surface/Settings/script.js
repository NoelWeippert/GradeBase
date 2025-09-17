function loadSettingsHTML() {
  document.getElementById("mainDiv").innerHTML = `

  <style>
    .settingsButton {
      border: 1px solid #35b54a;
      color: #35b54a;
      margin-bottom: 0.7rem;
    }
    .settingsButton:hover {
      background-color: #35b54a;
      color: black;
      border-color: #35b54a;
    }
  </style>

  <div class="d-flex flex-column align-items-center">
    <!-- Settings Card -->
    <div class="card shadow-lg" style="width: 100%; max-width: 380px; border-radius: 15px; margin-top:7rem;">
      <div class="card-body p-4">
        <h4 class="text-center mb-4">Einstellungen</h4>

        <!-- Buttons -->
        <button class="btn w-100 settingsButton" onclick="logout()">Abmelden</button>
        <button class="btn w-100 settingsButton" onclick="deleteAccount()">Konto löschen</button>
        <button class="btn w-100 settingsButton" onclick="loadFAQ()">FAQ</button>
        <button class="btn w-100 settingsButton" onclick="loadAbout()">Über uns</button>
        <button class="btn w-100 settingsButton" onclick="loadImpressum()">Impressum</button>

        <hr>

        <div class="text-center">
          <button class="btn btn-sm regButton" onclick="loadLoginHTML()">Zurück</button>
        </div>
      </div>
    </div>
  </div>
  `;
}
