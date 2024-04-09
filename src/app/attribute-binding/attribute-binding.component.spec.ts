import {ComponentFixture, TestBed, fakeAsync, tick, waitForAsync} from "@angular/core/testing";
import { AttributeBindingComponent } from "./attribute-binding.component";

describe("AttributeBindingComponent", () => {
  let attrBindingComp: AttributeBindingComponent;
  let fixture: ComponentFixture<AttributeBindingComponent>;
	let compInput: HTMLInputElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({imports: [AttributeBindingComponent]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeBindingComponent);
    attrBindingComp = fixture.componentInstance;
		compInput = fixture.nativeElement.querySelector("#html-attr");
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(attrBindingComp).toBeDefined();
  });

	it("compInput's value attribute should equal inputValue", () => {
		expect(compInput.getAttribute("value"))
		.withContext("Expected compInput's initial value equal to inputValue")
		.toBe(attrBindingComp.inputValue);
	})

	it("after modifying input, should see first <p>'s text unchanged and second <p>'s one modified", () => {
		const PARAGRAPHS = fixture.nativeElement.querySelectorAll("p");
		const P1 = PARAGRAPHS[1];
		const P2 = PARAGRAPHS[2];
		
		compInput.value = "Another value";
		compInput.dispatchEvent(new Event('input'));
		fixture.detectChanges();

		expect(P1.textContent)
		.withContext("The first paragraph's text changed")
		.toEqual(`HTML attribute value: ${compInput.getAttribute("value")} (static)`);

		expect(P2.textContent)
		.withContext("The second paragraph's text didn't change")
		.not.toEqual(`DOM property value: ${attrBindingComp.inputValue}`);
	});
});