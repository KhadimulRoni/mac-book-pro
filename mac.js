// -----Extra memory cost------
const memoryBtn = document.getElementById('memory-btn').addEventListener('click',function(){
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText =180; 
    const total = document.getElementById('total');
    total.innerText = 1299 + parseInt(memoryCost.innerText) ;
});

// ------Extra storage cost-------
const ssd512gb = document.getElementById('ssd-512gb').addEventListener('click',function(){
    const storageCost = 
})