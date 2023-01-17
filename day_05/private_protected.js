//  private , protected and public

// to make props protected use _propsname

class CoffeeMachine{
    _waterAmount=0
    constructor(power){
     this._power=power
    }
    set waterAmount(value){
     if(value<0){
        value=0
     }
     this._waterAmount=value
    }

    get waterAmount(){
        return this._waterAmount
    }
    get powers(){
        console.log(this._power)
    }
}

let coffee=new CoffeeMachine()
// coffee.waterAmount=10
// console.log(coffee.waterAmount)
coffee.power=200
console.log(coffee.power)