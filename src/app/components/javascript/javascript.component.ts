import { Component, OnInit } from '@angular/core';
import { EnrollService } from 'src/app/services/enroll.service';
@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent implements OnInit {

  title='Javascript'

  constructor(
    
  ) { }

  ngOnInit(): void {
  }

  OnEnroll(){
    const enrollService = new EnrollService();
    enrollService.OnEnrollClicked(this.title)
  }

}
