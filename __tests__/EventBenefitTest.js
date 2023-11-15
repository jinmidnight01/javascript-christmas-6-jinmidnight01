import { MissionUtils } from "@woowacourse/mission-utils";
import EventBenefit from "../src/domains/EventBenefit.js";

describe("이벤트 적용 및 혜택", () => {
  test.each([
    ["1", "타파스-1,제로콜라-1", 8500], 
    ["1", "티본스테이크-1,제로콜라-1", 58000], 
    ["1", "양송이수프-1,티본스테이크-1", 61000], 
    ["1", "바비큐립-1,해산물파스타-1", 89000], 
    ["1", "시저샐러드-1,초코케이크-1", 23000],
  ])("총 주문 금액 연산 결과 비교", async (dateString, orderString, expected) => {
    const eventBenefit = new EventBenefit(dateString, orderString);
    const received = eventBenefit.getTotalPrice();
    expect(received).toEqual(expected);
  });

  test.each([
    ["1", "타파스-1,제로콜라-1", false], 
    ["1", "티본스테이크-1,제로콜라-1", true], 
    ["1", "시저샐러드-1,티본스테이크-1", true], 
    ["1", "바비큐립-1,해산물파스타-1,티본스테이크-1", true], 
    ["1", "양송이수프-1,제로콜라-1", false],
  ])("이벤트 적용 여부 연산 결과 비교", async (dateString, orderString, expected) => {
    const eventBenefit = new EventBenefit(dateString, orderString);
    const received = eventBenefit.canEventApply();
    expect(received).toEqual(expected);
  });

  test.each([
    ["1", "타파스-100,제로콜라-10", true], 
    ["1", "티본스테이크-1,제로콜라-1", false], 
    ["1", "양송이수프-1,티본스테이크-1", false], 
    ["1", "바비큐립-1,해산물파스타-1,티본스테이크-1", true], 
    ["1", "크리스마스파스타-4,아이스크림-4", true],
  ])("샴페인 증정 여부 연산 결과 비교", async (dateString, orderString, expected) => {
    const eventBenefit = new EventBenefit(dateString, orderString);
    const received = eventBenefit.canChampagneApply();
    expect(received).toEqual(expected);
  });

  test.each([
    ["1", "타파스-100,제로콜라-10", 1000], 
    ["15", "티본스테이크-1,제로콜라-1", 2400], 
    ["25", "양송이수프-1,티본스테이크-1", 3400], 
    ["26", "바비큐립-1,해산물파스타-1,티본스테이크-1", 0], 
    ["30", "크리스마스파스타-4,아이스크림-4", 0],
  ])("디데이 할인 혜택 금액 연산 결과 비교", async (dateString, orderString, expected) => {
    const eventBenefit = new EventBenefit(dateString, orderString);
    const received = eventBenefit.getDdayDiscountPrice();
    expect(received).toEqual(expected);
  });

  test.each([
    ["1", "타파스-100,제로콜라-10", 0], 
    ["15", "티본스테이크-1,제로콜라-1", 2023], 
    ["25", "양송이수프-1,티본스테이크-1", 0], 
    ["23", "바비큐립-1,해산물파스타-1,티본스테이크-1", 6069], 
    ["28", "크리스마스파스타-4,아이스크림-4", 8092],
  ])("평일/주말 할인 혜택 금액 연산 결과 비교", async (dateString, orderString, expected) => {
    const eventBenefit = new EventBenefit(dateString, orderString);
    const received = eventBenefit.getDayOfWeekDiscountPrice();
    expect(received).toEqual(expected);
  });
});