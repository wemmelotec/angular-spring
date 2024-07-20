import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BeneficioService } from 'src/app/services/beneficio.service';
import { Beneficio } from 'src/app/models/beneficio';

@Component({
  selector: 'app-beneficio-detail',
  templateUrl: './beneficio-detail.component.html',
  styleUrls: ['./beneficio-detail.component.css']
})
export class BeneficioDetailComponent implements OnInit {

  beneficio!: Beneficio;

  constructor(
    private route: ActivatedRoute,
    private beneficioService: BeneficioService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.beneficioService.getBeneficio(+id).subscribe(data => {
        this.beneficio = data;
      });
    }
  }

}
