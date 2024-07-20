import { Component, OnInit } from '@angular/core';
import { BeneficioService } from 'src/app/services/beneficio.service';
import { Beneficio } from 'src/app/models/beneficio';

@Component({
  selector: 'app-beneficio-list',
  templateUrl: './beneficio-list.component.html',
  styleUrls: ['./beneficio-list.component.css']
})
export class BeneficioListComponent implements OnInit {

  beneficios: Beneficio[] = [];
  isListVisible: boolean = false;

  constructor(private beneficioService: BeneficioService) { }

  ngOnInit(): void {  }

  fetchBeneficios(): void {
    this.beneficioService.getBeneficiosByCliente(1).subscribe(data => {
      this.beneficios = data;
      this.isListVisible = true;
    });
  }

}
