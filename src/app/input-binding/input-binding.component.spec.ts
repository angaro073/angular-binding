import {ComponentFixture, TestBed, waitForAsync} from "@angular/core/testing";
import { InputBindingComponent } from "../../../../angular-binding-2/src/app/input-binding/input-binding.component";

describe("InputBindingComponent", () => {
  let inputBindingComp: InputBindingComponent;
  let fixture: ComponentFixture<InputBindingComponent>;
  
	beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({imports: [InputBindingComponent]}).compileComponents();
  }));

	beforeEach(() => {
    fixture = TestBed.createComponent(InputBindingComponent);
    inputBindingComp = fixture.componentInstance;
		fixture.detectChanges();
  });

  it("should create", () => {
    expect(inputBindingComp).toBeDefined();
  });

	it("the font size of Sizer's FontSize paragraph should be given by its parent", () => {
		let paragraph = fixture.nativeElement.querySelector("app-sizer p:nth-child(3)") as HTMLParagraphElement;
 		expect(paragraph.style.fontSize)
		.withContext("expected paragraph's font size respect to its InputBindingComponent parent")
		.toEqual(`${inputBindingComp.fontSizePx}px`);
	});
});