import React from "react";
import Layout from "./components/Layout";
import ParentKomponenta from "./components/ParentKomponenta";
import KlassKomponenta from "./components/KlassKomponenta";

function App() {
  return (
    <Layout>
      <ParentKomponenta />
      <KlassKomponenta grad="Križevci" />
    </Layout>
  );
}

export default App;
