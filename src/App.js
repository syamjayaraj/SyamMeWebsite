import React from "react";
import Card from "./components/Card";
import "./assets/scss/style.scss";

function App() {
  return (
    <div className="app">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 col-xl-9 mx-auto">
            <div class="card profile-container flex-row my-5">
              <div class="card-img-left d-none d-md-flex"></div>
              <Card />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
