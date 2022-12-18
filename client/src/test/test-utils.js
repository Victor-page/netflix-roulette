import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import { setupStore } from "store";

const renderWithProviders = (
  ui,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  } = {}
) => {
  setupListeners(store.dispatch);

  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

export { renderWithProviders };
