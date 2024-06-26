// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [CommonModule, RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'student-registration-form';
// }







import { Component } from '@angular/core';
// import { StudentFormComponent } from './student-form/student-form.component';
import { StudentFormmmComponent } from './student-formmm/student-formmm.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StudentFormmmComponent],
  template: `<app-student-formmm></app-student-formmm>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
