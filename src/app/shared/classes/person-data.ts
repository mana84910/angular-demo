// 此為DB回傳的角色清單資料模型
export class PersonData {

  // id
  id = 0;

  // 姓名
  name = '';

  // 年齡
  age = 0;

  // 職稱
  jobTitle = '';

  constructor(data: any) {
    if (!data) {
      return;
    }

    this.id = data.id;
    this.name = data.name;
    this.age = data.age;
    this.jobTitle = data.jobTitle;

  }

  get idData(): number {
    return this.id;
  }

  get nameData(): string {
    return this.name;
  }

  get ageData(): number {
    return this.age;
  }

  get jobData(): string {
    return this.jobTitle;
  }

}
