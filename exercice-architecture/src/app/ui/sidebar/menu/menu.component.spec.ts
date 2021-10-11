import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let element: HTMLElement
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    
  });

  it('should create', () => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('render menuItem title', () => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    component.menuItem = {path :'/lien', title:'lienTest'}
    fixture.detectChanges()
    element = fixture.nativeElement
    const title = element.querySelector(".link-menu")?.textContent
    expect(title).toContain('lienTest')
  })

  it('render menuItem path', () => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    component.menuItem = {path :'/lien', title:'lienTest'}
    fixture.detectChanges()
    element = fixture.nativeElement
    const path = element.querySelector(".link-menu")
    console.log(path)
    expect(path).toContain('/lien')
  })
});
