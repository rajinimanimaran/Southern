import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-survey',
  templateUrl: './my-survey.component.html',
  styleUrls: ['./my-survey.component.css']
})
export class MySurveyComponent implements OnInit {

  isFormOpen: boolean = false;
  isEditing: boolean = false;
  checkEditing: boolean = false;
  AppoinmentDetail: any = {};
  requirement: any = {};
  existingRequirement: any = {};
  constructor() { }

  ngOnInit() {
  }


  addBdmAppointment() {
    this.isFormOpen = true;
    this.isEditing = false;
  }

  Cancel() {
    this.isFormOpen = false;
    this.isEditing = false;
  }


  
}