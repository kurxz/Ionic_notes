import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter",
})
export class FilterPipe implements PipeTransform {
  transform(data: any, args: any): any {
    if (!data || !args) {
      return data;
    }

    var filteredData = data.filter((element) => {
      args = args.toLowerCase();

      if (
        element.list.text != null &&
        element.list.text.toLowerCase().includes(args)
      ) {
        return true;
      }

      if (element.list.myLists != null) {
        return element.list.myLists.some((data) => {
          if (data.item.toLowerCase().includes(args)) {
            return true;
          }
        });
      }
    });

    return filteredData;
  }
}
