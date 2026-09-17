const formatter = new Intl.DateTimeFormat("ru-RU", { dateStyle: "long" });

export const formatDate = (iso: string) => formatter.format(new Date(iso));
