import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

import {Settings} from '../../providers/providers';

/**
 * The Settings page is a simple form that syncs with a Settings provider
 * to enable the user to customize settings for the app.
 *
 */
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  // Our local settings object
  options: any;

  settingsReady = false;

  profileSettings = {
    page: 'profile',
    pageTitleKey: 'SETTINGS_PAGE_PROFILE'
  };

  page: string = 'main';
  pageTitleKey: string = 'REVERSE_IMAGE_SEARCH_TITLE';
  pageTitle: string = 'Reverse Image Search';

  subSettings: any = SettingsPage;

  constructor(public navCtrl: NavController,
              public settings: Settings,
              public formBuilder: FormBuilder,
              public navParams: NavParams,
              public translate: TranslateService) {
  }

  ionViewDidLoad() {
    // Build an empty form for the template to render
  }

  ionViewWillEnter() {

  }

  ngOnChanges() {
    console.log('Ng All Changes');
  }
}
