function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();
     
//function transfer_currency(){
//	let _address = document.getElementById("transfer_address").value;
//    let _amount = document.getElementById("transfer_amount").value;
//    let currency = document.getElementById("main_currency").innerText;
//
//    let result = "Sending " + _amount + " " + currency+" to " + _address;
//	alert(result);
//}
//
//function transfer_currency_erc(){
//	let _address = document.getElementById("transfer_address_erc").value;
//    let _amount = document.getElementById("transfer_amount_erc").value;
//    let currency = document.getElementById("main_currency_erc").innerText;
//
//    let result = "Sending " + _amount + " " + currency+" to " + _address;
//	alert(result);
//}


/*******************************Подключение к метамаск**********************************************/
// let send_button = document.getElementById("send_button");

// let initialization = false;
// let ether;

// let idAddress = document.getElementById("address");
// let idBalans = document.getElementById("balance");

// send_button.addEventListener("click", async () => {
//     await init();
//     //console.log(account);
    
//     let balanse = await ether.request({
//         method: 'eth_getBalance',
//         params: [account]
//     });
//     let bal = (parseInt(balanse, 16) / 10 ** 18).toFixed(4);
//     idBalans.innerHTML = bal;
//     idAddress.innerHTML = account;
    
//     let Exit = await window.ethereum.request({
//     method: "eth_requestAccounts",
//     params: [account]
// });
// });

// let init = async () => {
    
//     if(window.ethereum){
//         ether = window.ethereum;
//         const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
//             .catch((err) => {
//             if (err.code === 4001) {
//                 console.log('Please connect to MetaMask.');
//             } else {
//                 console.error(err);
//             }
//         });
//         account = accounts[0];
//         initialization = true;
        
        
//     }else{
//         console.log('установите метамаск');
//     }
// }
/*****************************************************************************/
let send_button = document.getElementById("send_button");

let idAddress = document.getElementById("address");
let idBalans = document.getElementById("balance");
let account = '0xEf31f3F748cA2e2C5006a03032861C783e5a146f';

web3 = new Web3(new Web3.providers.HttpProvider("https://sepolia.infura.io/v3/df9f3f829d434d08bf57348289f6720b"));

//web3.eth.getBlockNumber().then(console.log);
//console.log(web3.eth.accounts);

async function Balance() {

    let balance = await web3.eth.getBalance(account);
    let result = web3.utils.fromWei(balance, 'ether');
    idBalans.innerHTML = result.substr(0, 6);
}



send_button.addEventListener("click", async () => {
    await Balance();
    idAddress.innerHTML = account;
});



















