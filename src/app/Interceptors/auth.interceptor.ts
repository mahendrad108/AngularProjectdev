import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
 const mytoken = `ABCDEF123456`;
 //const mytoken = sessionStorage.getItem('mytoken');

  const requestwithtoken = req.clone(
    {
    setHeaders : 
    {
      Authorization: 'Bearer {mytoken}'
    }
  });
  return next(requestwithtoken);
  
};
