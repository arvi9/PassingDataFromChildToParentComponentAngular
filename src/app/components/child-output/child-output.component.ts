import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-child-output',
  templateUrl: './child-output.component.html',
  styleUrls: ['./child-output.component.css']
})
export class ChildOutputComponent implements OnInit {

@Input() parentData;

  @Output() demo =  new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.demo.emit("This is the child componet");
  }

}
