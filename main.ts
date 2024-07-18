// task 1

// let personName:string ="Mehak";
// console.log(`Hello ${personName}, would you like to learn some python today?`);

// // task 3 


// let personName:string ="Mehak Naz";

// // in lower case
// console.log("lowercase:", personName. toLowerCase());
// //   in uppercase

// console.log("uppercase:", personName. toUpperCase());
// //  titlecase
// console.log("titlecase:", personName.replace(/\b\w/g,c => c.toUpperCase()));

// // task 4



// let quote:string ="A person who never made a mistake never tried anything new.";
// let author:string="Albert Einstein";
// console.log(`${author} once said "${quote}"`);

// // task 5



// let famouse_person:string="Albert Einstein";
// let message:string= `${famouse_person} once said "${quote}"`
// console.log(message);

// task 6



// let personName:string = "\t\n  Mehak Naz  \n\t";
// console.log("Orignal:", personName);
// console.log("Stripped:", personName.trim());

// task 7



// console.log(5+3);
// console.log(10-2);
// console.log(4*2);
// console.log(16/2);

// task 9 printing my fav num



// let favNumber:number= 6;
// console.log(`My favorite number is ${favNumber}. `);

// question 10 ADD COMMENTS 
// author: [Mehak Naz]
// DATE :[MONDAY, MAY 13,2024]

// // QUESTION 11
// let names : string [] =["ashar","hassan","ehsan","shayan"];
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);

// // task 12



// let names : string [] =["ashar","hassan","ehsan","shayan"];
// let message: string="Do you like to play football?"
// console.log(names[0] +" "+ message);
// console.log(names[1] +" "+ message);
// console.log(names[2] +" "+ message);
// console.log(names[3] +" "+ message);

// // task 13




// let transpotation : string []=["honda","Audi","Farari","Corola"];
// transpotation.map((items)=> console.log (`I would to like to own ${items}`));

// // task 14 guest list 



// let guestArr : string [] =["ashar","hassan","ehsan","shayan"];
// guestArr.map((items) => console.log(`Dear ${items}, You are invited to the dinner`));

// // task 15 //remove 1 guest from list



// let guestArr : string [] =["ashar","hassan","ehsan","shayan"];
// let canNotAttend : string="ashar"
// console.log (canNotAttend +" ", "Can not attend to the dinner")
// let newGuest :string = "yumnah"
// guestArr [guestArr.indexOf(canNotAttend)]= newGuest;

// guestArr.map((items) => console.log(`Dear ${items}, you are invited to the dinner.`))


// task16



// let guestArr : string [] =["ashar","hassan","ehsan","shayan"];

// // let canNotAttend : string= "ashar"
// // let newGuest: string = "maha"
// // guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
// // console.log(guestArr);
// // // guestArr.map((items) =>
// // //     console.log(`Dear ${items}, I found a bigger dinner table so I am invited more`));
// // // part 2 
// // let guestbeg : string="muiz"
// // guestArr.unshift(guestbeg);
// // console.log(guestArr)
// // part 3
// let guestmiddle : string ="alisha"
// let middleIndex = guestArr.length/3
// guestArr.splice(middleIndex,0.3,guestmiddle)
// console.log(guestArr);

// // part4
// guestArr.push("zeeshan")
// console.log(guestArr)

// guestArr.pop()
// console.log(guestArr)

// guestArr.shift()
// console.log(guestArr)

// guestArr.unshift("muqaddas")
// console.log(guestArr)

// guestArr.splice (3,1, "alina")
// console.log(guestArr)


// part 5


// //guestArr.map((items) =>
//     console.log(`Dear ${items} , you are invited in the more people list on dinner`));




// task 17



// let guests: string [] =["ali","amir","ahmad","musa","hamza"]    
// // while (guests.length > 2){
// //     const removedGuest = guests.pop();
// //     console.log(`Sorry, ${removedGuest}, you are mo longer invited to dinner`)
// // }

// // guests.forEach((guest) => {
// //     console.log(`Dear ${guest}, you are still invited to dinner.`);
// // });

