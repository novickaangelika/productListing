import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from 'src/app/products/product/models/product.model';

@Injectable()
export class CsvConverterService {
    constructor(private http: HttpClient) {}

    getCsvData(fileName: string): Observable<string> {
        return this.http.get(`../assets/data/${fileName}.csv`, { responseType: 'text' });
    }

    convertCsvData(csv: string): Product[]{
        const lines = csv.split('\n');

        // remove first row - headers
        lines.shift();
        // remove last row - empty data
        lines.pop();

        return lines.reduce((products, currentLine) => {
            const line = currentLine.split(';');

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
}
