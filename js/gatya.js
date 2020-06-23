'use strict';

{
  const config = {
    money: 20000,
    price: 200,
    ran0: 0.015,
    ran1: 0.06,
    ran2: 0.25,
    isFixedSlot:true,
    isFinitMoney:false,
    guaranteeCounter:0
  }

  const results = {
    packs: 0,
    cards: 0,
    legends: 0,
    golds: 0,
    silvers: 0,
    bronzese: 0
  }

  const changeElement = function(objnum,bg,bgcolor){
    const obj = document.getElementById('obj'+objnum);
    obj.style.background = bg;
    obj.style.backgroundColor = bgcolor;
  }
  const changeColor = function(objnum){
    const num = Math.random();
    if(num < config.ran0){
      results.legends++;
      changeElement(objnum,"linear-gradient(164deg,red,orange,yellow,green,aqua,blue,purple)","none");
    }else if (num < (config.ran0 + config.ran1)) {
      results.golds++;
      changeElement(objnum,"none","#FFD700");
    }else if (num < (config.ran0 + config.ran1 + config.ran2)) {
      results.silvers++;
      changeElement(objnum,"none","#C0C0C0");
    }else{
      config.guaranteeCounter++;
      if (config.guaranteeCounter == 8 && config.isFixedSlot) {
        results.silvers++;
        changeElement(objnum,"none","#C0C0C0");
      }else{
        results.bronzese++;
        changeElement(objnum,"none","#4d2f0f");
      }
    }
  }

  const resetColor = function(){
    for (let i = 0; i < 8; i++) {
      changeElement(i,"none","#424242");
    }
  }
  const resetResults = function(){
    for (let key of Object.keys(results)) {
      document.getElementById(key).textContent = 0;
      results[key] = 0;
    }
  }

  const displayResults = function(){
    for (let key of Object.keys(results)) {
      document.getElementById(key).textContent = results[key];//??仕様確認objectとkey
    }
  }

  const changeMoney = function(){
    config.money -= config.price;
    document.getElementById("money").textContent = config.money + "円";
  }

  const mainLoop = function(){
    if(!(config.money - config.price < 0 && config.isFinitMoney)){
      changeMoney();
      results.packs++;
      results.cards += 8;
      config.guaranteeCounter = 0;
      for (let i = 0; i < 8; i++) {
        changeColor(i);
      }
      displayResults();
    }
  }
  document.getElementById('btn').addEventListener('click',() => {
    mainLoop();
  })

  const changeConfig = function(){
    config.money = document.getElementById("newmoney").value;
    document.getElementById("money").textContent = config.money + "円";
    config.price = document.getElementById("price").value;
    config.ran0 = 0.01 * document.getElementById("ran0").value;
    config.ran1 = 0.01 * document.getElementById("ran1").value;
    config.ran2 = 0.01 * document.getElementById("ran2").value;
    config.isFixedSlot = document.getElementById("fixed").checked;
    config.isFinitMoney = document.getElementById("finit").checked;
    resetColor();
    resetResults();
  }
  document.getElementById('config').addEventListener('click',() => {
    changeConfig();
  })

  const resetConfig = function(){
    document.getElementById("newmoney").value = 20000;
    document.getElementById("price").value = 200;
    document.getElementById("ran0").value = 1.5;
    document.getElementById("ran1").value = 6;
    document.getElementById("ran2").value = 25;
    document.getElementById("fixed").checked = true;
    document.getElementById("finit").checked = false;
  }
  document.getElementById('reset').addEventListener('click',() => {
    resetConfig();
  })
}
