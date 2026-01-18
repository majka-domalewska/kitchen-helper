import { TestBed } from '@angular/core/testing';
import { vi } from 'vitest';

// Hoisted mocks
const mocks = vi.hoisted(() => ({
  getAuth: vi.fn(() => ({} as any)),         // <── add this
  onAuthStateChanged: vi.fn(() => () => {}),
  signInWithPopup: vi.fn(() => Promise.resolve({} as any)),
  GoogleAuthProvider: vi.fn(),
}));

// Module mock
vi.mock('firebase/auth', () => ({
  getAuth: mocks.getAuth,                    // <── and export it
  onAuthStateChanged: mocks.onAuthStateChanged,
  signInWithPopup: mocks.signInWithPopup,
  GoogleAuthProvider: mocks.GoogleAuthProvider,
}));

import * as firebaseAuth from 'firebase/auth';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService],
    });
    service = TestBed.inject(AuthService);
  });

  it('should call signInWithPopup when googleSignIn is called', async () => {
    await service.googleSignIn();

    expect(mocks.signInWithPopup).toHaveBeenCalled();
  });
});
