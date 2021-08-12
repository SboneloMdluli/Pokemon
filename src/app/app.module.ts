import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './cards/card/card.component';
import { CardsComponent } from './cards/cards.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InfoCardComponent } from './cards/info-card/info-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({

  
  declarations: [
    AppComponent,
    HeaderComponent,
    CardsComponent,
    CardComponent,
    InfoCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'cards', component: CardsComponent},
      {path: 'info', component: InfoCardComponent},
      {path: '', redirectTo: '/cards', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
