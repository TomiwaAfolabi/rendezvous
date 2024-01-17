import { mount } from "@vue/test-utils";
import Index from "../../pages/index.vue";

describe("Hero Header components", () => {
  const wrapper = mount(Index);
  test("Head element exists", () => {
    expect(wrapper.find("Head").exists()).toBe(true);
  });
  test("Head element contains metadata", () => {
    const title = wrapper.find("Title");
    const meta = wrapper.find("Meta");
    expect(title.text()).toBe("Events");
    expect(meta.attributes().content).toEqual("All Events Page");
  });
});
