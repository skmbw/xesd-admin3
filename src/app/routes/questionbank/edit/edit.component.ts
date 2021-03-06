import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NzMessageService } from 'ng-zorro-antd/message';
import { _HttpClient } from '@delon/theme';
import { SFSchema, SFUISchema } from '@delon/form';
import { com, Consts, JsUtils } from '@shared';
import { NzModalRef, UploadChangeParam } from 'ng-zorro-antd';
import { QuestionBankService } from '../../../shared/service/question-bank.service';
import QuestionBank = com.xueershangda.tianxun.classroom.model.QuestionBank;
import QuestionBankReply = com.xueershangda.tianxun.classroom.model.QuestionBankReply;
import Options = com.xueershangda.tianxun.classroom.model.Options;

@Component({
  selector: 'app-questionbank-edit',
  templateUrl: './edit.component.html',
})
export class QuestionbankEditComponent implements OnInit {
  title = '新增题库题目';
  id = this.route.snapshot.params.id;
  i: QuestionBank;
  schema: SFSchema = {
    properties: {
      title: { type: 'string', title: '标题' },
      type: {
        type: 'string', title: '题目类型', enum: [
          { label: '单项选择题', value: '1' },
          { label: '多项选择题', value: '2' },
          { label: '填空题', value: '3' },
          { label: '解答题', value: '4' },
        ],
      },
      remark: { type: 'string', title: '题目内容' },
      gradeId: {
        type: 'string', title: '年级', enum: [
          { label: '幼儿园', value: '幼儿园' },
          { label: '一年级', value: '一年级' },
          { label: '二年级', value: '二年级' },
          { label: '三年级', value: '三年级' },
          { label: '四年级', value: '四年级' },
          { label: '五年级', value: '五年级' },
          { label: '六年级', value: '六年级' },
          { label: '七年级', value: '七年级' },
          { label: '八年级', value: '八年级' },
          { label: '九年级', value: '九年级' }
        ]
      },
      subjectId: {
        type: 'string', title: '科目', enum: [
          { label: '语文', value: '语文' },
          { label: '数学', value: '数学' },
          { label: '英语', value: '英语' },
          { label: '科学', value: '科学' },
          { label: '物理', value: '物理' },
          { label: '化学', value: '化学' },
          { label: '生物', value: '生物' },
          { label: '历史', value: '历史' },
          { label: '地理', value: '地理' },
          { label: '政治', value: '政治' },
          { label: '美术', value: '美术' },
          { label: '音乐', value: '音乐' },
          { label: '体育', value: '体育' }
        ]
      },
      questionImages: { type: 'string', title: '图片' },
      rightAnswer: { type: 'string', title: '答案' },
      options: { type: 'string', title: '选项' },
      optionsA: { type: 'string', title: 'A' },
      optionsB: { type: 'string', title: 'B' },
      optionsC: { type: 'string', title: 'C' },
      optionsD: { type: 'string', title: 'D' },
    },
    required: ['title', 'type', 'gradeId', 'subjectId'],
  };
  ui: SFUISchema = {
    '*': {
      spanLabelFixed: 100,
      grid: { span: 12 },
    },
    $title: {
      widget: 'string',
    },
    $remark: {
      widget: 'textarea',
      grid: { span: 24 },
    },
    $type: {
      widget: 'select',
    },
    $gradeId: {
      widget: 'select',
    },
    $subjectId: {
      widget: 'select',
    },
    $rightAnswer: {
      widget: 'textarea',
      grid: { span: 24 },
    },
    $questionImages: {
      widget: 'upload',
      action: Consts.URL + 'questionBank/upload',
      name: 'questionImages',
      fileType: 'image/png,image/jpeg,image/gif,image/bmp',
      fileSize: 4096,
      resReName: 'summary', // 这个字段是返回{}中的一个字段的名字。也就是Reply中的一个字段名。这里没起作用（因为不存在）。返回整个Reply对象
      change: (uploadChangeParam: UploadChangeParam) => {
        if (uploadChangeParam.type === 'success') {
          const uploadFile = uploadChangeParam.file;
          const reply = uploadFile.response;
          if (reply.code !== 1) {
            // 提示信息
            this.msgSrv.error(reply.message);
          } else {
            const questionBank: QuestionBank = reply.data[0];
            // if (JsUtils.isBlank(this.i.id) || this.i.id === 'null') {
            //   this.i.id = questionBank.id;
            // }
            this.i.images = questionBank.summary; // 只将上传后的图片的路径返回回来即可
          }
        } else if (uploadChangeParam.type === 'error') {

        } else if (uploadChangeParam.type === 'start') {

        } else if (uploadChangeParam.type === 'progress') {

        }
      },
      listType: 'picture',
      // data: (upload: UploadFile) => {
      //   const id = JsUtils.isBlank(this.i.id) || this.i.id === 'null' ? '' : this.i.id;
      //   return { videoType: '1', id };
      // },
    },
    $options: {
      widget: 'text',
      grid: { span: 24 },
    },
    $optionsA: {
      widget: 'string',
      grid: { span: 24 },
    },
    $optionsB: {
      widget: 'string',
      grid: { span: 24 },
    },
    $optionsC: {
      widget: 'string',
      grid: { span: 24 },
    },
    $optionsD: {
      widget: 'string',
      grid: { span: 24 },
    },
  };

  constructor(
    private route: ActivatedRoute,
    public location: Location,
    private msgSrv: NzMessageService, private modal: NzModalRef,
    public http: _HttpClient, private questionBankService: QuestionBankService,
  ) {
  }

  ngOnInit(): void {
    if (JsUtils.isNotBlank(this.id)) {
      this.questionBankService.get(this.id).subscribe(result => {
        const uint8Array = new Uint8Array(result, 0, result.byteLength);
        const reply = QuestionBankReply.decode(uint8Array);
        if (reply.code === 1) {
          this.i = reply.data[0] as QuestionBank;
        } else {
          this.msgSrv.success(reply.message);
        }
      });
      this.title = '修改题目题目';
    } else {
      this.i = new QuestionBank();
    }
  }

  save(value: any) {
    // 如果是选择题就处理，这里的UI是固定的，不好更改，自己处理数据吧
    if (value.type === '1' || value.type === '2') {
      const oa = value.optionsA;
      const ob = value.optionsB;
      const oc = value.optionsC;
      const od = value.optionsD;

      const optionsA = new Options({name: 'A', content: oa});
      const optionsB = new Options({name: 'B', content: ob});
      const optionsC = new Options({name: 'C', content: oc});
      const optionsD = new Options({name: 'D', content: od});
      const optionsList: Options[] = [];
      optionsList[0] = optionsA;
      optionsList[1] = optionsB;
      optionsList[2] = optionsC;
      optionsList[3] = optionsD;

      value.optionsList = optionsList;
    }

    const questionBank = value as QuestionBank;
    this.questionBankService.add(questionBank).subscribe(result => {
      const uint8Array = new Uint8Array(result, 0, result.byteLength);
      const reply = QuestionBankReply.decode(uint8Array);
      if (reply.code === 1) {
        this.msgSrv.success('保存题目成功。');
        this.modal.close(true);
      } else {
        this.msgSrv.success(reply.message);
      }
    });
  }
}
