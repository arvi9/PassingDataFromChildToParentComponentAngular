import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentOutputComponent } from './components/parent-output/parent-output.component';
import { ChildOutputComponent } from './components/child-output/child-output.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentOutputComponent,
    ChildOutputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
