// deprecate

export class JsUtils {

  static toQueryString(obj: any): string {
    let rs = '';
    for (const p in obj) {
      // for in statement must filtered with an if statement
      if (obj.hasOwnProperty(p)) {
        const v = obj[p];
        if (v !== undefined && v !== null && (typeof v !== 'object')) {
          rs += p + '=' + v + '&';
        }
      }
    }
    return rs.substring(0, rs.length - 1);
  }

  /**
   * 这个使用json来转换，应该是OK的。
   *
   * @param obj
   * @returns {string}
   */
  static toKeyValue(obj: any): string {
    const s = JSON.stringify(obj);
    return s.substring(1, s.length - 1).replace(/:/g, '=')
      .replace(/,/g, '&')
      .replace(/"/g, '');
  }

  /**
   * 将无符号8位的 Uint8Array（ArrayBuffer）转为 有符号的Int8Array
   * @param {Uint8Array} body
   * @returns {ArrayBuffer}
   */
  static toInt8Array(body: Uint8Array): ArrayBuffer {
    const buffer = new ArrayBuffer(body.byteLength);
    const int8Array = new Int8Array(buffer);
    // java 的字节数组是有符号的8位的byte，要转一下
    body.forEach((num, i) => {
      int8Array[i] = num;
    });
    return buffer;
  }

  static isBlank(value: string): boolean {
    if (value === undefined || value === null || value.trim() === '') {
      return true;
    }
    return false;
  }

  static isNotBlank(value: string): boolean {
    return !this.isBlank(value);
  }

  static isAnyBlank(...values: string[]): boolean {
    for (const v of values) {
      if (this.isBlank(v)) {
        return true;
      }
    }
    return false;
  }

  /**
   * 获取一个对象的属性列
   * @param obj
   * @returns {string[]}
   */
  static getColumn(obj: any): string[] {
    const rs: string[] = [];
    for (const p in obj) {
      // for in statement must filtered with an if statement
      if (obj.hasOwnProperty(p)) {
        rs.push(p);
      }
    }
    return rs;
  }
}
