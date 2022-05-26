import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogueAjouterPrComponent } from './dialogue-ajouter-pr.component';

describe('DialogueAjouterPrComponent', () => {
  let component: DialogueAjouterPrComponent;
  let fixture: ComponentFixture<DialogueAjouterPrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogueAjouterPrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogueAjouterPrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
