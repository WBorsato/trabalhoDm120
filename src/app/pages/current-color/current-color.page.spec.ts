import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CurrentColorPage } from './current-color.page';

describe('CurrentColorPage', () => {
  let component: CurrentColorPage;
  let fixture: ComponentFixture<CurrentColorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentColorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CurrentColorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
