function laodLoginHTML() {
  document.getElementById("mainDiv").innerHTML = `
  <div class="card">
    <div class="card-body">
      <form>
          <legend>GradeBase Login</legend>
          
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">@</span>
            <input type="text" class="form-control" placeholder="Benutzername" aria-label="Benutzername" aria-describedby="basic-addon1">
          </div>



          <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
    `;
}
