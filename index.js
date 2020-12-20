function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const customerlist = [];
let customers = 0;

let ordertotal = 0;

let orderdetails = [];

class Order {
  itemName;
  tast = '';
  constructor(name, tst = '') {
    this.itemName = name;
    this.tast = tst;
  }
  getorder() {
    return `${this.itemName} ${this.tast} `;
  }
}
async function fetchOrderDetails1() {
  orderdetails.push(document.getElementById('button1').value + ' ');
  orderdetails.push(
    ' ' + document.getElementById('taste1').innerText + '    220/-'
  );
  ordertotal += 220;
}
async function fetchOrderDetails2() {
  orderdetails.push(document.getElementById('button2').value + ' ');
  orderdetails.push(document.getElementById('taste2').innerText + '    350/-');
  ordertotal += 350;
}
async function fetchOrderDetails3() {
  orderdetails.push(document.getElementById('button3').value + ' ');
  orderdetails.push(document.getElementById('taste3').innerText + '    180/-');
  ordertotal += 180;
}

class Customer {
  Name;
  emailAddress;
  Address;
  constructor(name, email, address) {
    this.Name = name;
    this.emailAddress = email;
    this.Address = address;
  }

  get getName() {
    return `${this.Name}`;
  }

  get getMail() {
    return `${this.emailAddress}`;
  }
  get getAddress() {
    return `${this.Address}`;
  }
}

let tastepreference1 = 0;
let tastepreference2 = 0;
let tastepreference3 = 0;
async function colours(
  level = '',
  one = 'white',
  two = 'white',
  three = 'white',
  four = 'white'
) {
  document.getElementById(`${level}1`).style.backgroundColor = `${one}`;
  document.getElementById(`${level}2`).style.backgroundColor = `${two}`;
  document.getElementById(`${level}3`).style.backgroundColor = `${three}`;
  document.getElementById(`${level}4`).style.backgroundColor = `${four}`;
}
async function checkTaste(buttonnumber, tastepreference) {
  if (tastepreference <= 0) {
    colours(`${buttonnumber}`);
  }
  if (tastepreference === 2) {
    colours(`${buttonnumber}`, 'lightgreen');
  }
  if (tastepreference === 4) {
    colours(`${buttonnumber}`, 'lightgreen', 'darkgreen');
  }
  if (tastepreference === 6) {
    colours(`${buttonnumber}`, 'lightgreen', 'darkgreen', 'darkorange');
  }
  if (tastepreference === 8) {
    colours(`${buttonnumber}`, 'lightgreen', 'darkgreen', 'darkorange', 'red');
  }
}

async function increment1() {
  incrementByOne(1);
}
async function increment2() {
  incrementByOne(2);
}
async function increment3() {
  incrementByOne(3);
}

async function incrementByOne(buttonnumber) {
  switch (buttonnumber) {
    case 1:
      tastepreference1++;
      checkTaste('onelevel', tastepreference1);
      taste();
      break;
    case 2:
      tastepreference2++;
      checkTaste('twolevel', tastepreference2);
      taste();
      break;
    case 3:
      tastepreference3++;
      checkTaste('threelevel', tastepreference3);
      taste();
      break;
  }
}

async function decrement1() {
  decrementByOne(1);
}
async function decrement2() {
  decrementByOne(2);
}
async function decrement3() {
  decrementByOne(3);
}
async function decrementByOne(number) {
  switch (number) {
    case 1:
      tastepreference1--;
      checkTaste('onelevel', tastepreference1);
      taste();
      break;
    case 2:
      tastepreference2--;
      checkTaste('twolevel', tastepreference2);
      taste();
      break;
    case 3:
      tastepreference3--;
      checkTaste('threelevel', tastepreference3);
      taste();
      break;
  }
}

async function taste() {
  switch (tastepreference1) {
    case 0:
      document.getElementById('taste1').innerHTML = 'Mild Flavour';
      break;
    case 4:
      document.getElementById('taste1').innerHTML = 'Little Spicy';
      break;
    case 6:
      document.getElementById('taste1').innerHTML = 'Spicy!';
      break;
    case 8:
      document.getElementById('taste1').innerHTML = 'Sizzling Hot!!';
  }
  switch (tastepreference2) {
    case 0:
      document.getElementById('taste2').innerHTML = 'Mild Flavour';
      break;
    case 4:
      document.getElementById('taste2').innerHTML = 'Little Spicy';
      break;
    case 6:
      document.getElementById('taste2').innerHTML = 'Spicy!';
      break;
    case 8:
      document.getElementById('taste2').innerHTML = 'Sizzling Hot!!';
  }
  switch (tastepreference3) {
    case 0:
      document.getElementById('taste3').innerHTML = 'Mild Flavour';
      break;
    case 4:
      document.getElementById('taste3').innerHTML = 'Little Spicy';
      break;
    case 6:
      document.getElementById('taste3').innerHTML = 'Spicy!';
      break;
    case 8:
      document.getElementById('taste3').innerHTML = 'Sizzling Hot!!';
  }
}

async function createCustomer() {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let address = document.getElementById('address').value;
  customerlist.push(new Customer(name, email, address));
}

async function submitted() {
  createCustomer();
  getcustomerDetails(0);
}

async function bill() {
  createCustomer();
  let s = '';
  let i = 0;
  for (let itemsss of orderdetails) {
    if (i % 2 == 0) {
      s += '\n';
    }
    s += itemsss;
    i++;
  }
  alert(
    `Thank you ${customerlist[0].getName}
       For ordering From our Website!!
       It will be dilivered to you at ${customerlist[0].getAddress}
       Thank you n Enjoy you Meal!! 

|------------------BILL----------------------|
Items                                                 Price
${s}                          
Total Sum                      : ${ordertotal} 
       \nThank You ${customerlist[0].getName} n Visit Again 😇`
  );
  location.reload();
}

let plusbuttonone = (document.getElementById('+one').onclick = increment1);
let minusone = (document.getElementById('-one').onclick = decrement1);
let plusbuttontwo = (document.getElementById('+two').onclick = increment2);
let minustwo = (document.getElementById('-two').onclick = decrement2);
let plusbuttonthree = (document.getElementById('+three').onclick = increment3);
let minusthree = (document.getElementById('-three').onclick = decrement3);
let it1 = (document.getElementById('item1').onclick = fetchOrderDetails1);
let it2 = (document.getElementById('item2').onclick = fetchOrderDetails2);
let it3 = (document.getElementById('item3').onclick = fetchOrderDetails3);

let submit = (document.getElementById('submit').onclick = bill);
