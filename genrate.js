function* simpleGenrate(){
    let i =10;
    while (true) {
        i++
        yield i;
        
    }
    
}


let sG =simpleGenrate()


function getNewId(){
    // console.log(sG.next());
    document.getElementById('newId').innerText=sG.next().value;
}



