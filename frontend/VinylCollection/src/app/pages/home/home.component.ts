import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExcluirComponent } from 'src/app/componentes/excluir/excluir.component';
import { Vinyl } from 'src/app/models/Vinyls';
import { VinylService } from 'src/app/services/vinyl.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  vinyls: Vinyl[] = [];
  vinylsGeral: Vinyl[] = [];

  columns = ['Artista', 'Título', 'Ano', 'Editar', 'Excluir'];

  constructor(private vinylService: VinylService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.vinylService.GetVinyls().subscribe((data) => {
      this.vinyls = data;
      this.vinylsGeral = data;
    });
  }

  search(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.vinyls = this.vinylsGeral.filter((vinyl) => {
      return vinyl.artist.toLowerCase().includes(value);
    });
  }

  openDialog(id : number) {
    this.dialog.open(ExcluirComponent, {
      width: '450px',
      height: '450px',
      data: {
        id: id
      }
    });
  }
}
