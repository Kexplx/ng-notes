import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NoteListComponent } from './notes/note-list/note-list.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NoteCardComponent } from './notes/note-list/note-card/note-card.component';
import { NoteEditorComponent } from './notes/note-editor/note-editor.component';
import { ClickDirective } from './shared/navbar/middleclick.directive';
import { TextStatsPipe } from './shared/text-stats.pipe';
import { EuroDatePipe } from './shared/euro-date.pipe';
import { JuliDirective } from './shared/juli.directive';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    NavbarComponent,
    NoteCardComponent,
    NoteEditorComponent,
    ClickDirective,
    TextStatsPipe,
    EuroDatePipe,
    JuliDirective,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
