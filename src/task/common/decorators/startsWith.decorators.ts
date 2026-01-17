import { registerDecorator, ValidationOptions } from 'class-validator';

export function StartsWith(prefix: string, options?: ValidationOptions) {
  return (Object: Object, propertyName: string) => {
    registerDecorator({
      name: 'startsWith',
      target: Object.constructor,
      propertyName,
      options,
      validator: {
        validate(value, validationArguments) {
          console.log(validationArguments);
          return typeof value === 'string' && value.startsWith(prefix);
        },
        defaultMessage(validationArguments) {
          console.log(validationArguments);
          return `Название должно начинаться с ${prefix}`;
        },
      },
    });
  };
}
