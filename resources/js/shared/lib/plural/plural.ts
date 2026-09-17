const ruRules = new Intl.PluralRules("ru-RU");

export const plural = (count: number, forms: [one: string, few: string, many: string]) => {
  const category = ruRules.select(count) as "one" | "few" | "many";
  const map = { one: forms[0], few: forms[1], many: forms[2] };
  return map[category] ?? forms[2];
};
