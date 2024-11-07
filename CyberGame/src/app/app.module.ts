import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component'; // Assure-toi que tu as ce composant
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component'; // Assure-toi que tu as ce composant

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
    // Ajoute ici d'autres composants comme LoginComponent quand ils existent
  ],
  imports: [
    BrowserModule,
    // Ajoute ici d'autres modules comme AppRoutingModule quand ils sont créés
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
