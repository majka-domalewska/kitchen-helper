import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { auth } from '../../firebase';
import {
  GoogleAuthProvider,
  User,
  onAuthStateChanged,
  signInWithPopup,
  signOut as firebaseSignOut,
} from 'firebase/auth';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private userSubject = new BehaviorSubject<User | null>(null);
  user$: Observable<User | null> = this.userSubject.asObservable();

  constructor() {
    onAuthStateChanged(auth, (user) => {
      this.userSubject.next(user);
    });
  }

  googleSignIn() {
    const provider = new GoogleAuthProvider();
    console.log('Starting Google sign-in');
    return signInWithPopup(auth, provider);
  }

  signOut() {
    return firebaseSignOut(auth);
  }
}
