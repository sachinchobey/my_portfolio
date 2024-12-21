import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public activeRoute: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.activeRoute = this.router.url;
    this.setActive('/home');

  }

  isActive(route: string): boolean {
    return this.activeRoute === route;
  }

  setActive(route: string): void {
    this.activeRoute = route;
    this.router.navigateByUrl(route);
  }

}
