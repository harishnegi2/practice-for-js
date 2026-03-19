// Q. Write a function to flatten an array of nested arrays into a single array?


// function flattenArray(arr) {
    //     return arr.reduce((acc, curr) => {
        //       return Array.isArray(curr) ? acc.concat(flattenArray(curr)) : acc.concat(curr);
        //     }, []);
        //   }
        
        //   // Example usage
        //   console.log(flattenArray([1, [2, [3, [4]]], 5])); // [1, 2, 3, 4, 5]



        
 // array mrthods

//  const arr = [5,9,2,3,4,6,12]
//  console.log(typeof arr[5]);
//  const arr2 = [1,0,7,11,2]

// arr.push(123)
// console.log(arr);           //1
// arr.pop()
// console.log(arr);           //2
// arr.unshift(90);
// console.log(arr);           //3

// console.log("A", arr);
 
// const myn1 = arr.slice(1,3);
// console.log(myn1);
// console.log("B", arr);

// const myn2 = arr.splice(1,3);
// console.log("C", arr);;
// console.log(myn2);



// let data = [2,5,9,7,4,6,1,3,8,0];

// for (let i = 0; i < data.length; i++) 
//     {
//         console.log(`Array is ${i} is ${data[i]}`);
//     } 

// let x=4;
// console.log(data[x]);


// let x=5;
// console.log(data[x]);

// function getElement()
// {
//     let el = document.getElementById('element').value
//     if (el<data.length) {
//         alert(data[el])
//     }else{  
//         alert("not found")
//     }
    
// }



// let num =[70,50,60,40,20];
// let nl =55;
// let position = 2;
// for (let i = num.length-1; i>=0;i--) {
//     console.warn(num[i]);

//     if (i>=position) {
//         num[i+1] = num+[i];
//         if (i==position) {
//             num[i]=newEl;
            
//         }   
//     }
// }
// console.log(num);


// function insertEl()
// {
//     let num =[70,50,60,40,20];
//     let nl = document.getElementById('new-position').value;
//     nl=parseInt(nl)
//     let position = document.getElementById('position').value;
//     console.log(num);
    
//     for (let i = num.length-1; i>=0;i--) {
//         console.log(num[i]);

//         if (i >= position) {
//             num[i+1] = num+[i];
//             if (i==position) {
//                 num[i]=nl;
//             }    
//         }
//     }
//     console.log(num);
// }



//   js method to insert element.

// let item = [10,20,40,50]
// console.log(item);        

// item.splice(2,0,30);
// console.log(item);



// let item = [20,58,45,96,74,12,36];       //searching element in a
// let ss =12;
// let index = undefined;

// for (let i = 0; i<item.length-1; i++) {
    // console.log(item[i]);
//     if (item[i]==ss) 
//         {
//             index=i
//         } 
// }
// console.log(index);

// item.splice(3,1);  //splice(number of index,delate item no.

// console.log(item);








// Watch js

// let hr = document.getElementById("Hour");
// let min = document.getElementById("Min");
// let sec = document.getElementById("Sec");

// function displayTime(){
//     let date = new Date();
    
//     // getting hour,mins,sec from date
//     let hh = date.getHours();
//     let mm = date.getMinutes();
//     let ss = date.getSeconds();

//     let hRotation = 30*hh + mm/2;
//     let mRotation = 6*mm;
//     let sRotation = 6*ss;

//     hr.style.transform =`rotate(${hRotation}deg)`;
//     min.style.transform =`rotate(${mRotation}deg)`;
//     sec.style.transform =`rotate(${sRotation}deg)`;
    
// }
// setInterval(displayTime,1000);






// qr code
// const qrText = document.getElementById('qr-text');
// const sizes = document.getElementById('sizes');
// const generateBtn = document.getElementById('generateBtn');
// const downloadBtn = document.getElementById('downloadBtn');
// const qrContainer = document.querySelector('.qr-body');

// let size = sizes.value;
// generateBtn.addEventListener('click',(e)=>{
//     e.preventDefault();
//     isEmptyInput();
// });

// sizes.addEventListener('change',(e)=>{
//     size = e.target.value;
//     isEmptyInput();
// });

// downloadBtn.addEventListener('click', ()=>{
//     let img = document.querySelector('.qr-body img');

//     if(img !== null){
//         let imgAtrr = img.getAttribute('src');
//         downloadBtn.setAttribute("href", imgAtrr);
//     }
//     else{
//         downloadBtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
//     }
// });
// function isEmptyInput(){
//     // if(qrText.value.length > 0){
//     //     generateQRCode();
//     // }
//     // else{
//     //     alert("Enter the text or URL to generate your QR code");
//     // }
//     qrText.value.length > 0 ? generateQRCode() : alert("Enter the text or URL to generate your QR code");;
// }

// function generateQRCode(){
//     qrContainer.innerHTML = "";
//     new QRCode(qrContainer,{
//         text:qrText.value,
//         height:sizes,
//         width:sizes,
//         colorLight:"#fff",
//         colorDark:"#000",
    
//     });
// }                    end



            // function method
  
// function myName() {
//     console.log("H");
//     console.log("A");
//     console.log("R");
//     console.log("I");
//     console.log("S");
//     console.log("H");   
// }
// myName()
 
// function addTwoNumber(a,b) {
//     console.log(a+b);
// }


function addTwoNumber(a,b) {
    let result = a + b
    return result;
}

const result = addTwoNumber(5,3);
console.log("Result: ", result);




// function nAn(parameter){
//     console.log(p);
// }
// nAn(argument);
