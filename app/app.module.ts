import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { KegListComponent } from './keg-list.component';
import { KegEditComponent } from './keg-edit.component';
import { KegNewComponent } from './keg-new.component';
import { KegFromBeerComponent } from './keg-from-beer.component';
import { FormsModule }  from '@angular/forms';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,
                  KegListComponent,
                  KegEditComponent,
                  KegNewComponent,
                  KegFromBeerComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
