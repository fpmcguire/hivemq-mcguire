import SubscriptionsList from "~/components/subscriptions/SubscriptionsList.vue";
import { shallowMount } from "@vue/test-utils";
import { setup, $fetch } from "@nuxt/test-utils";
import { describe, expect, test } from "vitest";

describe("SubscriptionsList", async () => {
  /* await setup({
    // test context options
  }); */

  test("renders title when component is created", () => {
    const wrapper = shallowMount(SubscriptionsList, {});

    expect(wrapper.text()).toMatch(/Subscription List/);
  });
});
