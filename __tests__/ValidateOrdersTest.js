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

  test.each([[
    [{'옥수수수프': 1, '감바스': 2},
    {'립아이스테이크': 1, '포도주스': 3}, 
    {'감자튀김': 3, '햄버거': 2}, 
    {'피자': 1, '브로콜리파스타': 1},
    {'삼겹살': 3, '소주': 2}]
  ]])("메뉴판에 없는 메뉴 이름을 입력하는 경우", (orders) => {
    expect(() => EventBenefit.validateOrders(orders)).toThrow("[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.");
  });
});