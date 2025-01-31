import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroComponent } from './cards.component';

describe('CardsComponent', () => {
  let component: LivroComponent;
  let fixture: ComponentFixture<LivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
