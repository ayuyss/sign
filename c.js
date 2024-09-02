var rpc = "https://endpoints.omniatech.io/v1/matic/mainnet/public"
var web = "https://polygonscan.com/address/"

document.querySelectorAll('[name=chain]').forEach(input => input.addEventListener('change',function(){
rpc = document.querySelector('[name=chain]:checked').value
web = document.querySelector('[name=chain]:checked').id
provider = new ethers.providers.JsonRpcProvider(rpc)
}))

var provider = new ethers.providers.JsonRpcProvider(rpc)

document.getElementById('btn0').addEventListener('click',function(){
document.getElementById('txt1').value=ethers.utils.id(document.getElementById('txt0').value)
})

document.getElementById('btn2').addEventListener('click',function(){
call()
})
const call = async () => {
    const mnemonic = ethers.utils.entropyToMnemonic(document.getElementById('txt1').value)
    const hdNode = ethers.utils.HDNode.fromMnemonic(mnemonic)
    let hdNodeNew = hdNode.derivePath("m/44'/60'/0'/"+ document.getElementById('txt2').value + "/" + document.getElementById('txt3').value)
    document.getElementById('address').innerHTML = hdNodeNew.address
    const balance = await provider.getBalance(hdNodeNew.address)    
    document.getElementById('coin').innerHTML = ethers.utils.formatEther(balance)
    document.getElementById('a').href = web + hdNodeNew.address
    document.querySelector('.nonce').innerHTML = await provider.getTransactionCount(hdNodeNew.address)
}

document.getElementById('btn3').addEventListener('click',function(){
document.getElementById('txt0').disabled = "ture"
document.getElementById('txt1').disabled = "ture"
document.getElementById('txt2').disabled = "ture"
document.getElementById('txt3').disabled = "ture"
document.getElementById('txt4').disabled = "ture"
document.getElementById('txt5').disabled = "ture"
document.getElementById('txt6').disabled = "ture"
document.getElementById('txt7').disabled = "ture"
document.getElementById('txt8').disabled = "ture"
document.getElementById('txt9').disabled = "ture"
document.getElementById('txt10').disabled = "ture"
document.getElementById('btn0').disabled = "ture"
document.getElementById('btn4').disabled = ""
document.getElementById('btn5').disabled = ""
document.getElementById('btn6').disabled = "ture"
document.getElementById('btn10').disabled = "ture"
document.querySelector('.a').disabled = "ture"
document.querySelector('.b').disabled = "ture"
})

document.getElementById('btn4').addEventListener('click',function(){
send()
document.getElementById('txt0').disabled = ""
document.getElementById('txt1').disabled = ""
document.getElementById('txt2').disabled = ""
document.getElementById('txt3').disabled = ""
document.getElementById('txt4').disabled = ""
document.getElementById('txt5').disabled = ""
document.getElementById('txt6').disabled = ""
document.getElementById('txt7').disabled = ""
document.getElementById('txt8').disabled = ""
document.getElementById('txt9').disabled = ""
document.getElementById('txt10').disabled = ""
document.getElementById('btn0').disabled = ""
document.getElementById('btn4').disabled = "ture"
document.getElementById('btn5').disabled = "ture"
document.getElementById('btn6').disabled = ""
document.getElementById('btn10').disabled = ""
document.querySelector('.a').disabled = ""
document.querySelector('.b').disabled = ""
})
const send = async () => {
    const mnemonic = ethers.utils.entropyToMnemonic(document.getElementById('txt1').value)
    const hdNode = ethers.utils.HDNode.fromMnemonic(mnemonic)
    let hdNodeNew = hdNode.derivePath("m/44'/60'/0'/"+ document.getElementById('txt2').value + "/" + document.getElementById('txt3').value)
    let wallet = new ethers.Wallet(hdNodeNew.privateKey,provider)

    try{
    tx = {
        to: document.getElementById('txt4').value,
        data: document.getElementById('txt5').value
    }

    if(document.getElementById('txt6').value != ""){
        tx["value"]=ethers.utils.parseEther(document.getElementById('txt6').value)
    }
    if(document.getElementById('txt7').value != ""){
        tx["nonce"]=document.getElementById('txt7').value
    }
    if(document.getElementById('txt8').value != ""){
        tx["maxFeePerGas"]=document.getElementById('txt8').value * 10**9
    }
    if(document.getElementById('txt9').value != ""){
        tx["maxPriorityFeePerGas"]=document.getElementById('txt9').value * 10**9
    }
    if(document.getElementById('txt10').value != ""){
        tx["gasLimit"]=document.getElementById('txt10').value
    }

    const receipt = await wallet.sendTransaction(tx)
    document.getElementById('hash').innerHTML = receipt.hash
    document.getElementById('b').href = "https://polygonscan.com/tx/" + receipt.hash
    await receipt.wait() // 等待链上确认交易
    console.log(receipt)
    }
    catch (err) {
    document.getElementById('hash').innerHTML = err
    }

    const balance = await provider.getBalance(hdNodeNew.address)
    document.getElementById('coin').innerHTML = ethers.utils.formatEther(balance)
    document.querySelector('.nonce').innerHTML = await provider.getTransactionCount(hdNodeNew.address)
}

