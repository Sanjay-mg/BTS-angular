import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { CreateBugFormComponent } from './create-bug-form/create-bug-form.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ViewBugsComponent } from './view-bugs/view-bugs.component';
import { SearchBugComponent } from './search-bug/search-bug.component';
import { UpdateBugComponent } from './update-bug/update-bug.component';

const routes: Routes = [
  {path:'createBug', component:CreateBugFormComponent},
  {path:'searchBug', component:SearchBugComponent},
  {path:'viewBugs', component:ViewBugsComponent},
  {path:'',component:CreateBugFormComponent},
  {path:'updateBug', component:UpdateBugComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CreateBugFormComponent,
    NavigationBarComponent,
    FooterComponent,
    ViewBugsComponent,
    SearchBugComponent,
    UpdateBugComponent
  ],
  imports: [
    BrowserModule, FormsModule,HttpClientModule,RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
