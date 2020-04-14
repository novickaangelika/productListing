// import { TestBed } from '@angular/core/testing';
// import { HttpClient } from '@angular/common/http';
// import { TransferState } from '@angular/platform-browser';
// import { LanguageService } from './language.service';
// import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

// describe('LanguageService', () => {
//     // let httpClient: jasmine.SpyObj<HttpClient>;
//     let httpClient: HttpTestingController;
//     let service: LanguageService;

//     beforeEach(() => {
//         // httpClient = jasmine.createSpyObj('HttpClient', ['get']);

//         TestBed.configureTestingModule({
//             providers: [
//                 TransferState,
//                 LanguageService,
//                 { provide: HttpClient, useValue: httpClient }
//             ],
//             imports: [
//                 HttpClientTestingModule
//             ],
//         });

//         httpClient = TestBed.inject(HttpTestingController);
//         service = TestBed.inject(LanguageService);
//     });


//     // it('get languages codes', () => {
//     //     const languageService = TestBed.inject(LanguageService);

//     //     languageService.getLanguagesCodes()
//     //         .subscribe((data) => {
//     //             console.log('data', data);
//     //             expect(data).toEqual([
//     //                 { code: 'pl'},
//     //                 { code: 'en' }
//     //             ]);
//     //         });


//     //     // const getOrderRequestTest = httpClient.expectOne('../assets/data/language.json');
//     //     // expect(getOrderRequestTest.request.method).toEqual(`GET`);

//     //     // getOrderRequestTest.flush([
//     //     //     { code: 'pl'},
//     //     //     { code: 'en' }
//     //     // ]);
//     // });

//     // it('get all languages codes', async(inject( [LanguageService], ( languageService ) => {
//     //     languageService.getLanguagesCodes()
//     //         .subscribe(result => expect(result.length).toEqual(2));
//     // })));
// });
