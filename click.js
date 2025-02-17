// Open camera and capture image

const video = document.getElementById('video');
const capturebtn = document.getElementById('capturebtn');
const canvas = document.getElementById('canvas');
const img1 = document.getElementById('img1');

async function startCam() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: false});  //ture = camera on, false = camera off
        video.srcObject = stream;
        video.play();
    } catch (err) {
        console.error(err);
    }
}

    capturebtn.addEventListener('click',()=>{
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const context = canvas.getContext('2d');
        context.drawImage(video,0,0,canvas.width,canvas.height);
        img.src = canvas.toDataURL('image/png');
        img.style.display = 'block';
    })

startCam();