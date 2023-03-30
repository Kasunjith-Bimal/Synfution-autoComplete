/**
 * AutoComplete Default functionality Sample
 */
import { Component, ViewChild } from '@angular/core';
import { AutoCompleteComponent } from '@syncfusion/ej2-angular-dropdowns';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  @ViewChild('sample')
  public AutoCompleteObj: AutoCompleteComponent;
  // defined the array of data
  public sportsData: Object[] = [
    { Email: 'k@gmail.com', UserName: 'American' },
    { Email: 'b@gmail.com', UserName: 'Badminton' },
    { Email: 'C@gmail.com', UserName: 'Basketball' },
    { Email: 'D@gmail.com', UserName: 'Cricket' },
    { Email: 'E@gmail.com', UserName: 'Football' },
    { Email: 'F@gmail.com', UserName: 'Golf' },
    { Email: 'G@gmail.com', UserName: 'Hockey' },
    { Email: 'H@gmail.com', UserName: 'Rugby' },
    { Email: 'I@gmail.com', UserName: 'Snooker' },
    { Email: 'R@gmail.com', UserName: 'Tennis' },
    { Email: 'F@gmail.com', UserName: 'American' },
  ];
  // maps the appropriate column to fields property
  public fields: Object = { value: 'UserName' };
  public value: string = '';
  // set the placeholder to AutoComplete input
  public waterMark: string = 'e.g. kasun';
  // set the height of the popup element
  public height: string = '250px';
  // bind the change event
  public onChange(args: any): void {
    let valueEle: HTMLInputElement = document.getElementsByClassName(
      'e-input'
    )[0] as HTMLInputElement;
    // make empty the input value when typed characters is 'null' in input element
    if (
      this.AutoCompleteObj.value === 'null' ||
      this.AutoCompleteObj.value === null ||
      this.AutoCompleteObj.value === ''
    ) {
      valueEle.value = '';
    }
  }
  public selectedContact(event) {
    console.log(event);
  }
}
