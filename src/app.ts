// Classes
class Invoice {
  //   readonly client: string;
  //   // if private can only be accessed inside the class
  //   private details: string;
  //   public amount: number;

  //   constructor(c: string, d: string, a: number) {
  //     this.client = c;
  //     this.details = d;
  //     this.amount = a;
  //   }

  // Shorthand, you need to use the access modifiers for this to work

  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    // this.client = `something else`;
    return `${this.client} owes £${this.amount} for ${this.details}`;
  }
}

const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

// console.log(invOne, invTwo);

let invoices: Invoice[] = [];
// invoices.push('hello');
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach((inv) => {
  // readonly inside the class, can still read it (console log)
  //   inv.client = 'something else';
  console.log(inv.client, inv.amount, 'Whole invoice:', inv.format());
  //without private
  //   console.log(
  //     inv.client,
  //     inv.details,
  //     inv.amount,
  //     'Whole invoice:',
  //     inv.format()
  //   );
});

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
form.addEventListener('submit', (e) => {
  e.preventDefault();

  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
