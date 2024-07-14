import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DashboardService } from '../../service/dashboard/dashboard.service';

@Component({
  selector: 'dash-admission-form',
  templateUrl: './admission-form.component.html',
  styleUrls: ['./admission-form.component.scss']
})
export class AdmissionFormComponent {
  administration: FormGroup | any;
  genderInfo = [];
  gradeInfo = [];
  constructor(private fb: FormBuilder, private dashboardService: DashboardService) {
    this.administration = this.fb.group({
      name: [],
      fatherName: [],
      motherName: [],
      dateOfBirth: [],
      gender: [],
      grade: []
    });
    this.getGender();
    this.getGrade();
  }

  getGender() {
    this.dashboardService.getGender().subscribe({
      next: ((res:any) => this.genderInfo = res),
      error: (err => console.error('An error occurred :', err)),
      complete: () => { }
    })
  }
  getGrade() {
    this.dashboardService.getGrade().subscribe({
      next: ((res:any) => this.gradeInfo = res),
      error: (err => console.error('An error occurred :', err)),
      complete: () => { }
    })
  }
}
