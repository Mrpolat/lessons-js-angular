import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {  
  constructor() { }
  
  OnEnrollClicked(title:string){
    alert('Enrolled'+ title + ' Course')
  }
}
