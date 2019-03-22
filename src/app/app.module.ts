import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Font awesome - icons
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
library.add(faCoffee);


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './content/home/home.component';
import { NotFoundComponent } from './app/not-found/not-found.component';

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        MenuComponent,
        HomeComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
