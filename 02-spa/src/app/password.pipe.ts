import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, estado: boolean): any {
    if (value === undefined) {
      return value;
    }
    console.log(value);
    console.log(estado);
    if(estado){
      return '*'.repeat(value.length);
    }else{
      return value;
    }
    
  }

}
