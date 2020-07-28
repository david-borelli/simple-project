import React from "react";

import Product from "./Product";
import Layout from "./Layout";

import GlobalStyle from "../layout/Global";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Layout>
        <Product />
      </Layout>
    </React.Fragment>
  );
}

export default App;
