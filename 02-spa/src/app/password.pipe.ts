import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, estado?: boolean): any {
    if (value === undefined) {
      return value;
    }
    console.log(value);
    console.log(estado);
    // Replace with the specified character
    // if (replaceChar) {
    //   return replaceChar.repeat(value.length);
    // }
    // Replace value with asterisks
    if(estado){
      return '*'.repeat(value.length);
    }else{
      return value;
    }
    
  }

}
