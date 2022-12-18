import "@testing-library/jest-dom";

import { server } from "test/server";
import { setupStore } from "store";
import { movieShelfApi } from "services";

process.env.DEBUG_PRINT_LIMIT = "15000";

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterAll(() => server.close());
afterEach(() => {
  server.resetHandlers();
  setupStore().dispatch(movieShelfApi.util.resetApiState());
});
