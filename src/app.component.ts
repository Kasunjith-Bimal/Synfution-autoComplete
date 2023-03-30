/**
 * AutoComplete Default functionality Sample
 */
import { Component, ViewChild } from '@angular/core';
import { AutoCompleteComponent } from '@syncfusion/ej2-angular-dropdowns';
import { Predicate, Query } from '@syncfusion/ej2-data';
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
    { Email: 'Fr@gmail.com', UserName: 'American' },
  ];

  public users: any[] = [
    { Id: 1, Email: '', UserName: '' },
    { Id: 2, Email: '', UserName: '' },
    { Id: 3, Email: '', UserName: '' },
  ];

  //public fieldsForSuggestionName: Object = { value: 'UserName' };
  //public fieldsForSuggestionEmail: Object = { value: 'Email' };

  public fieldsForSuggestionName: Object = { value: 'Email', text: 'UserName' };
  public fieldsForSuggestionEmail: Object = { value: 'Email', text: 'Email' };

  // maps the appropriate column to fields property
  public fields: Object = { value: 'UserName' };
  public value: string = '';
  // set the placeholder to AutoComplete input
  public waterMark: string = 'e.g. kasun';
  public waterMark1: string = 'e.g. kasunysoft@gmail.com';
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
  public selectedContact(event, user: any) {
    if (event.itemData) {
      this.users.forEach((x) => {
        if (x.Id == user.Id) {
          x.UserName = event.itemData.UserName;
          x.Email = event.itemData.Email;
        }
      });
    }
  }

  public filtering(args) {
    let predicate = new Predicate('Email', 'contains', args.text, true);
    predicate = predicate.or('UserName', 'contains', args.text, true);
    let query = new Query();
    query = args.text !== '' ? query.where(predicate) : query;
    args.updateData(this.sportsData, query);
  }
}
