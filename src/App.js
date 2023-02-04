import React from "react";
import { Route, Routes } from "react-router-dom";
import Edit from "./ReduxComp/Edit";
import Table from "./ReduxComp/Table";
import Store from "./ReduxComp/Store";
import { Provider } from "react-redux";
import NavigationLinks from "./ReduxComp/NavigationLinks";
import NoPage from "./ReduxComp/NoPage";
import "./App.css";
import Home from "./ReduxComp/Home";

function App() {
  return (
    <>
      {/* NavBar */}
      <Provider store={Store}>
        <Routes>
          <Route path="/" element={<NavigationLinks />}>
            <Route index element={<Table />} />
            {/* Edit  */}
            <Route path="/editStudent" element={<Edit />} />
            <Route path="/addStudent" element={<Edit />} />
            <Route path="/Home" element={<Home message="Home" />} />
            <Route path="/Contact" element={<Home message="Contact Us" />} />

            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </Provider>
    </>
  );
}

export default App;