function loadLoginHTML() {
  document.getElementById("mainDiv").innerHTML = `
  <div class="d-flex flex-column align-items-center" style="min-height: 100vh; background-color: #f8f9fa;">
    <!-- Logo + Titel -->
    <div class="text-center my-4">
      <img src="../../Bilder/Logo.png" alt="GradeBase Logo" style="height: 60px;">
      <h1 class="fw-bold text-success mt-2">GradeBase</h1>
    </div>

    <!-- Login Card -->
    <div class="card shadow-lg" style="width: 100%; max-width: 380px; border-radius: 15px;">
      <div class="card-body p-4">
        <h4 class="text-center mb-4">Anmelden</h4>

        <!-- Benutzername -->
        <div class="input-group mb-3">
          <span class="input-group-text"><i class="bi bi-person-fill"></i></span>
          <input type="text" class="form-control" placeholder="Benutzername" id="Benutzername" aria-label="Benutzername">
        </div>

        <!-- Passwort -->
        <div class="input-group mb-3">
          <span class="input-group-text"><i class="bi bi-lock-fill"></i></span>
          <input type="password" class="form-control" placeholder="Passwort" id="Passwort" aria-label="Passwort">
        </div>

        <!-- Anmelden Button -->
        <button class="btn btn-primary w-100 mb-3">Anmelden</button>

        <!-- Passwort vergessen -->
        <div class="text-center mb-3">
          <a href="#" class="small text-decoration-none">Passwort vergessen?</a>
        </div>

        <hr>

        <!-- Registrieren -->
        <h6 class="text-center mb-3">Neuer Benutzer</h6>
        <button class="btn btn-outline-primary w-100">Registrieren</button>
      </div>
    </div>
  </div>
  `;
}
