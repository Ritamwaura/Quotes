import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date();
    let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference  = Math.abs(todayWithNoTime - value)
    var dateDifferenceSeconds = dateDifference*0.001;
    var dateDifferenceMinutes = dateDifferenceSeconds/60;
    var dateDifferenceHours = dateDifferenceMinutes/60;
    var dateDifferenceDays = dateDifferenceHours/24;

    if(value < todayWithNoTime){
      return dateDifferenceDays;
    }
  }
}
