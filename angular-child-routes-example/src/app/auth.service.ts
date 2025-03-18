import { Injectable } from '@angular/core';

@Injectable({
providedIn: 'root'
})
export class AuthService {
    isAdmin(): boolean {
        console.log('AuthService.isAdmin() called - returning TRUE for demo');
        return true; // TEMPORARILY RETURN TRUE FOR TESTING ADMIN GUARD ALLOWING ACCESS
        }

