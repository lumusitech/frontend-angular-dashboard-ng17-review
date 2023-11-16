import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';

type Grade = 'A' | 'B' | 'F';

@Component({
  selector: 'dashboard-control-flow',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './control-flow.component.html',
  styles: ``,
})
export default class ControlFlowComponent {
  // with this, you can't change the value of the signal
  // public showContent = signal(false).asReadonly;
  public showContent = signal(false);

  public grade = signal<Grade>('B');

  public frameworks = signal([
    'Angular',
    'React',
    'Vue',
    'Svelte',
    'Solid',
    'Preact',
  ]);
  public frameworks2 = signal([]);

  public toggleContent() {
    this.showContent.update((v) => !v);
  }
}
