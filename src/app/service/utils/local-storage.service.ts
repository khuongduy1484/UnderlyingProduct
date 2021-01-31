import { Injectable } from '@angular/core';

export interface ILocalStorageData {
  authorization: string;

}

@Injectable()
export class LocalStorageService {

  constructor() { }

  get accessToken() {
    return this.get('accessToken');
  }

  get userData() {
    return this.get('userData');
  }
  set(key: string, value: any) {
    const typeOfValue = typeof value;
    if (['string', 'number'].includes(typeOfValue)) {
      localStorage.setItem(key, value);
    } else if (typeOfValue === 'object') {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  get(key: string) {
    const value = localStorage.getItem(key);
    if (!value) {
      return null;
    }
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      return localStorage.getItem(key);
    }
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }
}
