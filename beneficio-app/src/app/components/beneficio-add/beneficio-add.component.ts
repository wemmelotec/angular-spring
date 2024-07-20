import { Component } from '@angular/core';
import { BeneficioService } from 'src/app/services/beneficio.service';
import { Beneficio } from 'src/app/models/beneficio';

@Component({
  selector: 'app-beneficio-add',
  templateUrl: './beneficio-add.component.html',
  styleUrls: ['./beneficio-add.component.css']
})
export class BeneficioAddComponent {

  beneficio: Beneficio = { id: 0, nome: '', descricao: '' };

  constructor(private beneficioService: BeneficioService) { }

  addBeneficio(): void {
    this.beneficioService.addBeneficio(1, this.beneficio).subscribe();
  }

}
