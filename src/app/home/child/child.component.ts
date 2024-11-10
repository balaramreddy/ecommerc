import { Component, ContentChild, contentChild, ContentChildren, ElementRef, QueryList } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @ContentChildren('p') data!:QueryList<ElementRef>

  ngAfterContentInit(){
    this.data.forEach((paragraph, index) => {
      console.log(`Paragraph ${index + 1}:`, paragraph.nativeElement.textContent);
      paragraph.nativeElement.style.color = 'green'; 
    });
  }

}
