import { CheckBoxModule  } from '@syncfusion/ej2-angular-buttons';

import { AutoCompleteModule } from '@syncfusion/ej2-angular-dropdowns';

import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

import { HttpModule } from '@angular/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
@NgModule({ declarations: [ AppComponent ], imports: [ AutoCompleteModule, BrowserModule, CheckBoxModule, DropDownListModule, FormsModule, ReactiveFormsModule, BrowserModule], providers: [], bootstrap: [AppComponent]
})
export class AppModule { }
