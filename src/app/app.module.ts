import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { TestChildComponentComponent } from './test-component/test-child-component/test-child-component.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    TestChildComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
