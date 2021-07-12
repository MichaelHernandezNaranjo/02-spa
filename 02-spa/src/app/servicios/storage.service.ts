import * as CryptoJS from 'crypto-js';
 
import { Injectable } from '@angular/core';
 
const SECRET_KEY = 'Ber1g0';
@Injectable({
  providedIn: 'root'
})
export class StorageService {
 
  constructor() { }

    hash(key) {
      key = CryptoJS.SHA256(key, SECRET_KEY);
 
      return key.toString();
    }
    encrypt(data) {
      data = CryptoJS.AES.encrypt(data, SECRET_KEY);
 
      data = data.toString();
 
      return data;
    }
    decrypt(data) {
      data = CryptoJS.AES.decrypt(data, SECRET_KEY);
 
      data = data.toString(CryptoJS.enc.Utf8);
 
      return data;
    }
  
 
}