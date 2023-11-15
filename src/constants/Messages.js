const Messages = Object.freeze({
  WELCOME: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.',
  ASK_DATE: '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)',
  ASK_ORDERS: '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)',
  BENEFITS_PREVIEW_TITLE : '12월 3일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!',
  TITLE : Object.freeze({
    ORDER_MENU: '<주문 메뉴>',
    TOTAL_PRICE: '<할인 전 총주문 금액>',
    PRESENT_MENU: '<증정 메뉴>',
    BENEFIT_CONTENT: '<혜택 내역>',
    TOTAL_DISCOUNT_PRICE: '<총혜택 금액>',
    FINAL_PRICE: '<할인 후 예상 결제 금액>',
    BADGE: '<12월 이벤트 배지>',
  }),
  ONE_UNIT: '1개',
  NOTHING: '없음',
  EVENT_BENEFIT: Object.freeze({
    DDAY_DISCOUNT: '크리스마스 디데이 할인:',
    WEEKDAY_DISCOUNT: '평일 할인:',
    WEEKEND_DISCOUNT: '주말 할인:',
    SPECIAL_DISCOUNT: '특별 할인:',
    PRESENT_EVENT: '증정 이벤트:',
  }),
});

export default Messages;