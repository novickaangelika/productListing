import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'productListing';

  constructor(
    private translate: TranslateService,
    private http: HttpClient
  ) {
      translate.addLangs(['en', 'pl']);
      translate.setDefaultLang('en');
  }

  ngOnInit() {
    const qwe = this.http.get('../assets/data/dane_en.csv', { responseType: 'text' });

    qwe.pipe(
      map(data => this.csvJSON(data)),
      map(productListing => {
        return productListing;
        // productListing.products.map({image})
      })
    ).subscribe(d =>
      console.log('qwe', d)
    );
  }

  csvJSON(csv: string){
    const lines = csv.split('\n');
    const products = [];
    const headers = lines.shift().split(';');

    lines.forEach((asd, i) => {
      console.log('asd', asd);
      const obj = {};
      const currentline = asd.split(';');

      console.log('curr', currentline);

      headers.forEach((zxc, j) => {
        obj[zxc] = currentline[j];
      });

	    products.push(obj);
    });

    return { headers, products };
  }
}
