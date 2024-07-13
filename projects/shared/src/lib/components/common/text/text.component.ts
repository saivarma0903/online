import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent {
@Input() text='';
@Input() class=''
}
