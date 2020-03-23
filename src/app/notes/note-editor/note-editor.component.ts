import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Note } from 'src/app/models/note.model';
import { NoteService } from '../note.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { NoteColor } from 'src/app/models/note-types.enum';

@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.scss'],
  animations: [
    trigger('zoomIn', [
      transition('void => *', [
        style({ transform: 'translateX(100%)' }),
        animate(200)
      ])
    ])
  ]
})
export class NoteEditorComponent implements OnInit {
  note: Note;
  constructor(private noteService: NoteService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        const id = params.id;
        const note = this.noteService.getNoteById(id);

        if (!note) {
          // Display 404...
          return;
        }

        this.note = note;
      }
    );
  }

  onColorSelect(color: NoteColor) {
    this.note.color = color;
  }

  handleAction(action: string) {
    switch (action) {
      case 'cancel':
        break;
      case 'save':
        this.note.lastEdited = new Date().getTime();
        this.noteService.persistNote(this.note.id);
        break;
      default:
        console.log('Invalid action.');
        break;
    }

    const urlTree = this.router.createUrlTree(['notes']);
    this.router.navigateByUrl(urlTree);
  }
}
