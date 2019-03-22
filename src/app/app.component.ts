import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.scss'],
    template: `
        <div class="content">
            <div class="left">
                <router-outlet></router-outlet>
            </div>
            <div class="right">
                <app-menu></app-menu>
            </div>
        </div>
    `
})
export class AppComponent {
    title = 'finance';
}
