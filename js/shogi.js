'use strict';

{
  //空白の定義
  const ___ = {
    element: document.getElementById("___"),
    isNotBlank: false,
  };
  //駒たちの定義
  //クラス、継承を調べる、また今度
  const to = {
    element: document.getElementById("to"),
    isNotBlank: true,
    isTurnPlayer: true,
    isEnemy: false,
    isMissile: false,
    isPromotable: false,
    canMove: [[-1,0],[-1,-1],[-1,1],[0,-1],[0,1],[1,0]]
  };
  const fu = {
    element: document.getElementById("fu"),
    isNotBlank: true,
    isTurnPlayer: true,
    isEnemy: false,
    isMissile: false,
    isPromotable: true,
    promoteTo: to,
    canMove:[[-1,0]]
  };
  const ny = {
    element: document.getElementById("ny"),
    isNotBlank: true,
    isTurnPlayer: true,
    isEnemy: false,
    isMissile: false,
    isPromotable: false,
    canMove: [[-1,0],[-1,-1],[-1,1],[0,-1],[0,1],[1,0]]
  };
  const ky = {
    element: document.getElementById("ky"),
    isNotBlank: true,
    isTurnPlayer: true,
    isEnemy: false,
    isMissile: true,
    isPromotable: true,
    moveType:"ky",
    promoteTo: ny,
    // canMove:[[-1,0],[-2,0],[-3,0],[-4,0],[-5,0],[-6,0],[-7,0],[-8,0],[-9,0]]
  };
  const nk = {
    element: document.getElementById("nk"),
    isNotBlank: true,
    isTurnPlayer: true,
    isEnemy: false,
    isMissile: false,
    isPromotable: false,
    canMove: [[-1,0],[-1,-1],[-1,1],[0,-1],[0,1],[1,0]]
  };
  const ke = {
    element: document.getElementById("ke"),
    isNotBlank: true,
    isTurnPlayer: true,
    isEnemy: false,
    isMissile: false,
    isPromotable: true,
    promoteTo: nk,
    canMove:[[-2,-1],[-2,1]]
  };
  const ng = {
    element: document.getElementById("ng"),
    isNotBlank: true,
    isTurnPlayer: true,
    isEnemy: false,
    isMissile: false,
    isPromotable: false,
    canMove: [[-1,0],[-1,-1],[-1,1],[0,-1],[0,1],[1,0]]
  };
  const gi = {
    element: document.getElementById("gi"),
    isNotBlank: true,
    isTurnPlayer: true,
    isEnemy: false,
    isMissile: false,
    isPromotable: true,
    promoteTo: ng,
    canMove:[[-1,0],[-1,-1],[-1,1],[1,-1],[1,1]]
  };

  const ki = {
    element: document.getElementById("ki"),
    isNotBlank: true,
    isTurnPlayer: true,
    isEnemy: false,
    isMissile: false,
    isPromotable: false,
    canMove: [[-1,0],[-1,-1],[-1,1],[0,-1],[0,1],[1,0]]
  };
  const um = {
    element: document.getElementById("um"),
    isNotBlank: true,
    isTurnPlayer: true,
    isEnemy: false,
    isMissile: true,
    moveType:"ka",
    isPromotable: false,
    // canMove: [[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],
    //           [-1,1],[-2,2],[-3,3],[-4,4],[-5,5],[-6,6],[-7,7],[-8,8],[-9,9],
    //           [1,-1],[2,-2],[3,-3],[4,-4],[5,-5],[6,-6],[7,-7],[8,-8],[9,-9],
    //           [-1,-1],[-2,-2],[-3,-3],[-4,-4],[-5,-5],[-6,-6],[-7,-7],[-8,-8],[-9,-9],
    //           [1,0],[-1,0],[0,-1],[0,1]
    //         ]
  };
  const ka = {
    element: document.getElementById("ka"),
    isNotBlank: true,
    isTurnPlayer: true,
    isEnemy: false,
    isMissile: true,
    isPromotable: true,
    moveType:"ka",
    promoteTo: um,
    // canMove: [,[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],
    //           [-1,1],[-2,2],[-3,3],[-4,4],[-5,5],[-6,6],[-7,7],[-8,8],[-9,9],
    //           [1,-1],[2,-2],[3,-3],[4,-4],[5,-5],[6,-6],[7,-7],[8,-8],[9,-9],
    //           [-1,-1],[-2,-2],[-3,-3],[-4,-4],[-5,-5],[-6,-6],[-7,-7],[-8,-8],[-9,-9],
    //         ]
  };
  const ry = {
    element: document.getElementById("ry"),
    isNotBlank: true,
    isTurnPlayer: true,
    isEnemy: false,
    isMissile: true,
    moveType:"hi",
    isPromotable: false,
    // canMove: [[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0],
    //           [-1,0],[-2,0],[-3,0],[-4,0],[-5,0],[-6,0],[-7,0],[-8,0],[-9,0],
    //           [0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],
    //           [0,-1],[0,-2],[0,-3],[0,-4],[0,-5],[0,-6],[0,-7],[0,-8],[0,-9],
    //           [1,1],[-1,1],[1,-1],[-1,-1]
    //         ]
  };
  const hi = {
    element: document.getElementById("hi"),
    isNotBlank: true,
    isTurnPlayer: true,
    isEnemy: false,
    isMissile: true,
    isPromotable: true,
    moveType:"hi",
    promoteTo: ry,
    // canMove: [[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0],
    //           [-1,0],[-2,0],[-3,0],[-4,0],[-5,0],[-6,0],[-7,0],[-8,0],[-9,0],
    //           [0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],
    //           [0,-1],[0,-2],[0,-3],[0,-4],[0,-5],[0,-6],[0,-7],[0,-8],[0,-9],
    //         ]
  };
  const ou = {
    element: document.getElementById("ou"),
    isNotBlank: true,
    isTurnPlayer: true,
    isEnemy: false,
    isMissile: false,
    isPromotable: false,
    canMove:[[1,-1],[1,0],[1,1],[0,-1],[0,1],[-1,-1],[-1,0],[-1,1]]
  };
  const eto = {
    element: document.getElementById("eto"),
    isNotBlank: true,
    isTurnPlayer: false,
    isEnemy: true,
    isMissile: false,
    isPromotable: false,
    canMove: [[1,0],[1,-1],[1,1],[0,-1],[0,1],[-1,0]]
  };
  const efu = {
    element: document.getElementById("efu"),
    isNotBlank: true,
    isTurnPlayer: false,
    isEnemy: true,
    isMissile: false,
    isPromotable: true,
    promoteTo: eto,
    canMove:[[1,0]]
  };
  const eny = {
    element: document.getElementById("eny"),
    isNotBlank: true,
    isTurnPlayer: false,
    isEnemy: true,
    isMissile: false,
    isPromotable: false,
    canMove: [[1,0],[1,-1],[1,1],[0,-1],[0,1],[-1,0]]
  };
  const eky = {
    element: document.getElementById("eky"),
    isNotBlank: true,
    isTurnPlayer: false,
    isEnemy: true,
    isMissile: true,
    isPromotable: true,
    moveType:"ky",
    promoteTo: eny,
    // canMove:[[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0]]
  };
  const enk = {
    element: document.getElementById("enk"),
    isNotBlank: true,
    isTurnPlayer: false,
    isEnemy: true,
    isMissile: false,
    isPromotable: false,
    canMove: [[1,0],[1,-1],[1,1],[0,-1],[0,1],[-1,0]]
  };
  const eke = {
    element: document.getElementById("eke"),
    isNotBlank: true,
    isTurnPlayer: false,
    isEnemy: true,
    isMissile: false,
    isPromotable: true,
    promoteTo: enk,
    canMove:[[2,-1],[2,1]]
  };
  const eng = {
    element: document.getElementById("eng"),
    isNotBlank: true,
    isTurnPlayer: false,
    isEnemy: true,
    isMissile: false,
    isPromotable: false,
    canMove: [[1,0],[1,-1],[1,1],[0,-1],[0,1],[-1,0]]
  };
  const egi = {
    element: document.getElementById("egi"),
    isNotBlank: true,
    isTurnPlayer: false,
    isEnemy: true,
    isMissile: false,
    isPromotable: true,
    promoteTo: eng,
    canMove:[[1,0],[1,-1],[1,1],[-1,-1],[-1,1]]
  };
  const eki = {
    element: document.getElementById("eki"),
    isNotBlank: true,
    isTurnPlayer: false,
    isEnemy: true,
    isMissile: false,
    isPromotable: false,
    canMove: [[1,0],[1,-1],[1,1],[0,-1],[0,1],[-1,0]]
  };
  const eum = {
    element: document.getElementById("eum"),
    isNotBlank: true,
    isTurnPlayer: false,
    isEnemy: true,
    isMissile: true,
    moveType:"ka",
    isPromotable: false,
    // canMove: [[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],
    //           [-1,1],[-2,2],[-3,3],[-4,4],[-5,5],[-6,6],[-7,7],[-8,8],[-9,9],
    //           [1,-1],[2,-2],[3,-3],[4,-4],[5,-5],[6,-6],[7,-7],[8,-8],[9,-9],
    //           [-1,-1],[-2,-2],[-3,-3],[-4,-4],[-5,-5],[-6,-6],[-7,-7],[-8,-8],[-9,-9],
    //           [1,0],[-1,0],[0,-1],[0,1]
    //         ]
  };
  const eka = {
    element: document.getElementById("eka"),
    isNotBlank: true,
    isTurnPlayer: false,
    isEnemy: true,
    isMissile: true,
    isPromotable: true,
    moveType:"ka",
    promoteTo: eum,
    // canMove: [[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],
    //           [-1,1],[-2,2],[-3,3],[-4,4],[-5,5],[-6,6],[-7,7],[-8,8],[-9,9],
    //           [1,-1],[2,-2],[3,-3],[4,-4],[5,-5],[6,-6],[7,-7],[8,-8],[9,-9],
    //           [-1,-1],[-2,-2],[-3,-3],[-4,-4],[-5,-5],[-6,-6],[-7,-7],[-8,-8],[-9,-9],
    //         ]
  };
  const ery = {
    element: document.getElementById("ery"),
    isNotBlank: true,
    isTurnPlayer: false,
    isEnemy: true,
    isMissile: true,
    moveType:"hi",
    isPromotable: false,
    // canMove: [[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0],
    //           [-1,0],[-2,0],[-3,0],[-4,0],[-5,0],[-6,0],[-7,0],[-8,0],[-9,0],
    //           [0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],
    //           [0,-1],[0,-2],[0,-3],[0,-4],[0,-5],[0,-6],[0,-7],[0,-8],[0,-9],
    //           [1,1],[-1,1],[1,-1],[-1,-1]
    //         ]
  };
  const ehi = {
    element: document.getElementById("ehi"),
    isNotBlank: true,
    isTurnPlayer: false,
    isEnemy: true,
    isMissile: true,
    isPromotable: true,
    moveType:"hi",
    promoteTo: ery,
    // canMove: [[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0],
    //           [-1,0],[-2,0],[-3,0],[-4,0],[-5,0],[-6,0],[-7,0],[-8,0],[-9,0],
    //           [0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],
    //           [0,-1],[0,-2],[0,-3],[0,-4],[0,-5],[0,-6],[0,-7],[0,-8],[0,-9],
    //         ]
  };
  const eou = {
    element: document.getElementById("eou"),
    isNotBlank: true,
    isTurnPlayer: false,
    isEnemy: true,
    isMissile: false,
    isPromotable: false,
    canMove:[[1,-1],[1,0],[1,1],[0,-1],[0,1],[-1,-1],[-1,0],[-1,1]]
  };

  let borad = [
    [___,___,___,___,___,___,___,___,___,___,___],
    [___,eky,eke,egi,eki,eou,eki,egi,eke,eky,___],
    [___,___,ehi,___,___,___,___,___,eka,___,___],
    [___,efu,efu,efu,efu,efu,efu,efu,efu,efu,___],
    [___,___,___,___,___,___,___,___,___,___,___],
    [___,___,___,___,___,___,___,___,___,___,___],
    [___,___,___,___,___,___,___,___,___,___,___],
    [___,fu ,fu ,fu ,fu ,fu ,fu ,fu ,fu ,fu,___],
    [___,___,ka ,___,___,___,___,___,hi ,___,___],
    [___,ky ,ke ,gi ,ki ,ou ,ki ,gi ,ke ,ky ,___],
    [___,___,___,___,___,___,___,___,___,___,___]
  ]
  let whiteHoldingpieces = [[fu,0,efu,"w0",eto],[ke,0,eke,"w1",enk],[ki,0,eki,"w2",eki],[gi,0,egi,"w3",eng],[ka,0,eka,"w4",eum],[hi,0,ehi,"w5",ery],[ky,0,eky,"w6",eny]];
  let brackHoldingpieces = [[efu,0,fu,"b0",to],[eke,0,ke,"b1",nk],[eki,0,ki,"b2",ki],[egi,0,gi,"b3",ng],[eka,0,ka,"b4",um],[ehi,0,hi,"b5",ry],[eky,0,ky,"b6",ny]];
  let holdingFlag;

  const drawBoard = function(){
    const borad = document.getElementById("borad");
    for (let x = 1; x <= 9; x++) {
      for (let y = 1; y <= 9; y++) {
        const nextCell = document.getElementById("cell").cloneNode(true);
        nextCell.style.left = ((x - 1) * 50) + "px";
        nextCell.style.top  = ((y - 1) * 50) + "px";
        nextCell.id = "c" + y + x;
        borad.appendChild(nextCell);
      }
    }
  };
  const placePieces = function(){
    for (let y = 1; y <= 9 ; y++) {
      for (let x = 1; x <= 9 ; x++) {
        const cell = document.getElementById("c"+ y + x );
        const piece = borad[y][x].element.cloneNode(true);
        while (cell.firstChild) {
          cell.removeChild(cell.firstChild);
        }
        piece.id = "p" +  y + x ;
        cell.appendChild(piece);
      }
    }
  };
  const drawSidePiecesHolder = function(){
    const holder = document.getElementById("sidepieceholder");
    let i = 7;
    for (let y = 1; y <= 4; y++) {
      for (let x = 1; x <= 2 ; x++) {
        const cell = document.getElementById("sidepiece").cloneNode(true);
        cell.style.top = y * 50 + "px";
        cell.style.left = x * 56 + 10 + "px";
        cell.id = "b"+ i;
        i--;
        holder.appendChild(cell);
      }
    }
    for (let j = 0; j < 7 ; j++) {
      const cell = document.getElementById("b" + j);
      const piece = brackHoldingpieces[j][0].element.cloneNode(true);
      piece.style.display="none";
      cell.appendChild(piece);
      const sidenum = document.getElementById("sidenum").cloneNode(true);
      sidenum.id = "b"+j+"n";
      sidenum.style.display="none";
      cell.appendChild(sidenum);
    }
    i = 0;
    for (let y = 1; y <= 4; y++) {
      for (let x = 1; x <= 2 ; x++) {
        const cell = document.getElementById("sidepiece").cloneNode(true);
        cell.style.top = y * 50 + 252 + "px";
        cell.style.left = x * 56 + 600 + "px";
        cell.id = "w"+ i;
        i++;
        holder.appendChild(cell);
      }
    }
    for (let j = 0; j < 7 ; j++) {
      const cell = document.getElementById("w" + j);
      const piece = whiteHoldingpieces[j][0].element.cloneNode(true);
      piece.style.display="none";
      cell.appendChild(piece);
      const sidenum = document.getElementById("sidenum").cloneNode(true);
      sidenum.id = "w"+j+"n";
      sidenum.style.display="none";
      cell.appendChild(sidenum);
    }
  };

  const redrawSidePiecesHolder = function(y,x){//??????????????????? 要チェック
    if (borad[y][x].isEnemy) {
      for (let arrw of whiteHoldingpieces) {
        if (arrw[1] == 0) {
          document.getElementById(arrw[3]).childNodes[0].style.display="none";
          document.getElementById(arrw[3]).childNodes[1].style.display="none";
        }else {
          document.getElementById(arrw[3]).childNodes[0].style.display="";
          document.getElementById(arrw[3]).childNodes[1].style.display="";
          document.getElementById(arrw[3]).childNodes[1].textContent = arrw[1];
        }
      }
    }else {
      for (let arrb of brackHoldingpieces) {
        if (arrb[1] == 0) {
          document.getElementById(arrb[3]).childNodes[0].style.display="none";
          document.getElementById(arrb[3]).childNodes[1].style.display="none";
        }else {
          document.getElementById(arrb[3]).childNodes[0].style.display="";
          document.getElementById(arrb[3]).childNodes[1].style.display="";
          document.getElementById(arrb[3]).childNodes[1].textContent = arrb[1];
        }
      }
    }
  };

  const changeTurnPlayer = function(){
    //なんとかならなかったのか
    const pieceList = [fu,ky,ke,gi,ki,ka,hi,ou,to,ny,nk,ng,um,ry,
                       efu,eky,eke,egi,eki,eka,ehi,eou,eto,eny,enk,eng,eum,ery];
    for (let piece of pieceList) {
      piece.isTurnPlayer = !piece.isTurnPlayer;
    }
    if (fu.isTurnPlayer){
      document.getElementById("wteban").style.display = "";
      document.getElementById("bteban").style.display = "none";
    }else{
      document.getElementById("wteban").style.display = "none";
      document.getElementById("bteban").style.display = "";
    }
  };

  let haveAPieceFlag;
  const nowPostionInBored = {
    y: null,
    x: null,
    holding: null,
    holdingColor:null
  };
  const haveAPiece = function(y,x){
    if(borad[y][x].isNotBlank && haveAPieceFlag && borad[y][x].isTurnPlayer){
      haveAPieceFlag = false;
      const piece = document.getElementById("p"+ y + x );
      piece.parentNode.style.background = "#d2691e";
      nowPostionInBored.y = y;
      nowPostionInBored.x = x;
    }
  };

  const addToHoldingPiece = function(y,x){
    if (borad[y][x].isEnemy) {
      for (let arr of whiteHoldingpieces) {
        if (arr[2]== borad[y][x] || arr[4]== borad[y][x]) {
          arr[1] += 1 ;
        }
      }
    }else{
      for (let arr of brackHoldingpieces) {
        if (arr[2]== borad[y][x] || arr[4]== borad[y][x]) {
          arr[1] += 1 ;
        }
      }
    }
    redrawSidePiecesHolder(y,x);
  }

  let movable;
  const releaseAPiece = function(y,x){
    checkMovable(y,x);
    if (movable) {
      movable = false;
      haveAPieceFlag = true;
      document.getElementById("p"+ nowPostionInBored.y + nowPostionInBored.x ).parentNode.style.background = "";//変更した背景色styleを消す
      let nowPosition = borad[nowPostionInBored.y][nowPostionInBored.x];
      const targetPosition = borad[y][x];
      if (borad[y][x].isNotBlank == false){
        checkPromoto(y,x);
        if (promoteFlag) {
          promoteFlag = false;
          nowPosition = nowPosition.promoteTo;
        }
        borad[y][x] = nowPosition;
        borad[nowPostionInBored.y][nowPostionInBored.x] = ___;
        placePieces();
        changeTurnPlayer();
      }else{
        if (borad[y][x].isTurnPlayer == false) {
          checkPromoto(y,x);
          if (promoteFlag) {
            promoteFlag = false;
            nowPosition = nowPosition.promoteTo;
          }
          //持ち駒処理
          addToHoldingPiece(y,x);
          borad[y][x] = nowPosition;
          borad[nowPostionInBored.y][nowPostionInBored.x] = ___;
          placePieces();
          changeTurnPlayer();
        }//置き場所が自分の駒であった場合の処理は書いてないが、動作はしている
      }
    }
    if (y == nowPostionInBored.y && x == nowPostionInBored.x) {
      haveAPieceFlag = true;
      document.getElementById("p"+ nowPostionInBored.y + nowPostionInBored.x ).parentNode.style.background = "";
    }
  };
  let promoteFlag;
  const checkPromoto = function(y,x,nowPosition){ //checkpromoteと実際のpromoteで関数分けたほうが指向っぽい？
    if(borad[nowPostionInBored.y][nowPostionInBored.x].isPromotable && !borad[nowPostionInBored.y][nowPostionInBored.x].isEnemy && (y <= 3 || nowPostionInBored.y <= 3)){
      if (y == 1) {
        promoteFlag = true;
      }else{
        if (confirm("駒を成りますか？")) {
          promoteFlag = true;
        }
      }
    }else if (borad[nowPostionInBored.y][nowPostionInBored.x].isPromotable && borad[nowPostionInBored.y][nowPostionInBored.x].isEnemy && (y >= 7 || nowPostionInBored.y >= 7)) {
      if (y == 9) {
        promoteFlag = true;
      }else{
        if (confirm("駒を成りますか？")) {
          promoteFlag = true;
        }
      }
    }
  };


  const checkMovable = function(y,x){
    if (borad[nowPostionInBored.y][nowPostionInBored.x].isMissile == false) {
      let moy;
      let mox;
      for (let arr of borad[nowPostionInBored.y][nowPostionInBored.x].canMove) {
        moy = arr[0] + +nowPostionInBored.y;
        mox = arr[1] + +nowPostionInBored.x;
        if (moy == y && mox == x) {
          movable = true;
        }
      }
      }else if(borad[nowPostionInBored.y][nowPostionInBored.x].moveType == "ky"){
        canMoveOfKy(y,x);
      }else if(borad[nowPostionInBored.y][nowPostionInBored.x].moveType == "ka"){
        canMoveOfKa(y,x);
      }else if(borad[nowPostionInBored.y][nowPostionInBored.x].moveType == "hi"){
        canMoveOfHi(y,x);
    }
    if(borad[nowPostionInBored.y][nowPostionInBored.x] == um || borad[nowPostionInBored.y][nowPostionInBored.x] == eum ||
       borad[nowPostionInBored.y][nowPostionInBored.x] == ry || borad[nowPostionInBored.y][nowPostionInBored.x] == ery)
       canMoveBigPromotePiece(y,x);
  };
  const canMoveOfKy = function(y,x){
    let moy = +nowPostionInBored.y;
    let mox = +nowPostionInBored.x;
    do {
      if (borad[nowPostionInBored.y][nowPostionInBored.x]== ky) {
        moy--;
      }else {
        moy++;
      }
      if (moy == y && mox == x) {
        movable = true;
      }
    } while (!borad[moy][mox].isNotBlank && moy >= 1 && moy <= 9);
  };
  const canMoveOfHi = function(y,x){
    for (let i = 0; i < 4; i++) {
      let moy = +nowPostionInBored.y;
      let mox = +nowPostionInBored.x;
      do {
        switch (i) {
          case 0:
          moy++;
            break;
          case 1:
          moy--;
            break;
          case 2:
          mox++;
            break;
          case 3:
          mox--;
            break;
        }
        if (moy == y && mox == x) {
          movable = true;
        }
      } while (!borad[moy][mox].isNotBlank && moy >= 1 && moy <= 9 && mox >= 1 && mox <= 9);
    }
  };
  const canMoveOfKa = function(y,x){
    for (let i = 0; i < 4; i++) {
      let moy = +nowPostionInBored.y;
      let mox = +nowPostionInBored.x;
      do {
        switch (i) {
          case 0:
          moy++;
          mox++;
          break;
          case 1:
          moy++;
          mox--;
          break;
          case 2:
          moy--;
          mox++;
          break;
          case 3:
          moy--;
          mox--;
          break;
        }
        if (moy == y && mox == x) {
          movable = true;
        }
      } while (!borad[moy][mox].isNotBlank && moy >= 1 && moy <= 9 && mox >= 1 && mox <= 9);
    }
  };
  const canMoveBigPromotePiece = function(y,x){
    let moy = +nowPostionInBored.y;
    let mox = +nowPostionInBored.x;
    for (let arr of ou.canMove) {
      moy = arr[0] + +nowPostionInBored.y;
      mox = arr[1] + +nowPostionInBored.x;
      if (moy == y && mox == x) {
        movable = true;
      }
    }
  };


  
  const releaseAHoldingPiece = function(y,x){//助長ずぎる
    if (nowPostionInBored.holdingColor == "w") {
      if (borad[y][x].isNotBlank == false){
        borad[y][x] = whiteHoldingpieces[nowPostionInBored.holding][0];
        placePieces();
        changeTurnPlayer();
        haveAPieceFlag = true;
        holdingFlag = false;
        document.getElementById(nowPostionInBored.holdingColor+nowPostionInBored.holding).style.background="";
        whiteHoldingpieces[nowPostionInBored.holding][1]-=1;
        for (let arrw of whiteHoldingpieces) {
          if (arrw[1] == 0) {
            document.getElementById(arrw[3]).childNodes[0].style.display="none";
            document.getElementById(arrw[3]).childNodes[1].style.display="none";
          }else {
            document.getElementById(arrw[3]).childNodes[0].style.display="";
            document.getElementById(arrw[3]).childNodes[1].style.display="";
            document.getElementById(arrw[3]).childNodes[1].textContent = arrw[1];
          }
        }
      }else{
        haveAPieceFlag = true;
        holdingFlag = false;
        document.getElementById(nowPostionInBored.holdingColor+nowPostionInBored.holding).style.background="";
     }
    }else{
      if (borad[y][x].isNotBlank == false){
        borad[y][x] = brackHoldingpieces[nowPostionInBored.holding][0];
        placePieces();
        changeTurnPlayer();
        haveAPieceFlag = true;
        holdingFlag = false;
        document.getElementById(nowPostionInBored.holdingColor+nowPostionInBored.holding).style.background="";
        brackHoldingpieces[nowPostionInBored.holding][1]-=1;
        for (let arrb of brackHoldingpieces) {
          if (arrb[1] == 0) {
            document.getElementById(arrb[3]).childNodes[0].style.display="none";
            document.getElementById(arrb[3]).childNodes[1].style.display="none";
          }else {
            document.getElementById(arrb[3]).childNodes[0].style.display="";
            document.getElementById(arrb[3]).childNodes[1].style.display="";
            document.getElementById(arrb[3]).childNodes[1].textContent = arrb[1];
          }
        }
      }else{
        haveAPieceFlag = true;
        holdingFlag = false;
        document.getElementById(nowPostionInBored.holdingColor+nowPostionInBored.holding).style.background="";
     }
   }
  };


  const main = function(){
    const cells = document.getElementsByClassName("cell");
      for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', (event) => {
          const cellID = event.target.id;
          const y = cellID[1];
          const x = cellID[2];
          if (haveAPieceFlag){
            haveAPiece(y,x);
          }else{
            if (holdingFlag) {
              releaseAHoldingPiece(y,x);
            }
            releaseAPiece(y,x);
          }
        }, false);
      };
  //cellと持ち駒の両方のクリック待ち
  const holdingPieces = document.getElementsByClassName("sidepiece");//名前わかりずらい
    for (let i = 0; i < holdingPieces.length; i++) {
      holdingPieces[i].addEventListener('click', (event) => {
        const cell = event.target;
        if (haveAPieceFlag) {
          if (fu.isTurnPlayer) {
            for (let arrw of whiteHoldingpieces) {
              if (cell.id == arrw[0].element.id) {
                nowPostionInBored.holding = cell.parentNode.id[1];
                nowPostionInBored.holdingColor = cell.parentNode.id[0];
                haveAPieceFlag = false;
                holdingFlag = true;
                event.target.parentNode.style.background = "#deb887";
              }
            }
          }else{
            for (let arrb of brackHoldingpieces) {
              if (cell.id == arrb[0].element.id) {
                nowPostionInBored.holding = cell.parentNode.id[1];
                nowPostionInBored.holdingColor = cell.parentNode.id[0];
                haveAPieceFlag = false;
                holdingFlag = true;
                event.target.parentNode.style.background = "#deb887";
              }
            }
          }
        }else{
          if(cell.parentNode.id==nowPostionInBored.holdingColor+nowPostionInBored.holding){
            haveAPieceFlag = true;
            holdingFlag = false;
            event.target.parentNode.style.background = "";
          }
        }
      }, false);
    }
  };

  onload = function(){
    haveAPieceFlag = true;
    promoteFlag = false;
    holdingFlag = false;
    drawBoard();
    placePieces();
    drawSidePiecesHolder();

    main();

  };

}
