let queue = [];

function addCustomer(name) {
    queue.push(name);  
    console.log(${name} has entered the queue. Current Queue: ${queue});
}

function serviceCustomer(number) {
    if (number >= 1 && number <= queue.length) {

        const servicedCustomer = queue[number - 1];
        console.log(${servicedCustomer} is being serviced.);
        

        queue.splice(number - 1, 1);
        

        console.log('Updated Queue:', queue);
    } else {
        console.log('Invalid number. Please enter a valid number between 1 and', queue.length);
    }
}


function startQueueingSystem() {

    addCustomer('Elaine');
    addCustomer('Althea');
    addCustomer('Angelo');
    addCustomer('Lito');
    addCustomer('Engelbert');
    

    let continueService = true;
    while (continueService && queue.length > 0) {

        let number = prompt('Enter a number (1-5) to service a customer:');
        

        number = parseInt(number);
        

        serviceCustomer(number);
        

        continueService = confirm('Do you want to service another customer?');
    }
    

    if (queue.length === 0) {
        console.log('All customers have been serviced.');
    }
}


startQueueingSystem();