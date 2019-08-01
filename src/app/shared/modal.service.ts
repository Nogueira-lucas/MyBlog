import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef} from 'ngx-bootstrap/modal';
import { ModalComponent } from './modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  bsModalRef: BsModalRef;
  
  constructor(private modalService: BsModalService) {}
 
  handleError(type:string, message:string){
    this.bsModalRef = this.modalService.show(ModalComponent);
    this.bsModalRef.content.type = type;
    this.bsModalRef.content.message = message;
  }
}
