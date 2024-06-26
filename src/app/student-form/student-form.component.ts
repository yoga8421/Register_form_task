// student-form.componenet.ts

import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';










@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {
  formData = {
    student_name: '',
    mobile_no: '',
    interest_course: '',
    date_time: '',
    gender: ''
  };
  
  constructor(private http: HttpClient) {}

  onSubmit() {
    if (this.formData.student_name && this.formData.mobile_no && 
        this.formData.interest_course && this.formData.date_time && this.formData.gender) {
      this.http.post('http://localhost/Rsoft_Task/Register_form_task/student-registration-form/save_form_data.php', this.formData)
        .subscribe(response => {
          console.log('Data saved successfully', response);
        }, error => {
          console.error('Error saving data', error);
        });
    } else {
      console.error('Form is invalid');
    }
  }
}










// constructor(private http: HttpClient) {}

// async onSubmit() {
//   if (this.formData.student_name && this.formData.mobile_no && 
//       this.formData.interest_course && this.formData.date_time && this.formData.gender) {
//     try {
//       const response = await this.http.post('http://localhost/Rsoft_Task/Register_form_task/student-registration-form/save_form_data.php', this.formData).toPromise();
//       console.log('Data saved successfully', response);
//     } catch (error) {
//       console.error('Error saving data', error);
//     }
//   } else {
//     console.error('Form is invalid');
//   }
// }
// }