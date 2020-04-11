import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from 'src/app/products/product/models/product.model';

@Injectable()
export class CsvConverterService {
    constructor(private http: HttpClient) { }

    getCsvData(fileName: string): Observable<string> {
        return this.http.get(`../assets/data/${fileName}.csv`, { responseType: 'text' });

        // headers: { 'Accept': 'application/xml; application/json; text/plain; text/csv', 'Content-Type': 'text/csv; charset=iso-8859-2' }

        // return this.http.get(`../assets/data/${fileName}.csv`, { responseType: 'text', headers: { 'Accept': 'application/xml; application/json; text/plain; text/csv', 'Content-Type': 'application/x-www-form-urlencoded;charset=ISO-8859-1' } });
    }

    convertCsvData(csv: string): Product[]{
        const lines = csv.split('\n');

        const decode = this.decode(lines);
        console.log('decode', decode);

        // remove first row - headers
        lines.shift();
        // remove last row - empty data
        lines.pop();

        return lines.reduce((products, currentLine) => {
            const line = currentLine.split(';');

            // console.log('decodeURIComponent(escape(line[2]))', decodeURI(escape(line[2])));
            // console.log('unescape(encodeURIComponent(original_string))', unescape(encodeURIComponent(line[2])));
            
            return [
                ...products, {
                    image: line[0] ? `../assets/images/${line[0]}.jpg` : '',
                    name: line[1] ? line[1] : '',
                    producer: line[2] ? line[2] : '',
                    availableQuantity: line[3] ? +line[3] : null,
                    minimumOrderQuantity: line[4] ? +line[4] : null,
                    netPrice: line[5] ? +line[5].replace(',', '.') : null,
                    grossPrice: line[6] ? +line[6].replace(',', '.') : null,
                }
            ];
        }, []);
    }

    decode(text: string[]) {
        console.log('wchodzi tu', text);
        let out = '';

        for (let index = 0; index < text.length; index++) {
            const element = text[index].charCodeAt(index);
            console.log('ele', element);
            let part = text[index].charAt(index);
            console.log('part', part);


            if (element === 32) {
                console.log('32');
                part = '+';
            } else if ( element >= 48 && element <= 57  || element >= 65 && element <= 90 || element >= 97 && element <= 122) {
                // do not encode numbers and letters
                console.log('continue');

                continue;
            } else {
                console.log('swich');
                switch (element) {
                    case 260: {
                       part  = '%A1';
                       break;
                    }
                    case 728: {
                        part  = '%A2'; // ˘
                        break;
                    }
                    case 321: {
                        part  = '%A3'; // Ł
                        break;
                    }
                    case 317: {
                        part  = '%A5'; // Ľ
                        break;
                    }
                    case 346: {
                        part = '%A6';
                        break;
                    } // Ś
                    case 352: {
                        part = '%A9';
                        break;
                    } // Š
                    case 350: {
                        part = '%AA';
                        break;
                    } // Ş
                    case 356: {
                        part = '%AB';
                        break;
                    } // Ť
                    case 377: {
                        part = '%AC';
                        break;
                    } // Ź
                    case 381: {
                        part = '%AE';
                        break;
                    } // Ž
                    case 379: {
                        part = '%AF';
                        break;
                    } // Ż
                    case 261: {
                        part = '%B1';
                        break;
                    } // ą
                    case 731: {
                        part = '%B2';
                        break;
                    } // ˛
                    case 322: {
                        part = '%B3';
                        break;
                    } // ł
                    case 318: {
                        part = '%B5';
                        break;
                    } // ľ
                    case 347: {
                        part = '%B6';
                        break;
                    } // ś
                    case 711: {
                        part = '%B7';
                        break;
                    } // ˇ
                    case 353: {
                        part = '%B9';
                        break;
                    } // š
                    case 351: {
                        part = '%BA';
                        break;
                    } // ş
                    case 357: {
                        part = '%BB';
                        break;
                    } // ť
                    case 378: {
                        part = '%BC';
                        break;
                    } // ź
                    case 733: {
                        part = '%BD';
                        break;
                    } // ˝
                    case 382: {
                        part = '%BE';
                        break;
                    } // ž
                    case 380: {
                        part = '%BF';
                        break;
                    } // ż
                    case 340: {
                        part = '%C0';
                        break;
                    } // Ŕ
                    case 258: {
                        part = '%C3';
                        break;
                    } // Ă
                    case 313: {
                        part = '%C5';
                        break;
                    } // Ĺ
                    case 262: {
                        part = '%C6';
                        break;
                    } // Ć
                    case 268: {
                        part = '%C8';
                        break;
                    } // Č
                    case 280: {
                        part = '%CA';
                        break;
                    } // Ę
                    case 282: {
                        part = '%CC';
                        break;
                    } // Ě
                    case 270: {
                        part = '%CF';
                        break;
                    } // Ď
                    case 272: {
                        part = '%D0';
                        break;
                    } // Đ
                    case 323: {
                        part = '%D1';
                        break;
                    } // Ń
                    case 327: {
                        part = '%D2';
                        break;
                    } // Ň
                    case 336: {
                        part = '%D5';
                        break;
                    } // Ő
                    case 344: {
                        part = '%D8';
                        break;
                    } // Ř
                    case 366: {
                        part = '%D9';
                        break;
                    } // Ů
                    case 368: {
                        part = '%DB';
                        break;
                    } // Ű
                    case 354: {
                        part = '%DE';
                        break;
                    } // Ţ
                    case 341: {
                        part = '%E0';
                        break;
                    } // ŕ
                    case 259: {
                        part = '%E3';
                        break;
                    } // ă
                    case 314: {
                        part = '%E5';
                        break;
                    } // ĺ
                    case 263: {
                        part = '%E6';
                        break;
                    } // ć
                    case 269: {
                        part = '%E8';
                        break;
                    } // č
                    case 281: {
                        part = '%EA';
                        break;
                    } // ę
                    case 283: {
                        part = '%EC';
                        break;
                    } // ě
                    case 271: {
                        part = '%EF';
                        break;
                    } // ď
                    case 273: {
                        part = '%F0';
                        break;
                    } // đ
                    case 324: {
                        part = '%F1';
                        break;
                    } // ń
                    case 328: {
                        part = '%F2';
                        break;
                    } // ň
                    case 337: {
                        part = '%F5';
                        break;
                    } // ő
                    case 345: {
                        part = '%F8';
                        break;
                    } // ř
                    case 367: {
                        part = '%F9';
                        break;
                    } // ů
                    case 369: {
                        part = '%FB';
                        break;
                    } // ű
                    case 355: {
                        part = '%FE';
                        break;
                    } // ţ
                    case 729: {
                        part = '%FF';
                        break;
                    } // ˙
                    default: {
                        part = '%' + element.toString(16).toUpperCase();
                        console.log('element w default', element);
                        console.log('part w default', part);

                        break;
                    }
                }
            }
            console.log('out', out);
            out += part;
        }
        return out;
    }
}
