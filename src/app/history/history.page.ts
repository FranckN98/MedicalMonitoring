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

  visit = {
    id : "",
    reason : "",
    temperature : "",
    prescription : "", 
    startTime: new Date().toString(),
    endTime:new Date().toString(),
    
    other : this.fields
  }

  calendar = {
    mode: 'month',
    currentDate: new Date(),
    dateFormatter: {
        formatMonthViewDay: function(date:Date) {
            return date.getDate().toString();
        },
        formatMonthViewDayHeader: function(date:Date) {
            return 'MonMH';
        },
        formatMonthViewTitle: function(date:Date) {
            return 'testMT';
        },
        formatWeekViewDayHeader: function(date:Date) {
            return 'MonWH';
        },
        formatWeekViewTitle: function(date:Date) {
            return 'testWT';
        },
        formatWeekViewHourColumn: function(date:Date) {
            return 'testWH';
        },
        formatDayViewHourColumn: function(date:Date) {
            return 'testDH';
        },
        formatDayViewTitle: function(date:Date) {
            return 'testDT';
        }
    }
};

constructor(public alertController:AlertController, public afDB: AngularFireDatabase, public generalService: GeneralService) 
{ 
  this.visit.id = this.generalService.userId;
  this.loadEvent();
}

async presentAlert() {  }

async onEventSelected(event: any) 
{

  var otherText : string | IonicSafeString = '';

  for(var i = 0; i < event.other.length; i++)
  {
    otherText += event.other[i].label + ': <b>' + event.other[i].Value + '</b> <br>' ; 
  }
  console.log(otherText)
  const alert = await this.alertController.create({
    header: event.title,
  //  subHeader: 'Date of Day :' + event.startTime +' Date of Next Visit : '+event.endTime ,
    message: 'Temperature : <b>' + event.temperature + '</b><br>Prescription : <b>' + event.prescription + '</b><br>' +otherText,
    buttons: ['OK'],
  });

  await alert.present();
  let result = await alert.onDidDismiss();
}

  ngOnInit() {
  }
 
  onViewTitleChanged(title: string)
  {
    this.currentMonth = title; 
  }
  showHideForm()
  {
    

    if(!this.showAddEvent)
    {
      this.showAddEvent = !this.showAddEvent;
      this.mode = 'day';
    }
    else
    {
      this.showAddEvent = !this.showAddEvent;
      this.mode = 'month';
    }
  }


  ngOnInit() {
  }

}
