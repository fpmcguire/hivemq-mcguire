import WebClientVue from "~/pages//WebClient.vue";
import { shallowMount } from "@vue/test-utils";
import { setup, $fetch } from "@nuxt/test-utils";
import { describe, expect, test } from "vitest";

describe("WebClient", async () => {
  /* await setup({
    // test context options
  }); */

  test("renders message when component is created", () => {
    const wrapper = shallowMount(WebClientVue, {});

    expect(wrapper.text()).toMatch(/MQTT Web Client/);
  });
});
