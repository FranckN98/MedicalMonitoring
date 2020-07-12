import { AngularFireAuth } from '@angular/fire/auth';
import { GeneralService } from './../service/general.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.css'],
})
export class ChatPage implements OnInit {

 
  public messages: any = [];
  doctors: any = []
  partnerSelect = false;
  selectedDoctor = { 
    name:"",
    doctorId: "",
    startDate: "",
    rating: "",
    town: ""
  };
  messageText : any; 
  userId  ;
  
  constructor(public afDB: AngularFireDatabase,public afAuth: AngularFireAuth, public generalService: GeneralService) { 

    this.userId = this.generalService.userId;
    this.getMessages();
    this.getDoctors();
  }

  ngOnInit() {
  }


  sendMessage()
  {
 
    console.log(this.selectedDoctor)
    this.afDB.list('Messages/').push({
      userId: this.userId,
      text: this.messageText,
      date:new Date().toString(),
      partnerId : this.selectedDoctor.doctorId
    })

    this.messageText ='';
  }

}
