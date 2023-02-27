import ConnectionCard from "~/components/connection/ConnectionCard.vue";
import { shallowMount } from "@vue/test-utils";
import { setup, $fetch } from "@nuxt/test-utils";
import { describe, expect, test } from "vitest";

describe("ConnectionCard", async () => {
  /* await setup({
    // test context options
  }); */

  test("renders title when component is created", () => {
    const wrapper = shallowMount(ConnectionCard, {});

    expect(wrapper.text()).toMatch(/Connection/);
  });
});