// //removing last 2
// // guests.pop()
// // guests.pop()
// // console.log("Final guest list:",guests);


// // task 18


// // store a location in an array
// let placeToVisit: string[] = ["Tokyo","Pakistan","America","China","japan"]

// console.log("Orignal order:",placeToVisit);

// //Alphabetical order
// console.log("Alphabetical order:",[...placeToVisit].sort());


// //show that the array in orignal order
// console.log("Orignal order after sorting:",placeToVisit);

// //reverse 
//  console.log("Reverse Alphabetical order:",[...placeToVisit].sort().reverse());

//  //orignal order
//  console.log("Orignal order after Reverse sorting:",placeToVisit);
 
//  //reverse the order
//  placeToVisit.reverse();
//  console.log("Reverse order:",placeToVisit);

//  //reverse the order of the list
//  placeToVisit.reverse();
//  console.log("Back to the Orignal order:",placeToVisit);

//  //reverse the orignal list again 
//  placeToVisit.sort();
//  console.log("sorted in alphabetical order:",placeToVisit);

//  //sort the array in reverse alphabetical order
//  placeToVisit.sort((a,b) => b.localeCompare(a));
//  console.log("sorted in reverse alphabetical order:",placeToVisit);



//  // task 19




//  let invitation : string [] = ["ali ","amir"]
//  let count_invitation : number = invitation.length

//  console.log(`${count_invitation} people will come to the dinner`)

//  // task 20



//  //think of something store in array
//  let country: string []= ["Pakistan","India","Newyork","Japan","China"]
//  console.log("List of country:");
//  console.log(country)


// //task 21


// //think of something you could store in a typescript object
// let person:{name: string, fname: string, age: number} ={name:"mehak",fname:"noor",age: 22}
// console.log(person);


////task 22



//international array

// const days : string [] =["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]

// //console.log(days{7})
// console.log(days[6]);


////task 23



//conditional test

// let car = "subaru";

// // console.log("is car == 'subaru'? predict true");
// // console.log(car == "sabaru" );

// // console.log("is car != 'honda city'? predict true");
// // console.log("car != to honda city");

// // console.log("is car == 'subaru'? predict false");
// // console.log(car == 'subaru');

// // console.log("is car == 'SUBARU'? predict false");
// //  console.log(car == 'SUBARU');


// // console.log("is car lenght is  == 3? predict false");
// // console.log(car.length == 3);

// // console.log("is car lenght is  != 10? predict true");
// // console.log(car.length != 10);

// // console.log("is 10 > 45 ?predict false");
// // console.log(10 > 45);

// // console.log("is 3 <= 2 ?predict false");
// // console.log(3 <= 2);

// // console.log("is 72 >= 83 ?predict false");
// // console.log(72 >= 83);


// // console.log("is car 'subaru' && car.lenght ==6? predict true ");

// // console.log(car == 'subaru' && car.length == 6);

// //24 task 
// let name_1 : string = "Mehak"
// let name_2 : string = "Mehak Naz"
// let name_3 : string = "Miss Mehak Naz"

// if(name_1 == name_3){
//     console.log("names are equal");

    
// } else {
//     console.log("names are not equal");
    
// }

// if(name_1 != name_2){
//     console.log("names are equal");

    
// } else {
//     console.log("names are not equal");
    
// }


// if(name_1 != name_3){
//     console.log("names are equal");

// }
// let age_1 :number= 18
// let age_2 :number= 24

// if (age_1 == 18){
//     console.log("eligible for vote");
    
// }

// if (age_1 != 22){
//     console.log("eligible for vote in older category");
    
// }

// if (age_1 <= age_2){ //less
//     console.log("younger");
    
// }

// if (age_2 >= age_1){ // greater
//     console.log("older");
    
// }


// if (age_1 ==18 && age_2 == 24){
//     console.log("person is eligible for vote");
    
// }

// if (age_1 ==18 || age_2 != 24){
//     console.log("person is not eligible for vote");
    
// }


