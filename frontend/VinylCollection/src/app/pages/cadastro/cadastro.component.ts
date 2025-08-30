import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Vinyl } from 'src/app/models/Vinyls';
import { VinylService } from 'src/app/services/vinyl.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent {
  
  btnTitulo = 'Adicionar novo disco';
  btnAcao = 'Adicionar';

  constructor(private vinylService: VinylService, private router: Router) {}

  addVinyl(vinyl: Vinyl) {
    this.vinylService.AddVinyl(vinyl).subscribe((data) => {
      this.router.navigate(['/']);
    });
  }
}
