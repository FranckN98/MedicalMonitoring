import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.page.html',
  styleUrls: ['./consultation.page.css'],
})
export class ConsultationPage implements OnInit {

  backButton: boolean = true;
  step1: boolean = true;
  step2: boolean;
  step3: boolean;
  constructor() {

    if (this.step1) this.backButton = true;
  }

  ngOnInit() {
  }
}