import { GeneralService } from './../service/general.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { Component, OnInit , ViewChild } from '@angular/core';
import {AlertController, IonicSafeString} from '@ionic/angular'
import { CalendarComponent } from 'ionic2-calendar/calendar';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { stringify } from 'querystring';
registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  @ViewChild(CalendarComponent, {static: false}) myCalendar: CalendarComponent;
  currentDate = new Date();
  mode:string = "month";
  currentMonth: string; 
  showAddEvent: boolean; 
  visits = [];
  fields = [];
  label : string; 

  constructor() { }

  ngOnInit() {
  }

}
