import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginComponent } from './plugin.component';

describe('PluginComponent', () => {
  let component: PluginComponent;
  let fixture: ComponentFixture<PluginComponent>;
  let nativeElement: HTMLElement
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PluginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PluginComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test message avant et après initialisation', () => {
    let messageAvant = component.message
    component.ngOnInit()
    let messageApres = component.message
    expect(messageAvant).toBe('en cours de chargement')
    expect(messageApres).toBe('chargement términé')
  })

  it('test affichage message après mise à jour', () => {
    
    fixture.detectChanges()
    component.message = 'mise à jour'
    fixture.detectChanges()
    let content = nativeElement.querySelector("#message")
    expect(content?.textContent).toContain('mise à jour')
  })

  it('test affichage message apres initialisation', () => {
    fixture.detectChanges()
    let content = nativeElement.querySelector("#message")
    expect(content?.textContent).toContain('chargement términé')
  })
});
