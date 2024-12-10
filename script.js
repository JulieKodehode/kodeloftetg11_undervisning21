// OPPGAVE 1:  While loop
/*
1.Gå til linje utenfor kommentar og skriv av while loopen som er laget,
se på console.log hva som skjer

EKSTRA oppgaver hvis dere får tid:

2. Endre countdown til 10, se i console.log

3. Snu på loopen, skriv let coundown = 1, countdown < 5, og countdown++

KODE DERE SKAL KOPIERE:

let countdown = 5;

while (countdown > 0) {
  console.log(`Countdown: ${countdown}`);
  countdown--;
}

console.log("Blast off!");
*/

console.log("--- OPPGAVE 1: ---")

let countdown = 5;
// A while loop is a loop that goes through something WHILE the condition is true
while (countdown > 0) {
  // Using a template litteral method with backtics to string out a message using the countdown variable to show the count
  console.log(`Countdown: ${countdown}`);

  // Using a -- method is short hand for counting countdown = countdown - 1 to count down to 5 as the condition states
  countdown--;
}
console.log("Blast off!");

let countup = 1;
// A while loop is a loop that goes through something WHILE the condition is true
while (countup < 5) {
  // Using a template litteral method with backtics to string out a message using the countdown variable to show the count
  console.log(`Countup: ${countup}`);

  // Using a ++ method is short hand for counting countdown = countdown + 1 to count up to 5 as the condition states
  countup++;
}
console.log("Blast in!");

// OPPGAVE 2: For loop
/*
1.Gå til linje utenfor kommentar og skriv av for loopen, 
se på console.log hva som skjer

EKSTRA oppgaver hvis dere får tid:
2. Skift number til å ha en annen verdi
3. Lag et array og skift ut 10 med navn_på_array.length,
og lag en ny string i console.log som console.log hvert element i array

Vi går igjennom koden når alle har skrevet ferdig

KODE DERE SKAL KOPIERE:

const number = 7;

for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}
*/

console.log("--- OPPGAVE 2: ---")

const number = 7;
for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
};

const diffrentNumber = 10;
for (let i = 1; i <= 5; i++) {
  console.log(`${diffrentNumber} x ${i} = ${diffrentNumber * i}`);
};

const names = ["Julie", "Anders", "Fredrik"];
for (let i = 0; i < names.length; i++) {
  console.log(`Navnene i array er ${names[i]}`)
};

// OPPGAVE 3: .forEach()
/*
1.Gå til linje utenfor kommentar og skriv av forEach loopen, 
se på console.log hva som skjer

EKSTRA oppgaver hvis dere får tid:
2. legg til ekstra elementer i shoppinglisten
3. lag en ny array og skift ut shoppingList med den nye arrayen
4. for hver iterasjon lag en p og legg til element fra shoppinglist til p
5. lag et array av objects og loop igjennom et spesifikt key f.eks alle names i objectene

Vi går igjennom koden når alle har skrevet ferdig

KODE DERE SKAL KOPIERE:

let shoppingList = ["milk", "bread", "fish", "egg"];

shoppingList.forEach((item) => {
  console.log(item);
});
*/

console.log("--- OPPGAVE 3: ---")

let shoppingList = ["milk", "bread", "fish", "egg"];

// Ekstra oppgave 2
shoppingList.push("bacon");
shoppingList.push("cherry tomato");

shoppingList.forEach((item) => {
  console.log(item);
});

// Ekstra oppgave 3
let newShoppingList = ["Julebrus", "Pepperkaker", "Julemen", "Sjokoladeflarn"];

// Ekstra oppgave 4
newShoppingList.forEach((item) => {
  console.log(item);

  const p = document.createElement("p");
  p.textContent = item;

  const body = document.querySelector("body");
  body.appendChild(p);
});

// Ekstra oppgave 5
let advancedShoppingList = [{product: "Mandarin", quantity: "10"}, {product: "Mandler", quantity: "1"}, {product: "Hasselnøtter", quantity: "99"}]

advancedShoppingList.forEach((item) => {
  console.log(item.product)
})

// OPPGAVE 4: .map()
/*
1.Gå til linje utenfor kommentar og skriv av map funksjonen som er laget,
se på console.log hva som skjer

EKSTRA oppgaver hvis dere får tid:
2. legg til flere numre i numbers array, 
endre nummeret "number" multipliseres med,
skift ut multipliser med dele

3. lag en ny array med frukt, 
map over array og legg til teksen "er på salg" for hver frukt, 
console.log det nye arrayet

Vi går igjennom koden når alle har skrevet ferdig

KODE DERE SKAL KOPIERE:

const numbers = [1, 2, 3];

const doubled = numbers.map((number) => number * 2);

console.log(doubled);
console.log(numbers);
*/

console.log("--- OPPGAVE 4: ---")

const numbers = [1, 2, 3];

const doubled = numbers.map((number) => number * 2);

console.log(doubled);
console.log(numbers);

/*
EKSTRA OPPGAVE:
Se over koden under,
Kommenter ut koden,
skriv kommentar for hver linje/del hvor du forklarer delen av koden gjør
*/

console.log("--- EXTRA OPPGAVE: ---")

const passengers = [
  {
    name: "Frank",
    age: 32,
    city: "San Fransico",
  },

  {
    name: "Sara",
    age: 22,
    city: "Miami",
  },

  {
    name: "Sebastian",
    age: 32,
    city: "Ohio",
  },
];

let nameList = [];

passengers.forEach((item) => {
  let names = item.name;
  let newNameHeader = document.createElement("h3");
  newNameHeader.textContent = names;
  document.body.appendChild(newNameHeader);
  nameList.push(names);
});

console.log(nameList);