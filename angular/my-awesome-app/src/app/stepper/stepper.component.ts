import {
  Component,
  model,
  output,
} from '@angular/core'

@Component({
  selector: 'app-stepper',
  template: `
    <div>
      <button data-cy="decrement" (click)="decrement()">-</button>
      <span data-cy="counter">{{ count() }}</span>
      <button data-cy="increment" (click)="increment()">+</button>
    </div>
  `,
})
export class StepperComponent {
  count = model<number>(0)  
  change = output<number>()
  
  increment(): void {
    this.count.set(this.count() + 1);
    this.change.emit(this.count());
  }

  decrement(): void {
    this.count.set(this.count() - 1);
    this.change.emit(this.count());
  }
}
