import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sortByName"
})
export class SortByNamePipe implements PipeTransform {
  transform(value: any): any {
    const arr = value.sort(
      (a, b) => {
        return a.name.localeCompare(b.name);
      }
    );
    return arr;
  }
}
