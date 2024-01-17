import { mount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import HeroHeader from "../../components/HeroHeader.vue";

describe("Hero Header components", () => {
  const wrapper = mount(HeroHeader, {
    global: {
      plugins: [createTestingPinia()],
    },
  });
  test("Input field exists", () => {
    expect(wrapper.find(".field").find("input").exists()).toBe(true);
  });
  test("Input field operates as intended", async () => {
    const input = wrapper.find(".field").find("input");
    await wrapper.find(".field").find("input").trigger("click");
    await input.setValue("");
    let userInput = "";
    expect(input.element.value).toBe(userInput);
  });
  test("select options exist", () => {
    let option = wrapper.find(".categories_filter").find("select");

    expect(option.exists()).toBe(true);
  });
  test("select options displays properly", async () => {
    const option = wrapper.find(".categories_filter").find("select");
    await wrapper
      .find(".categories_filter")
      .find("select")
      .find("option")
      .trigger("click");
    await option.setValue("Tech");
    let selectedOption = "Tech";
    expect(option.element.value).toBe(selectedOption);
  });
});
