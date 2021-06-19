// part 1
// document.getElementById('first-class-increase').addEventListener('click', function(){
//     const firstClassInput = document.getElementById('first-class-count');
//     const firstClassCount = parseInt(firstClassInput.value);
//     const firstClassNewCount = firstClassCount + 1;
//     firstClassInput.value = firstClassNewCount;
// })
// document.getElementById('first-class-decrease').addEventListener('click', function(){
//     const firstClassInput = document.getElementById('first-class-count');
//     const firstClassCount = parseInt(firstClassInput.value);
//     const firstClassNewCount = firstClassCount - 1;
//     firstClassInput.value = firstClassNewCount;
// })

//  /  /  /   With function   /  /  /  //
// part 2
// document.getElementById('first-class-increase').addEventListener('click', function(){
//     handleTicketBook(true);
// })
// document.getElementById('first-class-decrease').addEventListener('click', function(){
//     handleTicketBook(false);
// })

// function handleTicketBook(isIncrease){
//         const firstClassInput = document.getElementById('first-class-count');
//         const firstClassCount = parseInt(firstClassInput.value);
//         let firstClassNewCount = firstClassCount;
//         if(isIncrease == true){
//             firstClassNewCount = firstClassCount + 1;
//         }
//         if(isIncrease == false && firstClassNewCount > 0){
//             firstClassNewCount = firstClassCount - 1;
//         }
//         firstClassInput.value = firstClassNewCount;
// }

// part - 3   // main part // // // //
document.getElementById('form-confirmation').style.display = 'none';
document.getElementById('first-class-increase').addEventListener('click', function(){
    handleTicketBook('first-class', true);
})
document.getElementById('first-class-decrease').addEventListener('click', function(){
    handleTicketBook('first-class', false);
})

function handleTicketBook(product, isIncrease){
        const ticketInput = document.getElementById(product + '-count');
        const ticketCount = parseInt(ticketInput.value);
        let newCount = ticketCount;
        if(isIncrease == true){
            newCount = ticketCount + 1;
        }
        if(isIncrease == false && newCount > 0){
           newCount = ticketCount - 1;
        }
        ticketInput.value = newCount;

        calculateTotal();
}

function calculateTotal(){
    const economyInput = document.getElementById('economy-count');
    const economyCount = parseInt(economyInput.value);

    const ticketInput = document.getElementById('first-class-count');
    const ticketCount = parseInt(ticketInput.value);

    const totalPrice = economyCount * 100 + ticketCount * 150;
    document.getElementById('sub-total').innerText = '$' + totalPrice;
    
    const tax = Math.round(totalPrice * 0.1);
    const totalAmount = tax + totalPrice;

    document.getElementById('tax-amount').innerText = '$' + tax;
    document.getElementById('total-amount').innerText = '$' + totalAmount;
}

document.getElementById('book-now').addEventListener("click", function(){
    document.getElementById('form-confirmation').style.display = 'block';
    document.getElementById('order-form').style.display = 'none';
})
document.getElementById('book-again').addEventListener("click", function(){
    document.getElementById('form-confirmation').style.display = 'none';
    document.getElementById('order-form').style.display = 'block';
})