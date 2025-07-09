import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterStudent',
  pure : true
})
export class CustomPipePipe implements PipeTransform {

  transform(students: any[], search: string): any {
    console.log('object value :', students);
    console.log('search value :', search);
    if(!students || !search) {
      return [];
    }
    
    return students.filter(student =>{
      student.name.toLowerCase().includes(search)
    });
  }

}
