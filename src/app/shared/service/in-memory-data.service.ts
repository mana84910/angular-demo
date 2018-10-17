import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Person } from '../interface/person';

export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {

    // 角色
    const persons = [
      {id: 1, name: 'Alice', age: 25, jobTitle: 'UI/UX設計師'},
      {id: 2, name: 'Bob', age: 32, jobTitle: '工程師 Engineer'},
      {id: 3, name: 'Chen', age: 28, jobTitle: 'PM'},
      {id: 4, name: 'Danny', age: 30, jobTitle: '工程師 Engineer'},
      {id: 5, name: 'Frank', age: 33, jobTitle: '工程師 Engineer'},
      {id: 6, name: 'Jeff', age: 38, jobTitle: '經理 Manger'},
      {id: 7, name: 'Jasmine', age: 23, jobTitle: '專案助理 Project Assistant'},
      {id: 8, name: 'Keven', age: 30, jobTitle: '系統分析師 SA'},
      {id: 9, name: 'Larry', age: 35, jobTitle: '工程師 Engineer'},
      {id: 10, name: 'Nelson', age: 35, jobTitle: 'PM'}
    ];

    // 年齡
    const age = [];
    for (let i = 0; i < 101; i++) {
      age.push(i);
    }

    // 職稱
    const jobTitle = [
      '專案助理 Project Assistant',
      'UI/UX設計師',
      '工程師 Engineer',
      'PM',
      '系統分析師 SA',
      '經理 Manger'
    ];

    return {persons, age, jobTitle};
  }

  // Overrides the genId method to ensure that a personnal always has an id.
  // If the personnal array is empty,
  // the method below returns the initial number (11).
  // if the personnal array is not empty, the method below returns the highest
  // personnal id + 1.
  genId(persons: Person[]): number {
    return persons.length > 0 ? Math.max(...persons.map(p => p.id)) + 1 : 11;
  }

}
