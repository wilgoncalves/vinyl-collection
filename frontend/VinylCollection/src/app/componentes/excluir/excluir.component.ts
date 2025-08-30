import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Vinyl } from 'src/app/models/Vinyls';
import { VinylService } from 'src/app/services/vinyl.service';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.css']
})
export class ExcluirComponent implements OnInit {

  inputData: any;
  vinyl!: Vinyl;

  constructor(private vinylService : VinylService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<ExcluirComponent>
  ) {}

  ngOnInit(): void {
    this.inputData = this.data;

    this.vinylService.GetVinyl(this.inputData.id).subscribe((vinyl) => {
      this.vinyl = vinyl;
    });
  }

  excluir() {
    this.vinylService.DeleteVinyl(this.inputData.id, this.vinyl).subscribe();
    this.ref.close();
    window.location.reload();
  }

  cancelar() {
    this.ref.close();
  }
}
