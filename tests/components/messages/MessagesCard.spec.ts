import MessagesCard from "~/components/messages/MessagesCard.vue";
import { shallowMount } from "@vue/test-utils";
import { setup, $fetch } from "@nuxt/test-utils";
import { describe, expect, test } from "vitest";

describe("MessagesCard", async () => {
  /* await setup({
    // test context options
  }); */

  test("renders title when component is created", () => {
    const wrapper = shallowMount(MessagesCard, {});

    expect(wrapper.text()).toMatch(/Messages/);
  });
});
