import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'current'
})
export class CurrentPipe implements PipeTransform {
  transform(item: string): any {
    if (item == null) return "";
    const data = item.substring(0, 2);
    return data.toLocaleUpperCase();
  }

}
