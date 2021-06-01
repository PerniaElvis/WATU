import { Query } from '@datorama/akita';
import { SessionState } from './session.state';
import { Injectable } from '@angular/core';
import { SessionStore } from './session.store';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SessionQuery extends Query<SessionState> {
  loggedUserId$ = this.select((state) => state.loggedUserId);
  isLoadUserDone$ = this.select((state) => state.isLoadUserDone);
  isLogged$ = this.select((state) => state.loggedUserId).pipe(
    filter((loggedUserId) => !!loggedUserId)
  );
  
  constructor(store: SessionStore) {
    super(store);
  }
}
