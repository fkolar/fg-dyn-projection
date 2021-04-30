import {Compiler, Component, ComponentFactoryResolver, Injector, Renderer2, ViewContainerRef} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-wrapper',
  template: `
    <ng-content></ng-content>

  `
})
export class WrapperComponent  {
  formTypesGroupRegister: FormGroup;



  constructor(private viewContainer: ViewContainerRef, private crf: ComponentFactoryResolver,
              private render: Renderer2, private compiler: Compiler, private injector: Injector) {
  }



}
