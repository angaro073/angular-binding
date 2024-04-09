import {ComponentFixture, TestBed, waitForAsync} from "@angular/core/testing";
import { OutputBindingComponent } from "../../../../angular-binding-2/src/app/output-binding/output-binding.component";
import { SizerComponent } from "../../../../angular-binding-2/src/app/sizer/sizer.component";
import { By } from "@angular/platform-browser";

describe("OutputBindingComponent", () => {
  let outputBindingComp: OutputBindingComponent;
  let fixture: ComponentFixture<OutputBindingComponent>;
  
	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({imports: [OutputBindingComponent]}).compileComponents();
  }));

	beforeEach(() => {
    fixture = TestBed.createComponent(OutputBindingComponent);
    outputBindingComp = fixture.componentInstance;
		fixture.detectChanges();
  });

  it("should create", () => {
    expect(outputBindingComp).toBeDefined();
  });

	it("the child component should be able to emit the new font size to its parent", () => {
		const sizerElement = fixture.debugElement.query(By.directive(SizerComponent));
		const sizerComp = sizerElement.componentInstance;
		const btnDecrement = sizerElement.nativeElement.querySelector("button[title='smaller']") as HTMLButtonElement;
		const btnIncrement = sizerElement.nativeElement.querySelector("button[title='bigger']") as HTMLButtonElement;
		btnDecrement.click();
		expect(outputBindingComp.fontSizePx)
		.withContext("expected outputBindingComp's fontSizePx after dec()")
		.toBe(sizerComp.size);
		btnIncrement.click();
		expect(outputBindingComp.fontSizePx)
		.withContext("expected outputBindingComp's fontSizePx after inc()")
		.toBe(sizerComp.size);
	});
});