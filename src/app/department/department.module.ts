import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffDetailsComponent } from './staff-details/staff-details.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { DepartmentRoutes } from './department.routing';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    StaffDetailsComponent,
    StudentDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgxPaginationModule,
    RouterModule.forChild(DepartmentRoutes)
  ]
})
export class DepartmentModule { }
