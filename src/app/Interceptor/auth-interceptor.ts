import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const Token='ABC'
  const requestWithToken=req.clone({
    setHeaders:{
        Authorization: `Bearer ${Token}`
    }
});
  return next(requestWithToken);
};
