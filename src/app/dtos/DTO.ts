import { add } from "date-fns";

abstract class DTO {
  protected onlyNumbers(value: string): string {
    return value.replace(/[^\d]+/g, "");
  }

  protected addDayToTheDate(date: string): Date {
    return add(new Date(date), {
      days:1
    })
  }
}

export default DTO;
