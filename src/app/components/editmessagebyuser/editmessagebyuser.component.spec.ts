import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmessagebyuserComponent } from './editmessagebyuser.component';

describe('EditmessagebyuserComponent', () => {
  let component: EditmessagebyuserComponent;
  let fixture: ComponentFixture<EditmessagebyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditmessagebyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditmessagebyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
