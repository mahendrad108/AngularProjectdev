import { HttpInterceptorFn } from '@angular/common/http';

export const loggerInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(`the requested url is ${req.url} is triggered for the method ${req.method} at ${new Date().toLocaleDateString()} `);
  return next(req);
};
