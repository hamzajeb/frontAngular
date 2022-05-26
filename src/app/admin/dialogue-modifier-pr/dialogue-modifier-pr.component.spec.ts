import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogueModifierPrComponent } from './dialogue-modifier-pr.component';

describe('DialogueModifierPrComponent', () => {
  let component: DialogueModifierPrComponent;
  let fixture: ComponentFixture<DialogueModifierPrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogueModifierPrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogueModifierPrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
