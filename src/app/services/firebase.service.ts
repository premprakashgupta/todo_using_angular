import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export class FirebaseService {
  signInWithEmailAndPassword(email: string, password: string): Promise<any> {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  }
}
