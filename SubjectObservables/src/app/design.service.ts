import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignService {
  exclusive = new Subject<boolean>();
  empName = new BehaviorSubject('Deeksha');
  videoEmit = new ReplaySubject<string>(4,7000);

  // mysuject$=new Subject();
  constructor() { }
}
