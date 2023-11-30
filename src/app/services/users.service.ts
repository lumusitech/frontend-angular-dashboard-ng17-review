import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import type {
  User,
  UserResponse,
  UsersResponse,
} from '@interfaces/req.response';
import { Observable, delay, map } from 'rxjs';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly http = inject(HttpClient);

  // #name --> private property in ECMAScript 6 without typescript, is Better practice
  #state = signal<State>({
    loading: true,
    users: [],
  });

  public users = computed(() => this.#state().users);
  public loading = computed(() => this.#state().loading);

  constructor() {
    console.log('⬇ loading data...');

    this.http
      .get<UsersResponse>('https://reqres.in/api/users')
      .pipe(delay(1500))
      .subscribe((resp) => {
        this.#state.set({
          loading: false,
          users: resp.data,
        });
      });
  }

  getUserById(id: number): Observable<User> {
    return this.http
      .get<UserResponse>(`https://reqres.in/api/users/${id}`)
      .pipe(
        delay(1500),
        map((resp) => resp.data)
      );
  }
}
