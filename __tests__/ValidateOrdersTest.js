import EventBenefit from "../src/domains/EventBenefit.js";

describe("주문 목록", () => {
  test.each([[
    [" 타파스-1,제로콜라-1",
    "타파스:1,제로콜라-1", 
    "타파스-1제로콜라-1", 
    "1-타파스,제로콜라-1",
    ""]
  ]])("메뉴 형식이 올바르지 않은 경우", (orderString) => {
    expect(() => EventBenefit.validateOrders(orderString)).toThrow("[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.");
  });
});