import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'euroDate'
})
export class EuroDatePipe implements PipeTransform {

  transform(timestamp: number): string {
    const today = this.getShort(new Date());
    const date = this.getShort(new Date(timestamp));

    if (today === date) {
      return this.getTimeDifferenceInWords(new Date(timestamp));
    }

    return date;
  }

  private getShort(d: Date) {
    return this.addPadding(`${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`, false);
  }

  private getTimeDifferenceInWords(date: Date) {
    const currentHours = new Date().getHours();
    const diff = (currentHours - date.getHours());

    return diff > 1 ? diff + ' hours ago' : ' just now';
  }

  private addPadding(s: string, addTime: boolean = true): string {
    if (s[2] !== '.') {
      s = this.insertAt(s, '0', 0);
    }
    if (s[5] !== '.') {
      s = this.insertAt(s, '0', 3);
    }

    if (addTime) {
      if (s[13] !== ':') {
        s = this.insertAt(s, '0', 11);
      }
      if (s[16] !== ':') {
        s = this.insertAt(s, '0', 14);
      }
      if (s.length < 19) {
        s = this.insertAt(s, '0', 17);
      }
    }

    return s;
  }

  private insertAt(s: string, stringToInsert: string, index: number): string {
    return s.substr(0, index) + stringToInsert + s.substr(index);
  }
}
