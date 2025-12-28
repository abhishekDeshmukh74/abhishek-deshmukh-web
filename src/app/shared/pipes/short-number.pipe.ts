import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'shortNumber',
    pure: true,
    standalone: false
})

export class ShortNumberPipe implements PipeTransform {

    transform(value: any, args?: any): any {

        if (!value) return 0;

        if (value === 0) return 0;
        let abs = Math.abs(value);
        const rounder = Math.pow(10, 1);
        const isNegative = value < 0;
        let key = '';
        const powers = [
            {
                key: 'Q',
                value: Math.pow(10, 15)
            },
            {
                key: 'T',
                value: Math.pow(10, 12)
            },
            {
                key: 'B',
                value: Math.pow(10, 9)
            },
            {
                key: 'M',
                value: Math.pow(10, 6)
            },
            {
                key: 'k',
                value: 1000
            }];


        powers.forEach(element => {
            let reduced = abs / element.value;
            reduced = Math.round(reduced * rounder) / rounder;
            if (reduced >= 1) {
                abs = reduced;
                key = element.key;
                return;
            }
        });

        return (isNegative ? '-' : '') + abs + key;
    }
}
