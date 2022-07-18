import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerDeleteDialogComponent } from './player-delete-dialog.component';

describe('PlayerDeleteDialogComponent', () => {
  let component: PlayerDeleteDialogComponent;
  let fixture: ComponentFixture<PlayerDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerDeleteDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
