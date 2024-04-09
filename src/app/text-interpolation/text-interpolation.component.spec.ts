import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import { TextInterpolationComponent } from '../../../../angular-binding-2/src/app/text-interpolation/text-interpolation.component';

describe('TextInterpolationComponent', () => {
  let textInterpolationComp: TextInterpolationComponent;
  let fixture: ComponentFixture<TextInterpolationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({imports: [TextInterpolationComponent]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextInterpolationComponent);
    textInterpolationComp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(textInterpolationComp).toBeDefined();
  });

	it('should see title and inputValue embeded into both h3 and input respectively', () => {
		const H3 = fixture.nativeElement.querySelector("h3");
		expect(textInterpolationComp.title)
		.withContext('title embeded inside the <h3> tag')
		.toEqual(H3.textContent);
		const INPUT = fixture.nativeElement.querySelector("input");
		expect(textInterpolationComp.inputValue)
		.withContext('inputValue embeded as a value inside the <input> tag')
		.toContain(INPUT.value);
	});
});