/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class AuthService {
    verifyIdToken(token: string) {
        try {
            const verifyIdToken = admin.auth().verifyIdToken(token);
            return verifyIdToken;
        } catch {
            return null;
        }
  }
}
