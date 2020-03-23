import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textStats'
})
export class TextStatsPipe implements PipeTransform {

  transform(value: string): string {
    const charCount = value.length;
    const lineCount = value.split('\n').length;

    return charCount + ' characters, ' +
          lineCount + (lineCount === 1 ? ' line' : ' lines');
  }

}
