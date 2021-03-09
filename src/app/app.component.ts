import { Component } from '@angular/core';
import { DataTransferService } from './data-transfer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homework-eJournal';

  constructor(/* private ds : DataTransferService */){

  }

/*   checkData(){
    this.ds.loadDataFromJSON();
  } */
}
