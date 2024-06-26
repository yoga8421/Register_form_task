import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  onButton1Click() {
    console.log('Button 1 clicked');
  }

  onButton2Click() {
    console.log('Button 2 clicked');
  }
}
