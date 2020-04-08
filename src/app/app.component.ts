import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'productListing';

  constructor(
    private http: HttpClient) { }

  ngOnInit() {
    const qwe = this.http.get('../assets/data/dane_pl.csv', { responseType: 'text' });
    qwe.subscribe(d => {
      console.log('qwe', this.csvJSON(d));
    });
  }

  csvJSON(csv: string){

    const lines = csv.split('\n');
    const result = [];
    const headers = lines.shift().split(';');

    lines.forEach((asd, i) => {
      console.log('asd', asd);
      const obj = {};
      const currentline = asd.split(';');

      console.log('curr', currentline);

      headers.forEach((zxc, j) => {
        obj[zxc] = currentline[j];
      });

	    result.push(obj);
    });

    return result;
  }
}
