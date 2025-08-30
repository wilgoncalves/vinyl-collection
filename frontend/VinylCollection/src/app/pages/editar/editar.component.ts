import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Vinyl } from 'src/app/models/Vinyls';
import { VinylService } from 'src/app/services/vinyl.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent implements OnInit {
  vinyls: Vinyl[] = [];

  btnTitulo: string = 'Editar vinil';
  btnAcao: string = 'Editar';
  vinyl!: Vinyl;

  constructor(
    private vinylService: VinylService,
    private route: ActivatedRoute, 
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.vinylService.GetVinyl(id).subscribe(data => {
      console.log(data);
      this.vinyl = data;
    });
  }

  editVinyl(vinyl: Vinyl) {
    this.vinylService.EditVinyl(vinyl).subscribe((data) => {
      this.router.navigate(['/'])
    })
  }
}
