import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import type { User } from '@interfaces/req.response';
import { TitleComponent } from '@shared/title/title.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { UsersService } from '@services/users.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'dashboard-user',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title [title]="titleLabel()" />

    @if (user()) {
    <section>
      <img [srcset]="user()!.avatar" [alt]="user()!.first_name" />

      <div>
        <h3>{{ user()!.first_name }} {{ user()!.last_name }}</h3>
        <p>{{ user()!.email }}</p>
      </div>
    </section>
    } @else {
    <p>Loading...</p>
    }
  `,
  styles: ``,
})
export default class UserComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly usersService = inject(UsersService);

  // public user = signal<User | undefined>(undefined);
  public user = toSignal(
    this.route.params.pipe(
      switchMap(({ id }) => this.usersService.getUserById(Number(id)))
    )
  );

  public titleLabel = computed(() => {
    if (this.user()) {
      return `User Info: ${this.user()!.first_name} ${this.user()!.last_name}`;
    }

    return `User Info`;
  });

  // constructor() {
  //   this.route.params.subscribe((params) => {
  //     console.log(params);
  //   });
  // }
}
