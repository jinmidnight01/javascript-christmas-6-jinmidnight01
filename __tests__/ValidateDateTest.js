import EventBenefit from "../src/domains/EventBenefit";

describe("예상 방문 날짜", () => {
  test.each([[
    ["0", "21.1", "300", "-12", "sdf"]
  ]])("1이상 31이하 숫자가 아닌 경우", (dateString) => {
    expect(() => EventBenefit.validateDate(dateString)).toThrow("[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.");
  });
});