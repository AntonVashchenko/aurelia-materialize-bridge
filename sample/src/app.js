import {inject} from 'aurelia-dependency-injection';
import {Settings} from './settings';

@inject(Settings)
export class App {
  constructor(settings) {
    this.primaryColor = settings.primaryColor;
    this.accentColor = settings.accentColor;
    this.errorColor = settings.errorColor;
  }

  configureRouter(config, router) {
    config.title = 'Aurelia Materialize Components';

    config.map([
      { name: 'about',            route: ['', 'about'],                moduleId: 'about/about',                 title: 'About' },
      { name: 'installation',     route: 'installation',               moduleId: 'installation/installation',   title: 'Installation' },
      { name: 'project-status',   route: 'project-status',             moduleId: 'project-status/controls',     title: 'Components'},
      { name: 'help',             route: 'help',                       moduleId: 'help/help',                   title: 'Help' },
      // { name: 'docs',             route: 'help/docs/:category/:file',  moduleId: 'help/help',                   title: 'Help' },
      { name: 'support',          route: 'help/support',  moduleId: 'help/support',                   title: 'Support' },
      { name: 'samples',          route: ['samples'],                  moduleId: 'samples/index',             title: 'Samples' }
    ]);

    this.router = router;
  }
  attached(){
    if(document.getElementsByTagName('html')[0].getAttribute('dir')=='rtl')
    {
     
      var allLeftElements=document.querySelectorAll('.left');
      var allRightElements=document.querySelectorAll('.right');

      for(var i=0; i<allLeftElements.length; i++)
      {
        allLeftElements[i].className =
        allLeftElements[i].className.replace
           ( /(?:^|\s)left(?!\S)/g , ' right' );
      }
      
      for(var i=0; i<allRightElements.length; i++)
      {
        allRightElements[i].className =
        allRightElements[i].className.replace
           ( /(?:^|\s)right(?!\S)/g , ' left' );
      }
      var logos=document.querySelectorAll('.brand-logo');
      for(var i=0; i<logos.length; i++)
      {
        logos[i].style.position = 'inherit';
      }     
    }
    
  }

}
