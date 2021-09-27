abstract class DTO {

  protected onlyNumbers(value: string): string {
    return value.replace(/[^\d]+/g, "");
  }
}

export default DTO;