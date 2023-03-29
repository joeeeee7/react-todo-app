import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AppWrapper from "./components/app.wrapper";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <AppWrapper>
        <Layout>
          <div>test</div>
        </Layout>
      </AppWrapper>
    </div>
  );
}

export default App;
