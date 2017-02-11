import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, Event, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import { MakeService } from './make.service';
import { Make } from './make';

declare var loader: any;

@Component({
  templateUrl: './makes-list.template.html'
})

export class MakesListComponent {
    makes: Make[];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private service: MakeService
    ) {
        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationEnd) {
                loader.start();

                window.scrollTo(0, 0);

                this.getMakes();
            }
        });
    }

    onSelect(make: Make) {
        this.router.navigate(['/make', make.Id]);
    }

    private getMakes() {
        this.service
            .getMakes()
            .then(response => {
                this.makes = response;
                loader.done();
            })
            .catch(error => {
                //this.error = error;
                loader.done();
            }); // TODO: Display error message
    }
}