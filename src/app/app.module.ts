import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ChildOneComponent } from './child-one/child-one.component';
import { ChildOneOneComponent } from './child-one/child-one-one/child-one-one.component';
import { ChildOneTwoComponent } from './child-one/child-one-two/child-one-two.component';

import { ChildTwoComponent } from './child-two/child-two.component';
import { ChildTwoOneComponent } from './child-two/child-two-one/child-two-one.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,

    ChildOneComponent,
    ChildOneOneComponent,
    ChildOneTwoComponent,

    ChildTwoComponent,
    ChildTwoOneComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
