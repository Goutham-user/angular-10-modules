import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopAdvComponent } from './top-adv.component';

describe('TopAdvComponent', () => {
  let component: TopAdvComponent;
  let fixture: ComponentFixture<TopAdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopAdvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopAdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
