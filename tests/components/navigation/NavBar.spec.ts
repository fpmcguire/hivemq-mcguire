import NavigationNavBar from "~/components/navigation/NavBar.vue";
import { shallowMount } from "@vue/test-utils";
import { setup, $fetch } from "@nuxt/test-utils";
import { describe, expect, test } from "vitest";

describe("NavBar", async () => {
  /* await setup({
    // test context options
  }); */

  test("renders title when component is created", () => {
    const wrapper = shallowMount(NavigationNavBar, {});

    expect(wrapper.text()).toMatch(/MQTT Web Client/);
  });
});
