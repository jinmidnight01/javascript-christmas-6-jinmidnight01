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
});