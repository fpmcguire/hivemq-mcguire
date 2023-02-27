import MessagesNewMessage from "~/components/messages/MessagesNewMessage.vue";
import { shallowMount } from "@vue/test-utils";
import { setup, $fetch } from "@nuxt/test-utils";
import { describe, expect, test } from "vitest";

describe("MessagesNewMessage", async () => {
  /* await setup({
    // test context options
  }); */

  test("renders title when component is created", () => {
    const wrapper = shallowMount(MessagesNewMessage, {});

    expect(wrapper.text()).toMatch(/New Message/);
  });
});