document.getElementById('btn5').addEventListener('click',function(){
document.getElementById('txt0').disabled = ""
document.getElementById('txt1').disabled = ""
document.getElementById('txt2').disabled = ""
document.getElementById('txt3').disabled = ""
document.getElementById('txt4').disabled = ""
document.getElementById('txt5').disabled = ""
document.getElementById('txt6').disabled = ""
document.getElementById('txt7').disabled = ""
document.getElementById('txt8').disabled = ""
document.getElementById('txt9').disabled = ""
document.getElementById('txt10').disabled = ""
document.getElementById('btn0').disabled = ""
document.getElementById('btn4').disabled = "ture"
document.getElementById('btn5').disabled = "ture"
document.getElementById('btn6').disabled = ""
document.getElementById('btn10').disabled = ""
document.querySelector('.a').disabled = ""
document.querySelector('.b').disabled = ""
})

document.getElementById('btn6').addEventListener('click',function(){
document.getElementById('txt4').value = ""
document.getElementById('txt5').value = ""
document.getElementById('txt6').value = ""
document.getElementById('txt7').value = ""
document.getElementById('txt8').value = ""
document.getElementById('txt9').value = "30"
document.getElementById('txt10').value = ""
document.getElementById('txt11').value = ""
document.getElementById('hash').innerHTML = ""
})

document.getElementById('btn7').addEventListener('click',function(){
document.getElementById('txt0').disabled = "ture"
document.getElementById('txt1').disabled = "ture"
document.getElementById('txt2').disabled = "ture"
document.getElementById('txt3').disabled = "ture"
document.getElementById('txt4').disabled = "ture"
document.getElementById('txt5').disabled = "ture"
document.getElementById('txt6').disabled = "ture"
document.getElementById('txt7').disabled = "ture"
document.getElementById('txt8').disabled = "ture"
document.getElementById('txt9').disabled = "ture"
document.getElementById('txt10').disabled = "ture"
document.getElementById('btn3').disabled = "ture"
document.getElementById('btn4').disabled = "ture"
document.getElementById('btn5').disabled = "ture"
document.getElementById('btn8').disabled = ""
document.getElementById('btn9').disabled = ""
document.getElementById('btn10').disabled = "ture"
document.getElementById('hash').innerHTML = ""
})

document.getElementById('btn8').addEventListener('click',function(){
document.getElementById('txt0').value = ""
document.getElementById('txt1').value = ""
document.getElementById('txt2').value = ""
document.getElementById('txt3').value = ""
document.getElementById('txt4').value = ""
document.getElementById('txt5').value = ""
document.getElementById('txt6').value = ""
document.getElementById('txt7').value = ""
document.getElementById('txt8').value = ""
document.getElementById('txt9').value = "30"
document.getElementById('txt10').value = ""
document.getElementById('txt11').value = ""
document.getElementById('txt12').value = ""
document.getElementById('txt0').disabled = ""
document.getElementById('txt1').disabled = ""
document.getElementById('txt2').disabled = ""
document.getElementById('txt3').disabled = ""
document.getElementById('txt4').disabled = ""
document.getElementById('txt5').disabled = ""
document.getElementById('txt6').disabled = ""
document.getElementById('txt7').disabled = ""
document.getElementById('txt8').disabled = ""
document.getElementById('txt9').disabled = ""
document.getElementById('txt10').disabled = ""
document.getElementById('btn3').disabled = ""
document.getElementById('btn6').disabled = ""
document.getElementById('btn8').disabled = "ture"
document.getElementById('btn9').disabled = "ture"
document.getElementById('btn10').disabled = ""
document.getElementById('hash').innerHTML = ""
document.getElementById('a').href =""
document.getElementById('address').innerHTML = ""
document.getElementById('coin').innerHTML =""
document.querySelector('.a').disabled = ""
document.querySelector('.b').disabled = ""
})

