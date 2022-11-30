import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-application',
  templateUrl: './new-application.component.html',
  styleUrls: ['./new-application.component.css']
})
export class NewApplicationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.applicationType = new FormControl(null);
  }

  selectedApplication: any = null;
  isApplicationCategorySelected: boolean = false;
  displayApplications: boolean = false;
  verifyAndStartApplication: boolean = false;
  applicationType: FormControl;
  applicationTypes : any[] = [
    {'type': 'Form One',      'uuid': 'abce1', 'description': 'Joining Form One'},
    {'type': 'Form Five',     'uuid': 'abce2', 'description': 'Form Five Application Form'},
    {'type': 'College',       'uuid': 'abce3', 'description': 'College Application Form'},
    {'type': 'Miscellaneous', 'uuid': 'abce4', 'description': 'Miscellaneous Application Form'}
  ]

  checkAvailableApplications(){
    this.isApplicationCategorySelected = true;
    this.verifyAndStartApplication = false;
    console.log('check applications by type: ', this.applicationType.value);
    // check if there are any applications by the selected category
    // display available applications
    this.displayApplications = true;
  }

  selectApplication(application){
    this.verifyAndStartApplication = true;
    this.isApplicationCategorySelected = false;
    this.selectedApplication = application;
  }

  availableApplications: any[] = [
    {
      "institution": "St. Mary's Duluti Secondary School",
      "location": "Arusha",
      "title": "Form Five Application",
      "deadline": "27-Dec-2022",
      "interview": "01-Feb-2023",
      "available": "100",
      "fee": "Tshs. 10,000"
    },
    {
      "institution": "Kaizirege Secondary School",
      "location": "Kagera",
      "title": "Form Five Application",
      "deadline": "27-Dec-2022",
      "interview": "01-Feb-2023",
      "available": "100",
      "fee": "Tshs. 15,000"
    },
    {
      "institution": "Marian Boys Secondary School",
      "location": "Pwani",
      "title": "Form Five Application",
      "deadline": "27-Dec-2022",
      "interview": "01-Feb-2023",
      "available": "100",
      "fee": "Tshs. 20,000"
    },
    {
      "institution": "Marian Girls Secondary School",
      "location": "Pwani",
      "title": "Form Five Application",
      "deadline": "27-Dec-2022",
      "interview": "01-Feb-2023",
      "available": "100",
      "fee": "Tshs. 20,000"
    },
    {
      "institution": "St. Francis Secondary School",
      "location": "Mbeya",
      "title": "Form Five Application",
      "deadline": "27-Dec-2022",
      "interview": "01-Feb-2023",
      "available": "100",
      "fee": "Tshs. 20,000"
    },
    {
      "institution": "AHMES Secondary School",
      "location": "Pwani",
      "title": "Form Five Application",
      "deadline": "27-Dec-2022",
      "interview": "01-Feb-2023",
      "available": "100",
      "fee": "Tshs. 20,000"
    }
  ]

}
