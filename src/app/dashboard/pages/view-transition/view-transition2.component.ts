import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  selector: 'dashboard-view-transition',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title title="View Transition 2" />

    <section class="flex justify-end">
      <img
        srcset="https://picsum.photos/id/237/200/300"
        alt="picsum"
        width="200"
        height="300"
        style="view-transition-name: hero1;"
      />

      <!-- with this
      style="view-transition-name: hero1;"
      We tell to browser that apply transition to this element with this id hero1.
      This element must has equal id in both screens
      In this case, the 2 sreens are wiew-transition1.component.html and wiew-transition2.component.html
        -->

      <div
        class="fixed bottom-16 right-10 bg-blue-800 w-32 h-32 rounded"
        style="view-transition-name: hero2"
      ></div>
    </section>
  `,
})
export default class ViewTransitionComponent {}
