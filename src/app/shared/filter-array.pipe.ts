import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'filterArray'
})

export class FilterArray implements PipeTransform {
    transform(value: string, character: string): string {
        return " ";
    }
}