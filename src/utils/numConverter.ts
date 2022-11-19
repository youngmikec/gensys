export const numConverter = (number: number, currency: any) => {
  const num = number?.toFixed(2);
  const string = num
    ? Number(num)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    : "0";
  return `${currency ? currency : "$"}${string}`;
};
