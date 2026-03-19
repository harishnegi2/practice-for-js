// Function callbacks for API calls

//  function definitions for API calls                  (cbfn=callBackFunction)
function getUserInfo(object,cbfn){                  //object and cbfn is a formal argument
    
                                                    // let creat xhr object fromXMLHttpRequest class
                                                   // let object = new className();    
    let xhr = new XMLHttpRequest();
    

                                                    // js api use 2 methods > 1.xhr.open() and 2.xhr.send()
    
                                                    // 1. open() method to initialize the request   
    xhr.open(object.method,object.url);              // true for asynchronous request
    xhr.send();                                     // 2. send() method to send the request
    xhr.onload = function(){
        console.log(xhr.responseText);
        
    }
    
    
    cbfn(object); //cbfn is a call back function
}

// function calling
getUserInfo({url:'https://jsonplaceholder.typicode.com/users',method:"GET"},function(response){
    console.log(response);
    
});







// function getUserInfo(object,cbfn){                 
                                  
//     let xhr = new XMLHttpRequest();   
//     xhr.open(obejct.method,obejct.url);              
//     xhr.send();                                    
//     xhr.onload = function(){
//         console.log(xhr.responseText);
        
//     }
    
    
//     cbfn(obejct); 
// }

// getUserInfo({url:'https://jsonplaceholder.typicode.com/users',method:"GET"},function(response){
//     console.log(response);
    
// });