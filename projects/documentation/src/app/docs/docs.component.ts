import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SidebarComponent } from '@components/index';

@Component({
  selector: 'app-docs',
  standalone: true,
  imports: [RouterOutlet, RouterModule, SidebarComponent],
  templateUrl: './docs.component.html',
  styles: ``
})
export class DocsComponent {
  public navigations = [
    {
      title: 'Getting Started',
      links: [
        { title: 'Introduction', routerLink: '/docs/introduction', isSoon: false },
        { title: 'Installation', routerLink: '/docs/installation', isSoon: false },
      ],
    },
    {
      title: 'All Components',
      links: [
        { title: 'Avatar', routerLink: '/docs/avatar', isSoon: false},
        { title: 'Alert', routerLink: '/docs/alert', isSoon: false},
        { title: 'Breadcrumbs', routerLink: '/docs/breadcrumbs', isSoon: false},
        { title: 'Badge', routerLink: '/docs/badge', isSoon: false},
        { title: 'Button', routerLink: '/docs/button', isSoon: false},
        { title: 'Icon Button', routerLink: '/docs/icon-button', isSoon: false},
        { title: 'Card', routerLink: '/docs/card', isSoon: false},
        { title: 'Input', routerLink: '/docs/input', isSoon: false},
        { title: 'Label', routerLink: '/docs/label', isSoon: false},
        { title: 'Textarea', routerLink: '/docs/textarea', isSoon: false},
        { title: 'Skeleton', routerLink: '/docs/skeleton', isSoon: false},
      ],
    },
  ]

}
