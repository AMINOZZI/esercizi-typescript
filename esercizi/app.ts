//l'intefaccia dichiara solo le proprietà nel suo oggetto..non può essere utilizzata come factory o singleton
//Le interfacce non posso usarle per creare oggetti. 
//Sono classi astratte con metodi senza corpo. Inoltre non possono contenere costruttori.
interface Pizza {
  name: string;
  toppings: string[];
}

class PizzaMaker {
  static create(event: Pizza) {
    return { name: event.name, toppings: event.toppings };
  }
}
//const instanza = new Pizza()// non possiamo instanziare un interfaccia
const pizza = PizzaMaker.create({
  name: "Inferno",
  toppings: ["cheese", "peppers"],
});
