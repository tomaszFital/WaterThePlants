import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plantType'
})
export class PlantTypePipe implements PipeTransform {

  transform(value?: "outside" | "inside"): string {
    switch (value) {
      case "outside":
        return "Roślina zewnętrzna";
      case "inside":
        return "Roślina wewnętrzna";
      case undefined:
      case null:
        return "-";
    }
  }

}
