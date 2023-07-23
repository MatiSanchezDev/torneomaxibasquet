import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { App } from "./App";
import "./index.css";

const persistor = persistStore(store);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </Provider>
    </PersistGate>
  </React.StrictMode>
);
