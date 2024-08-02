const contactBook = {
    contacts: [
        {name: 'Alice', phone: '096-392-93-73', email: 'alice@gmail.com'},
        {name: 'Bob', phone: '096-392-93-73', email: 'bob@gmail.com'}
    ],
    findContact: function(name) {
        return this.contacts.find(contact => contact.name === name);
    },
    addContact: function(newContact) {
        this.contacts.push(newContact);
    }
};
contactBook.addContact({name: 'Charlie', phone: '096-392-93-73', email: 'charlie@gmail.com'});
const foundContact = contactBook.findContact('Alice');
if (foundContact) {
    console.log(`Found contact: Name: ${foundContact.name}, Phone: ${foundContact.phone}, Email: ${foundContact.email}`);
} else {
    console.log('Contact not found');
}
console.log('All contacts:', contactBook.contacts);

