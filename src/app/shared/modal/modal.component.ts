import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { InvokeFunctionExpr } from '@angular/compiler';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() type: string;
  @Input() message: string;

  constructor(private bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

  
}
