import TaskVue from "~/pages/Task.vue";
import { shallowMount } from "@vue/test-utils";
import { setup, $fetch } from "@nuxt/test-utils";
import { describe, expect, test } from "vitest";

describe("TaskVue", async () => {
  /* await setup({
    // test context options
  }); */

  test("renders message when component is created", () => {
    const wrapper = shallowMount(TaskVue, {});

    expect(wrapper.text()).toMatch(/Take Home Assignment/);
  });
});
