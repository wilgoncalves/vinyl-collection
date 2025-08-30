import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Vinyl } from 'src/app/models/Vinyls';

@Component({
  selector: 'app-vinyl-form',
  templateUrl: './vinyl-form.component.html',
  styleUrls: ['./vinyl-form.component.css'],
})
export class VinylFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Vinyl>();
  @Input() btnTitulo!: string;
  @Input() btnAcao!: string;
  @Input() dataVinyl: Vinyl | null = null;

  vinylForm!: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.vinylForm = new FormGroup({
      id: new FormControl(this.dataVinyl ? this.dataVinyl.id : 0),
      artist: new FormControl(this.dataVinyl ? this.dataVinyl.artist : '', [
        Validators.required,
      ]),
      title: new FormControl(this.dataVinyl ? this.dataVinyl.title : '', [
        Validators.required,
      ]),
      year: new FormControl(this.dataVinyl ? this.dataVinyl.year : '', [
        Validators.required,
      ]),
    });
  }

  submit() {
    console.log(this.vinylForm.value);
    this.onSubmit.emit(this.vinylForm.value);
  }
}
