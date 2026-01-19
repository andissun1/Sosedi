import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

Injectable();
export class StringToLowerCasePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (typeof value === 'string') {
      return value.toLowerCase();
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return value;
  }
}
