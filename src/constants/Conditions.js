const Conditions = Object.freeze({
  ORDER_DELIMITER: ',',
  NAME_COUNT_DELIMITER: '-',
  MIN_DATE: 1,
  MAX_DATE: 31,
  MENU: Object.freeze({
    양송이수프: { category: 'appetizer', price: 6000 },
    타파스: { category: 'appetizer', price: 5500 },
    시저샐러드: { category: 'appetizer', price: 8000 },
    티본스테이크: { category: 'main', price: 55000 },
    바비큐립: { category: 'main', price: 54000 },
    해산물파스타: { category: 'main', price: 35000 },
    크리스마스파스타: { category: 'main', price: 25000 },
    초코케이크: { category: 'dessert', price: 15000 },
    아이스크림: { category: 'dessert', price: 5000 },
    제로콜라: { category: 'drink', price: 3000 },
    레드와인: { category: 'drink', price: 60000 },
    샴페인: { category: 'drink', price: 25000 },
  }),
  MENU_FORMAT: /^([ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+)-(\d+)$/,
  MIN_ORDER_AMOUNT: 1,
  MAX_ORDER_AMOUNT: 20,
  EVENT_MINIMUM_PRICE: 10000,
  CHAMPAGNE_MINIMUM_PRICE: 120000,
});

export default Conditions;