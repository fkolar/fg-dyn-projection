import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ContentDensityService, RtlService} from '@fundamental-ngx/core';
import {FdpFormGroupModule, PlatformInputModule} from '@fundamental-ngx/platform';
import {RendererComponent} from './renderer/renderer.component';
import {RouterModule, Routes} from '@angular/router';
import {FormComponent} from './form/form.component';
import {WrapperComponent} from './some-wrapper/wrapper.component';


const routes: Routes = [{
  component: FormComponent, path: ''
}];

@NgModule({
  declarations: [
    AppComponent,
    RendererComponent,
    FormComponent,
    WrapperComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FdpFormGroupModule,
    PlatformInputModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [RtlService, ContentDensityService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
