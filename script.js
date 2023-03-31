const title = document.querySelector('.container span');
const container = document.querySelector('.container');
let initial = document.querySelectorAll('.container p');
const back = document.querySelector('.back img');

const data = ['Initializing Hack Program...', 'Connecting to Server 1...', 'Connnection Failed', 'Connecting to Server 2...', 'Connected Successfully', 'Getting access to IPV4 address...', 'Access granted', 'Getting device access...', 'Access Denied', 'Trying Brute force...', 'Disabling Protection...', 'Turning off firewell...', 'Security Turned off successfully','Getting access to device again...', 'Access granted', 'Accessing BIOS...', 'Getting kernel information...','Finding Username...', 'Username found : Arvind', 'Matching password hash with 4.6 Trillian hashes...', 'No match found', 'Matching password hash with another 2.5 billion hashes...', 'Password match found', 'Password: "Th******pa****rd"', 'Hacking Successful']

const animate = async () => {
    setInterval(() => {
        title.classList.toggle('animateTitle')
        back.classList.toggle('animateImg')
    }, 4000);

}
const scrollToBottom = async ()=>{
    container.addEventListener('scroll', ()=>{
        return
    })
    container.scrollTop = container.scrollHeight;
}
const addNewP = async (inrText)=>{
    let htmlData = inrText;
    let elementP = await document.createElement('p');
    elementP.innerHTML = await htmlData;
    container.insertAdjacentElement('beforeend',elementP);
    initial = document.querySelectorAll('.container p');
    await scrollToBottom();
    return elementP.innerHTML;
}
const increasingPercent = async (getP,txt)=>{
    let incre = 1;
    let i = 0;
    let promise = await new Promise((resolve, reject) => {
        setInterval(async () => {
            if (i <= 100) {
                getP.innerHTML = await `<pre>${txt}           ${i}%</pre>`
                i = i + incre
            }
        }, 100);
        setTimeout(() => {
            resolve('initialized successfully')
        }, 11000);
    });
    return promise
}

const initialization = async () => {
    let init = initial[0].innerHTML
    init = data[0];
    await increasingPercent(initial[0],init);
}

const connectToServer = async ()=>{
    let ser1 = await addNewP(data[1]);
    await increasingPercent(initial[1],ser1);
    await addNewP(data[2]);
    initial[2].classList.add('color-red');
    let ser2 = await addNewP(data[3]);
    await increasingPercent(initial[3],ser2);
    await addNewP(data[4]);
    initial[4].classList.add('color-green');
}
const accessingInfo = async ()=>{
    let ip = await addNewP(data[5]);
    await increasingPercent(initial[5], ip);
    await addNewP(data[6]);
    initial[6].classList.add('color-green');
    let dInfo1 = await addNewP(data[7]);
    await increasingPercent(initial[7], dInfo1);
    await addNewP(data[8]);
    initial[8].classList.add('color-red');
    let trBr = await addNewP(data[9]);
    await increasingPercent(initial[9], trBr);
    let DisPro = await addNewP(data[10]);
    await increasingPercent(initial[10], DisPro);
    let turFwell = await addNewP(data[11]);
    await increasingPercent(initial[11], turFwell);
    await addNewP(data[12]);
    initial[12].classList.add('color-green');
    let dInfo2 = await addNewP(data[13]);
    await increasingPercent(initial[13], dInfo2);
    await addNewP(data[14]);
    initial[14].classList.add('color-green');
    let accBIOS = await addNewP(data[15]);
    await increasingPercent(initial[15], accBIOS);
    let getKer = await addNewP(data[16]);
    await increasingPercent(initial[16], getKer);
    let findUser = await addNewP(data[17]);
    await increasingPercent(initial[17], findUser);
    await addNewP(data[18]);
    initial[18].classList.add('color-green');
    let matchPass1 = await addNewP(data[19]);
    await increasingPercent(initial[19], matchPass1);
    await addNewP(data[20]);
    initial[20].classList.add('color-red');
    let matchPass2 = await addNewP(data[21]);
    await increasingPercent(initial[21], matchPass2);
    await addNewP(data[22]);
    initial[22].classList.add('color-green');
    await addNewP(data[23]);
    initial[23].classList.add('color-green');
    await addNewP(data[24]);
    initial[24].classList.add('color-green');

}



const runFunctions = async ()=>{
    await animate();
    await initialization();
    await connectToServer();
    await accessingInfo();
    setTimeout(() => {
        location.reload();
    }, 20000);
}


runFunctions();