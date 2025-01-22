import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss'
})
export class AlertComponent {
  
  static readonly SUCCESS:string = 'success';
  static readonly WARNING:string = 'warning';
  static readonly ERROR:string = 'error';

  @Input() public message:string = '';
  //@Input() public type:SUCCESS | 'warning' | 'error'  = 'success';
  @Input() public type: typeof AlertComponent.SUCCESS | typeof AlertComponent.WARNING | typeof AlertComponent.ERROR = AlertComponent.SUCCESS;
}
