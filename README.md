# feedback-fish-angular

[Feedback Fish](https://feedback.fish) widget for Angular apps.

## Usage
**Step 1:**
```
npm install feedback-fish-angular
```

**Step 1:**
```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FeedbackFishAngularModule } from 'feedback-fish-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FeedbackFishModule, // <!---- Import FeedbackFishModule to your app.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

**Step2:**
```html
<feedback-fish projectid="..." userid="..."></feedback-fish>
```

## License

Licensed under the MIT license.