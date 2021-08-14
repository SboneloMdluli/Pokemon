import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CardsComponent } from './cards/cards.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InfoCardComponent } from './cards/info-card/info-card.component';

const appRoutes: Routes = [
    {path: 'cards', component: CardsComponent},
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
export class AppRoutingModule{

}