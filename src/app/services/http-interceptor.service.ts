import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpLoaderService } from './http-loader.service';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  constructor(public httpLoaderService: HttpLoaderService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    this.httpLoaderService.isLoading.next(true);
    return next.handle(req).pipe(
      finalize(()=>{
        this.httpLoaderService.isLoading.next(false);
      })
    );
  }
}
