import mathData from '../../assets/mathData.json';

export interface Lesson {
  id: string;
  dateLesson: string;
  theme: string;
  homework: string;
  note: string;
}

export class LessonsDataSource {
// класс предназначен для обработки массива уроков (загрузка, добавление, удаление, сортировка и т.д.)
  lessonsData: Lesson[] = mathData;

  constructor(){
    
  }

/*   loadData(path: string){
      const tmpData: Lesson[] = require(path);
      this.lessonsData=tmpData;
  }

  getSortedData(data: Lesson[]){
    return data.sort();
  } */

}