// let country : string [] = ["pakistan","india","japan","china"]
// // if (country.includes("pakistan")){
// //     console.log("pakistan is in country list");
    
// // }

// if (!country.includes ("america")){
//     console.log("america is not includes in  an array");
    

// }


//task 25



// let alien_color :string ="green"
// if (alien_color  == "green")
//     console.log("you earn 5 points");
    

// let alien_color:string = "red"
// if(alien_color == "green")
//     console.log("no output");


//task 26
// let alien_color ="green"
// if(alien_color== "green"){
//     console.log("player just earned 5 points for shooting the alien");
// }
//     else {
//         console.log("player just earned 10 points");
        
//     }


//     let alien_color ="red"
// if(alien_color== "green"){
//     console.log("player just earned 5 points for shooting the alien");
// }
//     else {
//         console.log("player just earned 10 points");
        
//     }


    
   //task 27 


// let alien_color : string ="green" //yellow    red

// if(alien_color== "green"){
//     console.log("player earned 5 points");
// } else if (alien_color=="yellow"){
//     console.log("player earned 10 points");
    
// } else{
//     console.log("player earned 15 points");
    
// }

// //task 28           ///2,,4,,13,20,,65. older


// let age : number =18

// if(age < 2){
//     console.log("you are a baby");
    
// } else if(age < 4){
//     console.log("you are a toddler");
    
// } else if( age < 13){
//     console.log("yoou are a kid");
    
// } else if(age < 20){
//     console.log("you are a teenager");
    
// } else if(age < 65){
//     console.log("you a adult");
    
// } else{
//     console.log("you are older");
    
// }

// //task 29

// let favorite_fruit: string[]= ["Mango","kivi","apple"]

// if (favorite_fruit.includes("kivi")){
//     console.log("kivi");
    
// }

// if (favorite_fruit.includes("peach")){
//     console.log("you really like banana");
    
// }

// if (favorite_fruit.includes("Mango")){
//     console.log("Mango");
    
// }

// if (favorite_fruit.includes("berry")){
//     console.log("you really like banana");
    
// }

// if (favorite_fruit.includes("apple")){
//     console.log("apple");
    
// }

//task 30 

// let users: string []=["admin","amaria","fatima","abiha","janat"]

// for (let user of users){
//     if ( user === "admin"){     
//         console.log("Hello admin would you like to see a status report");
        
//     }   else{
//         console.log(`Hello ${user},thanku for logging in again`); ///
        
//     }
// }



// ////task 31


// let users: string []=["admin","amaria","fatima","abiha","janat"]
// if ( users.length === 0){
//     console.log("we need to find some users")
// }else{
//     for ( let user of users){
//         if (user === "admin"){
//             console.log("Hello admin would you like to see a status report");

//         } else{
//             console.log(`Hello ${user},thanku for logging in again`); 


//         }
        
//     }
    
    
// }
// users =[]
// if (users.length === 0){
//     console.log("we need to find some users");
    
// }

//task 32

//  let current_users : string[] = ["Admin","Merub","Fatima","Janat","Shayan"]
//  let new_users : string[] =["Admin","Fatima","Aliza","Hasan","Ehsan"]

// let current_users_lower : String [] =current_users.map(user => user.toLocaleLowerCase())

// for (let new_user of new_users){
//    if (current_users_lower.includes(new_user.toLocaleLowerCase())){
//       console.log(`Sorry ${new_user},that name is taken`);

//    }else{
//       console.log(`yes ${new_user},is still in avaliable list`);
      
//    }
// }

//task 33


// let numbers : number []=[1,2,3,4,5,6,7,8,9]

// for(let number of numbers){
// if( number === 1){
//    console.log(`${number}st`);

   
// }else if (number === 2){
//    console.log(`${number}nd`);


   
// }else if (number === 3){
//    console.log(`${number}rd`);

// }else{
//    console.log(`${number}th`);
   
// }
// }
// task 34

// let favorite_pizza : string []=["chicken tikka" ,"fajita", "pepperoni"]

// for  (let pizza of favorite_pizza){
//    console.log(pizza);
   
