import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './cards/card/card.component';
import { CardsComponent } from './cards/cards.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InfoCardComponent } from './cards/info-card/info-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
    {path: 'cards', component: CardsComponent,children:[]},
    {path: 'cards/:name', component: InfoCardComponent},
    {path: '', redirectTo: '/cards', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent},
]


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModeule{

}