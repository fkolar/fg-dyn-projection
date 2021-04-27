import {
  Compiler,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  Injector,
  Input,
  OnInit,
  Renderer2,
  ViewContainerRef
} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {InputComponent, PlatformInputModule} from '@fundamental-ngx/platform';

@Component({
  selector: 'app-render',
  template: `
    <ng-content></ng-content>
    <i>Control rendered dynamically </i>
  `
})
export class RendererComponent implements OnInit {
  formTypesGroupRegister: FormGroup;

  @Input()
  parent: any;


  constructor(private viewContainer: ViewContainerRef, private crf: ComponentFactoryResolver,
              private render: Renderer2, private compiler: Compiler, private injector: Injector) {
  }


  ngOnInit(): void {
    const module = this.compiler.compileModuleAndAllComponentsSync(PlatformInputModule);
    const moduleNgModuleRef = module.ngModuleFactory.create(this.viewContainer.injector);
    console.log(module.componentFactories[0]);
    const cmdFactory = module.componentFactories[0];
    const component: ComponentRef<InputComponent> = this.viewContainer.createComponent(cmdFactory, null,
      null, [[]], moduleNgModuleRef);
    console.log(component);
    component.instance.value = 'dddd';
    component.instance.name = 'input1';
    component.instance.id = 'input1';

    component['formField'] = parent;
  }
}
