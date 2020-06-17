import { Component, OnInit } from '@angular/core';
import { Professional } from 'src/app/shared/models/professional';
import { ProfessionalService } from 'src/app/core/services/professional.service';

@Component({
  selector: 'app-professional-list',
  templateUrl: './professional-list.component.html',
  styleUrls: ['./professional-list.component.scss']
})
export class ProfessionalListComponent implements OnInit {

  professionals: Professional[];

  constructor(
    private professionalService: ProfessionalService
  ) {
    this.professionals = new Array<Professional>();
   }

  ngOnInit(): void {
    this.professionalService.getProfessionals().subscribe(response => {
      this.professionals = response as Professional[];
      console.log(response);
    });
  }

}
