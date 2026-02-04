import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  demo1 = `<feedback-fish projectid="..." userid="...">
  <button type="button">You can create either a button</button>
</feedback-fish>`;
  demo2 = `<feedback-fish projectid="..." userid="...">or just a plain div</feedback-fish>`;
  demo3 = `<feedback-fish projectid="..." userid="..."><a href="#">even a link</a></feedback-fish>`;
  demo4 = `<feedback-fish projectid="..." userid="..."><img src="/assets/nein.png"></feedback-fish>`;
}
