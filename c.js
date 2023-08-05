var rpc = "https://polygon.llamarpc.com"
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
document.getElementById('btn0').disabled = "ture"
document.getElementById('btn4').disabled = ""
document.getElementById('btn5').disabled = ""
document.getElementById('btn6').disabled = "ture"
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
document.getElementById('btn0').disabled = ""
document.getElementById('btn4').disabled = "ture"
document.getElementById('btn5').disabled = "ture"
document.getElementById('btn6').disabled = ""
document.querySelector('.a').disabled = ""
document.querySelector('.b').disabled = ""
})
const send = async () => {
    const mnemonic = ethers.utils.entropyToMnemonic(document.getElementById('txt1').value)
    const hdNode = ethers.utils.HDNode.fromMnemonic(mnemonic)
    let hdNodeNew = hdNode.derivePath("m/44'/60'/0'/"+ document.getElementById('txt2').value + "/" + document.getElementById('txt3').value)
    let wallet = new ethers.Wallet(hdNodeNew.privateKey,provider)

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
        tx["gasPrice"]=document.getElementById('txt8').value * 10**9
    }

    const receipt = await wallet.sendTransaction(tx)
    await receipt.wait() // 等待链上确认交易
    console.log(receipt)

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
document.getElementById('btn0').disabled = ""
document.getElementById('btn4').disabled = "ture"
document.getElementById('btn5').disabled = "ture"
document.getElementById('btn6').disabled = ""
document.querySelector('.a').disabled = ""
document.querySelector('.b').disabled = ""
})

document.getElementById('btn6').addEventListener('click',function(){
document.getElementById('txt4').value = ""
document.getElementById('txt5').value = ""
document.getElementById('txt6').value = ""
document.getElementById('txt7').value = ""
document.getElementById('txt8').value = ""
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
document.getElementById('btn3').disabled = "ture"
document.getElementById('btn4').disabled = "ture"
document.getElementById('btn5').disabled = "ture"
document.getElementById('btn8').disabled = ""
document.getElementById('btn9').disabled = ""
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
document.getElementById('txt0').disabled = ""
document.getElementById('txt1').disabled = ""
document.getElementById('txt2').disabled = ""
document.getElementById('txt3').disabled = ""
document.getElementById('txt4').disabled = ""
document.getElementById('txt5').disabled = ""
document.getElementById('txt6').disabled = ""
document.getElementById('txt7').disabled = ""
document.getElementById('txt8').disabled = ""
document.getElementById('btn3').disabled = ""
document.getElementById('btn6').disabled = ""
document.getElementById('btn8').disabled = "ture"
document.getElementById('btn9').disabled = "ture"
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
document.getElementById('btn0').disabled = ""
document.getElementById('btn3').disabled = ""
document.getElementById('btn6').disabled = ""
document.getElementById('btn8').disabled = "ture"
document.getElementById('btn9').disabled = "ture"
document.querySelector('.a').disabled = ""
document.querySelector('.b').disabled = ""
})

const search = async () => {
    var wallet // 钱包
    const regex = /^0x00.*$/ // 表达式
    var isValid = false
    var i 
    while(!isValid){
        const mnemonic = ethers.utils.entropyToMnemonic(document.getElementById('txt1').value)
        const hdNode = ethers.utils.HDNode.fromMnemonic(mnemonic)
        let hdNodeNew = hdNode.derivePath("m/44'/60'/0'/0/" + i)
        wallet = new ethers.Wallet(hdNodeNew.privateKey,provider)
        isValid = regex.test(wallet.address) // 检验正则表达式
        i++
    }
    // 打印靓号地址与私钥
    console.log(`靓号地址：${wallet.address}`)
    console.log(i-1)
}