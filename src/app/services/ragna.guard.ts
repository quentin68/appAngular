import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class RagnaGuard implements CanActivate {

  constructor(private us: UsersService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return true ;

    if (this.us.currentUser !== undefined) {
      return true;
    } else {
      alert('Please login first');
      this.router.navigate(['/home']);
    }
  }
}
