import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorhandlerService {

  constructor(private logger: LoggingService) { }
  handleError(error: any) {
    this.logger.error(error);
   alert('An unexpected error occurred. Please try again later.');
    
   
  }
}
