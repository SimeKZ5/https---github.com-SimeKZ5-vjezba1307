import React from "react";
import Layout from "./components/Layout";
import ParentKomponenta from "./components/ParentKomponenta";
import KlassKomponenta from "./components/KlassKomponenta";
import PropTipovi from "./components/PropTipovi";

function App() {
  return (
    <Layout>
      <ParentKomponenta />
      <KlassKomponenta grad="Križevci" />
      <PropTipovi
        ime={"Domagoj"}
        prezime={"Šimatović"}
        dob={"29"}
        grad={"Križevci"}
      />
    </Layout>
  );
}

export default App;
