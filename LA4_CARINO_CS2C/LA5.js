function hashFunction(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash += name.charCodeAt(i);
  }
  return hash % 5;
}

class QueueSystem {
  constructor() {

    this.hashTable = new Array(5).fill(null);
  }

  addCustomer(name) {
    const index = hashFunction(name);
    if (this.hashTable[index] === null) {
      this.hashTable[index] = name;
      console.log(Customer ${name} added at index ${index + 1});
    } else {
      console.log(Hash collision! Cannot add ${name} at index ${index + 1});
    }
  }

  serviceCustomer(number) {
    if (number < 1 || number > 5) {
      console.log("Invalid number. Please enter a number between 1 and 5.");
      return;
    }

    const index = number - 1;
    const customer = this.hashTable[index];

    if (customer) {
      console.log(Servicing customer: ${customer});

      this.hashTable[index] = null;
      this.displayHashTable();
    } else {
      console.log("No customer found at this index.");
    }
  }

  displayHashTable() {
    console.log("\nUpdated Queue:");
    for (let i = 0; i < this.hashTable.length; i++) {
      if (this.hashTable[i] !== null) {
        console.log(Index ${i + 1}: ${this.hashTable[i]});
      } else {
        console.log(Index ${i + 1}: Empty);
      }
    }
  }
}

const queueSystem = new QueueSystem();

queueSystem.addCustomer("Elaine");
queueSystem.addCustomer("Althea");
queueSystem.addCustomer("Angelo");
queueSystem.addCustomer("Lito");
queueSystem.addCustomer("Engelbert");

queueSystem.displayHashTable();

let number = parseInt(prompt("Enter the customer number to be serviced (1-5):"));
queueSystem.serviceCustomer(number);