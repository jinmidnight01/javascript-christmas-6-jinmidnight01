import EventBenefit from "../src/domains/EventBenefit.js";

describe("주문 목록", () => {
  test.each([
    [" 타파스-1,제로콜라-1"],
    ["타파스:1,제로콜라-1"], 
    ["타파스-1제로콜라-1"], 
    ["tt타파스-1,제로콜라-1"],
    [""]
  ])("메뉴 형식이 올바르지 않은 경우", (orderString) => {
    expect(() => EventBenefit.validateOrders(orderString)).toThrow("[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.");
  });

  test.each([
    ["타파스-1,타파스-2"],
    ["제로콜라-2,제로콜라-3"], 
    ["포도주스-3,포도주스-2"],
    ["햄버거-2,햄버거-1"]
  ])("중복 메뉴를 입력한 경우", (orderString) => {
    expect(() => EventBenefit.validateOrders(orderString)).toThrow("[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.");
  });

  test.each([
    ["옥수수수프-1,감바스-2"],
    ["립아이스테이크-1,포도주스-3"], 
    ["제로콜라-3,햄버거-2"],
    ["피자-1,브로콜리파스타-1"],
    ["삼겹살-3,아이스크림-2"]
  ])("메뉴판에 없는 메뉴 이름을 입력하는 경우", (orderString) => {
    expect(() => EventBenefit.validateOrders(orderString)).toThrow("[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.");
  });

  test.each([
    ["타파스-1,제로콜라-0"],
    ["타파스--1,제로콜라--3"], 
    ["타파스-2.3,제로콜라-2"], 
    ["타파스-5,제로콜라--5"],
    ["타파스-3.2,제로콜라--2.8"]
  ])("메뉴 개수가 1이상의 자연수가 아닌 경우", (orderString) => {
    expect(() => EventBenefit.validateOrders(orderString)).toThrow("[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.");
  });

  test.each([
    ["레드와인-1,제로콜라-1"],
    ["레드와인-2,제로콜라-3,샴페인-5"], 
    ["샴페인-2,레드와인-2"], 
  ])("메뉴에 음료 주문만 있을 경우", (orderString) => {
    expect(() => EventBenefit.validateOrders(orderString)).toThrow("[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.");
  });

  test.each([
    ["시저샐러드-6,티본스테이크-5,크리스마스파스타-10"],
    ["시저샐러드-3,티본스테이크-4,크리스마스파스타-9,제로콜라-7"], 
    ["시저샐러드-2,티본스테이크-5,크리스마스파스타-8,제로콜라-5,아이스크림-5"], 
  ])("총 메뉴 개수가 20개를 초과하는 경우", (orderString) => {
    expect(() => EventBenefit.validateOrders(orderString)).toThrow("[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.");
  });

});