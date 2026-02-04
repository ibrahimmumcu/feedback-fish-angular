import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'feedback-fish',
  standalone: true,
  template: `
    <span data-feedback-fish [attr.data-feedback-fish-userid]=userid>
      <ng-content></ng-content>
    </span>
  `,
})
export class FeedbackFishComponent implements OnInit {

  @Input() userid: string;
  @Input() projectid: string;

  ngOnInit(): void {
    const script = document.createElement('script');
    script.src = 'https://feedback.fish/ff.js?pid='+this.projectid;
    script.type = 'text/javascript';
    script.async = true;
    document.getElementsByTagName('head')[0].appendChild(script);  
  }
  
}
