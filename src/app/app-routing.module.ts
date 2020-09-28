import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestListComponent } from './test-list/test-list.component';

const routes: Routes = [
  {
    path: '',
    component: TestListComponent
  },
  {
    path: 'button',
    loadChildren: () => import('./test-cases/button-test/button-test.module').then(x => x.ButtonTestModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./test-cases/card-test/card-test.module').then(x => x.CardTestModule)
  },
  {
    path: 'button-group',
    loadChildren: () => import('./test-cases/button-group-test/button-group-test.module').then(x => x.ButtonGroupTestModule)
  },
  {
    path: 'spinner',
    loadChildren: () => import('./test-cases/spinner-test/spinner-test.module').then(x => x.SpinnerTestModule)
  },
  {
    path: 'layout',
    loadChildren: () => import('./test-cases/layout-test/layout-test.module').then(x => x.LayoutTestModule)
  },
  {
    path: 'popup',
    loadChildren: () => import('./test-cases/popup-test/popup-test.module').then(x => x.PopupTestModule)
  },
  {
    path: 'checkbox',
    loadChildren: () => import('./test-cases/checkbox-test/checkbox-test.module').then(x => x.CheckboxTestModule)
  },
  {
    path: 'checkbox',
    loadChildren: () => import('./test-cases/checkbox-test/checkbox-test.module').then(x => x.CheckboxTestModule)
  },
  {
    path: 'radio-button',
    loadChildren: () => import('./test-cases/radio-button-test/radio-button-test.module').then(x => x.RadioButtonTestModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
