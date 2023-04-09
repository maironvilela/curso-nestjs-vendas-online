export interface FieldValidator {
  validateFields: (fields: string[], validateFields: string[]) => Error;
}
