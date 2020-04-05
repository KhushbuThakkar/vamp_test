import React from "react";
import { Provider } from "react-redux";

import { ThemeProvider } from "emotion-theming";
import theme from "@rebass/preset";
import store from "./store";
import Campaigns from "./Views/Campaigns/Campaigns";
import interceptor from "./Utils/Interceptor";

interceptor();

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Campaigns />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
