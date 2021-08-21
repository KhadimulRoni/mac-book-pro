// -----Extra memory cost------
document.getElementById('btn-8gb').addEventListener('click',function(){
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = '0';
    calculateTotal()
    
});
document.getElementById('btn-16gb').addEventListener('click',function(){
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = 180 ;
    calculateTotal()
});

// ------Extra storage cost-------
document.getElementById('ssd-256gb').addEventListener('click', function(){
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = 0;
    calculateTotal()
})
document.getElementById('ssd-512gb').addEventListener('click',function(){
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = '100';
    calculateTotal()
});

document.getElementById('ssd-1tb').addEventListener('click', function(){
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = '180';
    calculateTotal()
});

// ------Delivery cost -----
document.getElementById('free-delivery').addEventListener('click', function(){
    const deliveryCharge = document.getElementById('delivery-charge');
    deliveryCharge.innerText = '0';
    calculateTotal()
});
document.getElementById('regular-delivery').addEventListener('click', function(){
    const deliveryCharge = document.getElementById('delivery-charge');
    deliveryCharge.innerText = '20';
    calculateTotal()
});

// ---- Total calculation -----
function calculateTotal(){
    const bestPrice = document.getElementById('best-price').innerText;
    const updateMemoryCost = document.getElementById('memory-cost').innerText;
    const updateStorageCost = document.getElementById('storage-cost').innerText;
    const updateDeliveryCharge = document.getElementById('delivery-charge').innerText;
    const total = parseInt(bestPrice) + parseInt(updateMemoryCost) + parseInt(updateStorageCost) + parseInt(updateDeliveryCharge) ;
    document.getElementById('total').innerText = total ;

    // -------Final Total -------
    const finalTotal = document.getElementById('final-total');
    finalTotal.innerText = total;
    
};

// ------cupon apply------
document.getElementById('cupon-btn').addEventListener('click',function(){
    const cuponField = document.getElementById('cupon-field');
    const applyCupon = cuponField.value;
    cuponField.value = '';

    if(applyCupon == "stevekaku"){
        const total = document.getElementById('total').innerText;
        const discountFinalTotal = document.getElementById('final-total');
        discountFinalTotal.innerText = parseInt(total*0.8);    
    }
    else{
        const total = document.getElementById('total').innerText;
        const discountFinalTotal = document.getElementById('final-total');
        discountFinalTotal.innerText = parseInt(total);
    }
});