// }
// console.log("\n");

// for( let pizza of favorite_pizza)
//    console.log(`i really like ${pizza}pizza !`);

// console.log("\n i really like to eat  pizza");

// task 35
//  let animals : string []=["cat", "dog","mouse"]
 
//  for (let animal of animals){
//    console.log(animal);
   
//  }
//  console.log("\n");

//  for (let animal of animals){
//    console.log(`A ${animal } has a tail`);

   
//  }

//  console.log("\n all of these are great pets ! but i love cat more ");


// task 36

// function makeShirt(size:string,text:string): void {
//    console.log(`\n you order a ${size} shirt that says ${text}`);

   
// }

//  makeShirt('large','"i love a typescript"')
//  makeShirt('medium','"i need a big shirt"')

//task 37

// function makeShirt(size:string ='large',text:string = 'I Love Typescript '):void{
//    console.log(`you have order a ${size}, shirt that says ${text}`);
   
// }
// makeShirt();
// makeShirt('medium')
// //different message
// makeShirt('small','I need a big shirt to wear')
   


//task 38

// function describe_city(city:string, country:string = 'Pakistan'):void{
//    console.log(`${city} is in ${country}`);
   
// }

// describe_city('Karachi')
// describe_city('Franse','Europe')
// describe_city('Lahore','Panjab')


//task 39

// function cityCountry(city:string,country:string):string{
//    return `${city}, ${country}`
// }
// let c1 = cityCountry('Lahore','Pakistan')
// let c2 = cityCountry('Tokyo','Japan')
// let c3 = cityCountry('paris','Franse')

// console.log(c1);
// console.log(c2);
// console.log(c3);


// //task 40

// function makeAlbum(artist :string,title:string): {artist :string; title: string}{
//    const dictionaries ={
//       artist: artist.charAt(0).toUpperCase()+ artist.slice(1),
      
//       title: title.charAt(0).toUpperCase()+ title.slice(1),

//    };
//    return dictionaries
// }
// let album = makeAlbum("shayan","light")
// console.log(album);

// album = makeAlbum("hasan","re wave")
// console.log(album);

// album = makeAlbum("ehsan","seenbreez")
// console.log(album);


// //41 task 


// function show_magicians(magicians: string[]): void{
//    for(const magician of magicians){
//       console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
      
//    }
// }
// // const magician:string[] = ["ali","hamza","ahmed"]
// // show_magicians(magician)


// // //task 42


// function make_great(magicians: string[]):void{
//    for(let i = 0; i < magicians.length; i++){
//       magicians[i] = magicians[i]    +  ' the great'
//    }
// }

// const magicians2:string[] = ["ali","hamza","ahmed"]
// // make_great(magicians2)
// // show_magicians(magicians2)



// //task 43



// function make_great2(magicians: string[]): string[] {
//    const greatMagicians:string[] = [];
   
//       for(let i = 0; i < magicians.length; i++){
//       greatMagicians.push(magicians[i] +  ' the great');
      
//    }
//    return greatMagicians;
// }
// const magician3:string[] = ["ali","hamza","ahmed"];
// const greatMagicians2: string[] = make_great2(magician3);
// show_magicians(magician3);
// show_magicians(greatMagicians2);


//44 task

// function sandwich(...items: string[]):void{
//    console.log("Sandwich order");
//    for (let i =0; i < items.length; i ++){
//       console.log(` - ${items[i]}`);
      
//    }

// }
// console.log("enjoy your sandwich mehak naz");

// sandwich ('capsicum','tomato','chiken')
// sandwich('beef', 'chees')
// sandwich('garlic chiken','mayo sauce')


// //task 45

// type car ={
//    manufacture:string
//    model:string
//    [key:string]: any;

// }
// function createCar(manufacture:string,model:string, optional: Record <string,any>):car{
//    return{
//       manufacture,
//       model,
//       ...optional
//    }
// }

// const mycar: car = createCar("toyota","corolla",{color:"silver", year: "2024"})
// console.log(mycar);


//alhamdulillah completed 45 assigment




























    





    


    
























