import { ComponentFixture, TestBed, async } from "@angular/core/testing";
import { InpustOutputsComponent } from "./InputsOutputs"
import { Producto } from '../model/Producto';

describe('CartComponent', () => {
    let component: InpustOutputsComponent;
    let fixture: ComponentFixture<InpustOutputsComponent>;
  
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ InpustOutputsComponent ]
      })
      .compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(InpustOutputsComponent);
      component = fixture.componentInstance;
      component.products = [];
      fixture.detectChanges();
    });
  
    it('should create', () => {
      
      expect(component).toBeTruthy();
    });
  
    
    it('should call calculatePrice', () => {
      component.products = [{name:'lavadora',description:'electrodomestico',price:5000}, {name:'TV',description:'electrodomestico',price:4000}];
      component.priceEmitter.subscribe((response) => {
        expect(response).toEqual(9000);
      })
      component.calculatePrice();
    })
   
  
    
  });