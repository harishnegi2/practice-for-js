// let data = [6,12,18,24,30,36];
// let position = 2;

// for(let i=position; i<data.length-1; i++)
//     {
//         data[i]=data[i+1];
//     }
//     data.length =data.length-1;
//     console.log(data);




//      Delete Element

function removeEl() {
    let data = [6,12,18,24,30,36];
    let position = document.getElementById('position').value;
    position = parseInt(position)
    for(let i=position; i<data.length-1; i++)
        {
            data[i]=data[i+1];
        }
        data.length =data.length-1;
        console.log(data);
}