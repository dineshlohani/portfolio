import { React, } from "react";


import {  ThemeProvider } from "./components/contex";
import Change from "./components/Change";

function App() {
  return (
    <ThemeProvider>
      <Change />
    </ThemeProvider>
  );
}

export default App;
