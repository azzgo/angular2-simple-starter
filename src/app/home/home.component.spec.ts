import { TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { ComponentFixture } from '@angular/core/testing';


describe('Home Component', () => {
  let homeComRef: ComponentFixture<any>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent]
    });

    homeComRef = TestBed.createComponent(HomeComponent);
  })

  it('should exits', () => {
    expect(homeComRef).toBeDefined()
  })
});
