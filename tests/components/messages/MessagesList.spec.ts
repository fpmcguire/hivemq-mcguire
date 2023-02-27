import MessagesList from "~/components/messages/MessagesList.vue";
import { shallowMount } from "@vue/test-utils";
import { setup, $fetch } from "@nuxt/test-utils";
import { describe, expect, test } from "vitest";

describe("MessagesList", async () => {
  /* await setup({
    // test context options
  }); */

  test("renders title when component is created", () => {
    const wrapper = shallowMount(MessagesList, {});

    expect(wrapper.text()).toMatch(/Message List/);
  });
});
