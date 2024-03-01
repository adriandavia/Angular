import { Component, signal, effect, Injector, OnInit, Inject, PLATFORM_ID} from '@angular/core';

import { isPlatformBrowser, formatDate} from '@angular/common';

import LocaleEs from '@angular/common/locales/es';
import { registerLocaleData} from '@angular/common';
registerLocaleData(LocaleEs);

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss'
})
/* LOCALE */
//https://angular.io/guide/i18n-common-add-package
//https://stackoverflow.com/questions/46419026/missing-locale-data-for-the-locale-xxx-with-angular

/* TIMER */
//https://stackoverflow.com/questions/47686584/angular-prerendering-times-out-with-setinterval
//https://stackoverflow.com/questions/43812124/angular-isplatformbrowser-checking-against-platform-id-doesnt-prevent-server-si
//https://www.telerik.com/blogs/angular-basics-date-pipe-formats-101-examples

export class TimerComponent implements OnInit{
  isBrowser: boolean;
  date = signal(formatDate(new Date() as Date, "dd-MM-YYYY HH:mm:ss", "es-ES", "GMT+1"));
    constructor(private injector : Injector, @Inject(PLATFORM_ID) platformId: Object){
      this.isBrowser = isPlatformBrowser(platformId);
    }
    
    ngOnInit(): void {
        effect((onCleanup)=>{
          if (this.isBrowser) {
            const timer = setInterval(() => {
                this.date.update(()=> formatDate(new Date() as Date, "dd/MM/YY HH:mm:ss", "es-ES", "GMT+1"))
              },
              1000
            );
            onCleanup(()=>{
              clearTimeout(timer);
            })
          }
        }, {injector: this.injector});
    }
}