document.getElementById('btn9').addEventListener('click',function(){
document.getElementById('txt0').disabled = ""
document.getElementById('txt1').disabled = ""
document.getElementById('txt2').disabled = ""
document.getElementById('txt3').disabled = ""
document.getElementById('txt4').disabled = ""
document.getElementById('txt5').disabled = ""
document.getElementById('txt6').disabled = ""
document.getElementById('txt7').disabled = ""
document.getElementById('txt8').disabled = ""
document.getElementById('txt9').disabled = ""
document.getElementById('txt10').disabled = ""
document.getElementById('btn0').disabled = ""
document.getElementById('btn3').disabled = ""
document.getElementById('btn6').disabled = ""
document.getElementById('btn8').disabled = "ture"
document.getElementById('btn9').disabled = "ture"
document.getElementById('btn10').disabled = ""
document.querySelector('.a').disabled = ""
document.querySelector('.b').disabled = ""
})

document.getElementById('btn10').addEventListener('click',function(){
a=eval( '(' + document.getElementById('txt11').value + ')' ).sign
document.getElementById('txt4').value = a.to
document.getElementById('txt5').value = a.data
document.getElementById('txt6').value = ethers.utils.formatUnits(a.value)
document.getElementById('txt10').value = parseInt(a.gasLimit,16)
})

document.getElementById('btn11').addEventListener('click',function(){
document.getElementById('txt11').value=""
})

document.getElementById('btn12').addEventListener('click',function(){
document.getElementById('btn12').disabled = "ture"
document.getElementById('btn13').disabled = "ture"
document.getElementById('btn14').disabled = ""
document.getElementById('btn15').disabled = ""
})

document.getElementById('btn13').addEventListener('click',function(){
document.getElementById('txt12').value=""
})

var m
var a
var b
var c =[]
var d = []
var abi =[
    "function claim(address[],address[],uint256[],bytes32[][])"
]

document.getElementById('btn14').addEventListener('click',function(){
send2()
document.getElementById('btn12').disabled = ""
document.getElementById('btn13').disabled = ""
document.getElementById('btn14').disabled = "ture"
document.getElementById('btn15').disabled = "ture"
})

const send2 = async () => {
m=eval( '(' + document.getElementById('txt12').value + ')' ).method_params_list[3].value
a=eval( '(' + document.getElementById('txt12').value + ')' ).method_params_list[0].value
b=eval( '(' + document.getElementById('txt12').value + ')' ).method_params_list[1].value
c1=eval( '(' + document.getElementById('txt12').value + ')' ).method_params_list[2].value
for (let x = 0; x < c1.length; x++ ){
c[x]=ethers.utils.parseUnits(String(c1[x]),0)._hex
}
for (let z = 0; z < m.length; z++ ){
let d1=[]
for (let y = 0; y < m[z].length; y++ ){
d1[y]=ethers.utils.parseUnits(String(m[z][y][0]),0)._hex
for (let x = 1; x < m[z][y].length; x++ ){
d1[y]=d1[y]+ethers.utils.parseUnits(String(m[z][y][x]),0)._hex.slice(2)
}}
d[z]=d1
}
const mnemonic = ethers.utils.entropyToMnemonic(document.getElementById('txt1').value)
const hdNode = ethers.utils.HDNode.fromMnemonic(mnemonic)
let hdNodeNew = hdNode.derivePath("m/44'/60'/0'/"+ document.getElementById('txt2').value + "/" + document.getElementById('txt3').value)
let wallet = new ethers.Wallet(hdNodeNew.privateKey,provider)
const contract = new ethers.Contract("0x3Ef3D8bA38EBe18DB133cEc108f4D14CE00Dd9Ae", abi, wallet)
try{
    tx = {}
    if(document.getElementById('txt7').value != ""){
        tx["nonce"]=document.getElementById('txt7').value
    }
    if(document.getElementById('txt8').value != ""){
        tx["maxFeePerGas"]=document.getElementById('txt8').value * 10**9
    }
    if(document.getElementById('txt9').value != ""){
        tx["maxPriorityFeePerGas"]=document.getElementById('txt9').value * 10**9
    }
    if(document.getElementById('txt10').value != ""){
        tx["gasLimit"]=document.getElementById('txt10').value
    }
    const receipt = await contract.claim(a,b,c,d,tx)
    document.getElementById('hash').innerHTML = receipt.hash
    document.getElementById('b').href = "https://polygonscan.com/tx/" + receipt.hash
    await receipt.wait() // 等待链上确认交易
    console.log(receipt)
    }
    catch (err) {
    document.getElementById('hash').innerHTML = err
    }    
}

document.getElementById('btn15').addEventListener('click',function(){
document.getElementById('btn12').disabled = ""
document.getElementById('btn13').disabled = ""
document.getElementById('btn14').disabled = "ture"
document.getElementById('btn15').disabled = "ture"
})

document.getElementById('btn100').addEventListener('click',function(){
document.getElementById('txt5').value = ethers.utils.entropyToMnemonic(document.getElementById('txt1').value)
})
