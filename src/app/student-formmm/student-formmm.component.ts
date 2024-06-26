import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-formmm',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './student-formmm.component.html',
  styleUrls: ['./student-formmm.component.css']
})
export class StudentFormmmComponent {
  studentName: string = '';
  mobileNumber: string = '';
  interestCourse: string = '';
  dateTime: string = '';
  gender: string = '';
  message: string = '';
  submitted: boolean = false;

  courses: string[] = ['Science', 'Math', 'History', 'Literature'];


  constructor(private http: HttpClient) {}

  onSubmit(studentForm: any) {
    this.submitted = true;
    const formData = {
      studentName: this.studentName,
      mobileNumber: this.mobileNumber,
      interestCourse: this.interestCourse,
      dateTime: this.dateTime,
      gender: this.gender
    };
    console.log(formData);
    this.insertIntoDatabase(formData);

    // Clear the form
    this.resetForm(studentForm);
  }
  onButton1Click() {
    console.log('Button 1 clicked');
  }

  onButton2Click() {
    console.log('Button 2 clicked');
  }

  insertIntoDatabase(data: any) {
    this.http.post('http://localhost/Rsoft_Task/Register_form_task/student-registration-form/save_form_data.php', data)
      .subscribe(response => {
        console.log('Data inserted successfully', response);
      }, error => {
        console.error('Error inserting data', error);
      });
  }

  resetForm(studentForm: any) {
    studentForm.reset();
    this.studentName = '';
    this.mobileNumber = '';
    this.interestCourse = '';
    this.dateTime = '';
    this.gender = '';
    this.message = '';
    this.submitted = false;
  }
}












  // constructor(private http: HttpClient) { }

  // onSubmit() {
  //   this.submitted = true;
  //   const formData = {
  //     studentName: this.studentName,
  //     mobileNumber: this.mobileNumber,
  //     interestCourse: this.interestCourse,
  //     dateTime: this.dateTime,
  //     gender: this.gender
  //   };
  //   console.log(formData);
  // }

  // insertIntoDatabase(data: any) {
  //   this.http.post('http://localhost/Rsoft_Task/Register_form_task/student-registration-form/save_form_data.php', data)
  //     .subscribe(response => {
  //       console.log('Data inserted successfully', response);
  //     }, error => {
  //       console.error('Error inserting data', error);
  //     });
  // }
// }
