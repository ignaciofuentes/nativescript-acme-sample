import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  moduleId: module.id,
})
export class NavBarComponent {
  private _index: number = 0;
  @Input() set index(i: number) {
    this._index = i;
  }
  get index(): number {
    return this._index;
  }

  ngOnInit(): void {}
}
