import { HttpHeaders } from '@angular/common/http';
import { environment, IP } from '@env/environment';

export class Consts {
  static IP = IP;
  static URL = environment.URL;
  static IMAGE_HOST = environment.IMAGE_HOST;
  static IMAGE_URL = environment.IMAGE_URL;
  static JSON = {
    headers: new HttpHeaders({'Content-Type': 'application/json;charset=utf-8'})
  };

  static FORM_JSON = {
    headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}),
    responseType: 'json'
  };
}
