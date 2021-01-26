import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-questionbank-view',
  templateUrl: './view.component.html',
})
export class QuestionbankViewComponent implements OnInit {

  id = this.route.snapshot.params.id;
  i: any;

  constructor(
    private route: ActivatedRoute,
    public msgSrv: NzMessageService,
    public http: _HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get(`/user/${this.id}`).subscribe(res => this.i = res);
  }
}
