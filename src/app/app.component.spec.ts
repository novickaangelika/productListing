import { TestBed, async, ComponentFixture, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TranslateService, TranslateModule, TranslateLoader, TranslateFakeLoader } from '@ngx-translate/core';
import { LanguageChangerService } from './header/language-change/services/language-changer.service';
import { StorageService } from './services/storage.service';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader
          }
        })
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        TranslateService,
        LanguageChangerService,
        StorageService
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fakeAsync(() => {
      expect(app).toBeTruthy();
    });
  });

});
