import SubscriptionsCard from "~/components/subscriptions/SubscriptionsCard.vue";
import { shallowMount } from "@vue/test-utils";
import { setup, $fetch } from "@nuxt/test-utils";
import { describe, expect, test } from "vitest";

describe("SubscriptionsCard", async () => {
  /* await setup({
    // test context options
  }); */

  test("renders title when component is created", () => {
    const wrapper = shallowMount(SubscriptionsCard, {});

    expect(wrapper.text()).toMatch(/Subscriptions/);
  });
});
