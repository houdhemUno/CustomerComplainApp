import {ComponentFixture,TestBed} from "@angular/core/testing";
import {SignInForm} from "./sign-in-form.component";


describe("SignInForm",()=>{
    let component:SignInForm;
    let fixture:ComponentFixture<SignInForm>;
    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations:[SignInForm],
        });
        fixture=TestBed.createComponent(SignInForm);
        component=fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should create",()=>{
        expect(component).toBeTruthy();
    });
});
