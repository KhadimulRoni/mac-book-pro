// -----Extra memory cost------
const memoryBtn = document.getElementById('memory-btn').addEventListener('click',function(){
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = 180;
});

// ------Extra storage cost-------
const ssd512Gb = document.getElementById('ssd-512gb').addEventListener('click',function(){
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = 100;
});

const ssd1Tb = document.getElementById('ssd-1tb').addEventListener('click', function(){
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = 180;
});

// ------Delivery cost -----
const regularDelivery = document.getElementById('regular-delivery').addEventListener('click', function(){
    const deliveryCharge = document.getElementById('delivery-charge');
    deliveryCharge.innerText = 20;
});

// ---- Total calculation -----
function calculateTotal(){

}
