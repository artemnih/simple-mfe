import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DemoComponent } from './components/demo/demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'demo', component: DemoComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    HomeComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
})
export class FlightsModule { }

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    FlightsModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [AppComponent]

})
export class AppModule { }