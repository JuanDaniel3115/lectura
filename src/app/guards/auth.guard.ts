import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isAuthenticated = localStorage.getItem('isAuthenticated'); // Simulación de sesión

  if (!isAuthenticated) {
    router.navigate(['/Login']);
    return false;
  }

  return true;

};
