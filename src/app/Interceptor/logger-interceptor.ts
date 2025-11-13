import { HttpInterceptorFn } from '@angular/common/http';

export const loggerInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('logger Interceptor: ',req.url,req.method,new Date().toLocaleDateString())
  return next(req);
};
