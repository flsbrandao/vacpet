export default function onlyNumbers(value: string): string {
  return value.replace(/[^\d]+/g, "");
}
