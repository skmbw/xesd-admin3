import { HttpHeaders } from '@angular/common/http';
import { IP } from '@env/environment';

export class Consts {
  static IP = IP;
  static URL = `http://${Consts.IP}:8775/`;
  static IMAGE_HOST = `http://${Consts.IP}:8300/`;
  static IMAGE_URL = `${Consts.IP}:8300/`;
  static JSON = {
    headers: new HttpHeaders({'Content-Type': 'application/json;charset=utf-8'})
  };

  static FORM_JSON = {
    headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}),
    responseType: 'json'
  };
}
