import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'shared-heavy-loaders-slow',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section [ngClass]="['w-full h-[600px]', cssClass]">
      Heavy loader slow
    </section>
  `,
})
export class HeavyLoadersSlowComponent {
  @Input({ required: true }) cssClass!: string;

  constructor() {
    // bloquing for 3 seconds all app. This is just for demo purpose
    // In real apps this should be a Promise for example for not blocking
    const start = Date.now();
    while (Date.now() - start < 3000) {}

    console.log('slow loader ready!');
  }
}
