import {EventEmitter} from 'events';

const emailRequestEmitter = new EventEmitter();

const customerDetails = {
    name: 'John Doe',
    email: 'jo@d.k ',
    phone: '123-456-7890' 
}

function generateEmail(customer){
    console.log(`Generating email for ${customer.name} at ${customer.email}`);
    // Simulate email content creation
   
}

emailRequestEmitter.on('emailRequest',generateEmail);
emailRequestEmitter.on('emailRequest', () => console.log('Email request received'));
emailRequestEmitter.on('emailRequest', () => console.log('Processing email request'));




emailRequestEmitter.emit('emailRequest', customerDetails)

setTimeout(() => {
    
}, 5000);