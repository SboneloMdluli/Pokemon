import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModeule } from './app-routing.module'

import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './cards/card/card.component';
import { CardsComponent } from './cards/cards.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InfoCardComponent } from './cards/info-card/info-card.component';
import { clickedPokemon } from './cards/services/getPokemonStats.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    HttpClientModule,
    AppRoutingModeule,
    BrowserAnimationsModule,
  ],
  providers: [clickedPokemon],
  bootstrap: [AppComponent]
})
export class AppModule { }
