import { FormsModule } from '@angular/forms';
import { EditableComponent } from './yakutsk-edit-page/editable.component';
import { YakutskPageComponent } from './yakutsk-edit-page/yakutsk-page.component';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CityPageComponent } from './modules/pages/city-page/city-page.component';
import { MainPageComponent } from './modules/pages/main-page/main-page.component';
import { MePageComponent } from './modules/pages/me-page/me-page.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { MainComponent } from './start-page/main.component';
import { AboutmePageComponent } from './aboutme-page/aboutme-page.component';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { YakutskSiteComponent } from './yakutsk-site/yakutsk-site.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { ReactiveFormsModule } from '@angular/forms';
registerLocaleData(en);



const routes = [
  {path: '', component: MainPageComponent},
  {path: 'City', component:YakutskSiteComponent },
  {path: 'Me', component:AboutmePageComponent },
  {path: 'Edit', component:YakutskPageComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    CityPageComponent,
    MainPageComponent,
    MePageComponent,
    MainComponent,
    YakutskPageComponent,
    AboutmePageComponent,
    YakutskSiteComponent,
    EditableComponent

  ],
  imports: [
    BrowserModule,
    NzMenuModule,
    ReactiveFormsModule,
    FormsModule,
    NzInputModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzPageHeaderModule,
    NzSpaceModule,
    NzDescriptionsModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzImageModule,
    NzGridModule,
    NzTypographyModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({}, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})

export class AppModule { }

export class NzDemoPageHeaderBasicComponent {
  onBack(): void {
    console.log('onBack');
  }
}

export class NzDemoPageHeaderGhostComponent {}
export class NzDemoLayoutTopComponent {}
export class NzDemoGridBasicComponent {}


