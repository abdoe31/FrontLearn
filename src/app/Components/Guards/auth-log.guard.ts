import { Injectable, inject } from '@angular/core';
import {  CanActivateFn, Router } from '@angular/router';
import { AuthenticationServiceService } from 'src/app/Services/UserAuthentication/authentication-service.service';


export const AuthLogGuard: CanActivateFn = (route, state) => {
  const authenticationService = inject(AuthenticationServiceService);
  const router = inject(Router);

  if (authenticationService.isLoggedIn$.value) {
    console.log(authenticationService.isLoggedIn$.value);
    console.log(authenticationService.isLoggedIn$);
    if(authenticationService.UserData.role=='Student')
    {
      return true;

    }
    else{
      router.navigateByUrl('');
      return false

    }
  }

  console.log(authenticationService.isLoggedIn$.value)
  router.navigateByUrl('/Login');
  return false;
};
