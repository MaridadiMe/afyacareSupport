import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { ApiConstants } from '../constants/api-constants';

@Injectable({
  providedIn: 'root'
})
export class ManagementService {

  constructor(private http: HttpClient) { }

  /**
   * getPatientPatientByMRN
   * 
   */
  public getPatientPatientByMRN(MRN: string): Observable<any[]> {
    return this.http.get<any[]>(ApiConstants.management_url + '/patient/getInformation',{params:{'patientMRN': MRN}, withCredentials:true})
    
  }

  /**
   * manageVisit
   */
  public manageVisit(payload: any): Observable<any> {
    return this.http.post(ApiConstants.management_url + '/patient/manageVisit', payload, {withCredentials: true});
  }

  /**
   * getPaymentInfoByVisitUuid
   */
  public getPaymentInfoByVisitUuid(visitUuid: string): Observable<any[]> {
    return this.http.get<any[]>(ApiConstants.management_url + '/patient/getPaymentInformation',{params:{'visitUuid': visitUuid}, withCredentials:true})
  }
}
