import { render } from "@testing-library/svelte";
import SetContextStoreExample from "./SetContextStoreExample.svelte";

describe("Svelte context stores", () => {
  describe("setStore", () => {
    it("should set a single writable store in svelte context", () => {
      const value = "test";
      const dom = render(SetContextStoreExample, {
        props: {
          value,
        },
      });
      const storeValue = dom.getByTestId("store-value");
      expect(storeValue.innerHTML).toBe(value);
    });
  });
});
