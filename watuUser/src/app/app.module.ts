import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';
import { akitaDevtools } from '@datorama/akita';
akitaDevtools();

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        AppCommonModule.forRoot(),
        NavigationModule.forRoot(),
        environment.production ? [] : AkitaNgDevtools.forRoot(),
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
