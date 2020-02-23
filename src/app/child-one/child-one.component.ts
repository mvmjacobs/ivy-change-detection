import { Component, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildOneComponent {

  counter = { value: 0 };

  markForCheck = false;
  isTimerEnabled = false;
  intervalTimer: any;

  constructor(
    private cdRef: ChangeDetectorRef
  ) { }

  triggerChanges(): void {
    this.cdRef.detectChanges();
  }

  incrementValue(): void {
    this.counter.value++;
  }

  toggleTimer(): void {
    this.isTimerEnabled = !this.isTimerEnabled;

    if (!this.isTimerEnabled)
      clearInterval(this.intervalTimer);
    else {
      this.intervalTimer = setInterval(() => {
        this.incrementValue();
        if (this.markForCheck)
          this.cdRef.markForCheck();
      }, 1000);
    }
  }
}
