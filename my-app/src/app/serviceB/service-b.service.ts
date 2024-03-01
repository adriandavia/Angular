import { Inject, Injectable} from '@angular/core';

import { CService } from '../serviceC/service-c.service'
import { URL_SERVER } from '../app.config';

@Injectable({

  providedIn: 'root'
})
export class BService {

  constructor(private serviceC:CService, @Inject(URL_SERVER) servidor:String) {
    console.log("Servicio B", servidor);
   }
}
