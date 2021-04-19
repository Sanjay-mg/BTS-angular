import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { CreateBugFormComponent } from './create-bug-form/create-bug-form.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ViewBugsComponent } from './view-bugs/view-bugs.component';
import { SearchBugComponent } from './search-bug/search-bug.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateBugFormComponent,
    NavigationBarComponent,
    FooterComponent,
    ViewBugsComponent,
    SearchBugComponent
  ],
  imports: [
    BrowserModule, FormsModule,HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
