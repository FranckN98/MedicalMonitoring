import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  dataUser = {
    email: '',
    password: ''
 };
 doctor : boolean; 
 patient : boolean;
 userId: any; 
  
 connected: boolean;

  constructor(public afAuth: AngularFireAuth,public afDB: AngularFireDatabase, public navCtrl:NavController,) 
  { 
    this.afAuth.authState.subscribe(auth=>{
      if(!auth)
      {
        this.connected = false;
      }
      else
      {
        this.connected = true;
        this.userId = auth.uid; 
        
      }
    })
  }


}
