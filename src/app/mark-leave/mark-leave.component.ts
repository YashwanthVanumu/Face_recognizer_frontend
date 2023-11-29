import { Component } from '@angular/core';

@Component({
  selector: 'app-mark-leave',
  templateUrl: './mark-leave.component.html',
  styleUrls: ['./mark-leave.component.css']
})
export class MarkLeaveComponent {
  selectedLevel!: string;
  
  data = [
      {id: 0, name: "Casual leave"},
      {id: 1, name: "Sick leave"}
  ];
  // datajson = JSON.stringify(this.data)
  minDate: string = new Date().toISOString().split('T')[0];

}
