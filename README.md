# feedback-fish-angular

[Feedback Fish](https://feedback.fish) widget for Angular apps.

## Demo
[https://feedback-fish-angular.vercel.app/](https://feedback-fish-angular.vercel.app/)

## Usage
**Step 1:**
```
npm install feedback-fish-angular
```

**Step 2:**
```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FeedbackFishModule } from 'feedback-fish-angular';

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

**Step 3:**
```html
<feedback-fish projectid="..." userid="...">
  <button type="button">Give Feedback</button> <!-- Add any content here -->
</feedback-fish>
```

**Done** :tada:

## License

Licensed under the MIT license.