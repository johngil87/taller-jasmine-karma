import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Producto } from '../model/Producto';


@Component({
  selector: 'app-input',
  templateUrl: './InputsOutputs.html',
  styleUrls: ['./InputsOutputs.scss']
})
export class InpustOutputsComponent {
  // @Input('entrada') entrada: string = 'default';
  // @Output() salida: EventEmitter<string>;

  // constructor() {
  //   this.salida = new EventEmitter<string>();
  // }

  // public emitirAlgo(arg: string): void {
  //   this.salida.emit(arg);
  // }


  // public borrarEntrada(): void {
  //   this.entrada = '';
  // }

  totalPrice : number = 0;
  @Input() products : Producto[] = [{
    name:'TV',
    description: 'electrodomestico',
    price:3000,
  }];
  @Output() priceEmitter = new EventEmitter<Number>();

  ngOnInit(): void {
    this.calculatePrice();
  }

  calculatePrice(){
    for(let i = 0; i < this.products.length; i++){
      this.totalPrice += this.products[i]['price']
    }
    this.priceEmitter.emit(this.totalPrice);
  }
}
