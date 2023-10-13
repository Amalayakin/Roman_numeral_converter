
let romanChar={
    "1":"I",
    "4":"IV",
    "5":"V",
    "9":"IX",
    "10":"X",
    "40":"XL",
    "50":"L",
    "90":"XC",
    "100":"C",
    "400":"CD",
    "500":"D",
    "900":"CM",
    "1000":"M"
}
//let n = 3
function ctor(n){
    let s=n.toString()
    let l=s.length
    //console.log(l)
    let wrd="";
  
   switch(l){
        case 1:
            wrd += sing_digit(n)
           console.log(wrd);
           break;
        case 2:
            wrd += two_digit(n)
           console.log(wrd);
           break;
        case 3:
            wrd += thi_digit(n)
           console.log(wrd);
           break;
        case 4:
            wrd += fur_digit(n)
           console.log(wrd);
           break;
    }
}
ctor(649)

function sing_digit(nu){
    if(nu in romanChar){
        return romanChar[nu]
    }
    else{
        if(nu>=5 && nu<9){
         let ans="V"
        ans += romanChar[1].repeat(nu-5); 
        return ans;
    }
     else if(nu>=1 && nu<4){
         let ans=""
        ans += romanChar[1].repeat(nu); 
        return ans;
    }
    
    }
    
}

function two_digit(tw){
    if(tw in romanChar){
        return romanChar[tw];
    }
    
   // let chk=Math.floor(n/10)
   else{
       if(tw>10 && tw<40)
     {  let chk=Math.floor(tw/10)
        let num=""
         num +=romanChar[10].repeat(chk)
        chk= tw-chk*10
        num +=sing_digit(chk)
         //console.log(num)
         return num
    }
    
     else if(tw>40 && tw<50)
     {  let num="XL";
     let chk=Math.floor(tw/10)
        // num +=romanChar[10].repeat(chk-9)
        chk= tw-chk*10
        num +=sing_digit(chk)
        return num
        // console.log(num)
    }
    
    else if(tw>50 && tw<90)
     {  let num="L";
     let chk=Math.floor(tw/10)
         num +=romanChar[10].repeat(chk-5)
        chk= tw-chk*10
        num +=sing_digit(chk)
        return num
        // console.log(num)
    }
    else if(tw>90 && tw<100)
     {  let num="XC";
     let chk=Math.floor(tw/10)
        // num +=romanChar[10].repeat(chk-9)
        chk= tw-chk*10
        num +=sing_digit(chk)
        return num
        // console.log(num)
    }
   }
}

function thi_digit(th){
    if(th in romanChar){
        return romanChar[th]
    }
    else{
        if(th>100 && th<400)
     {  let chk=Math.floor(th/100)
        let num=""
         num +=romanChar[100].repeat(chk)
        chk= th-chk*100
        num +=two_digit(chk)
         //console.log(num)
         return num
    } 
    else if(th>400 && th<500)
     {  let num="CD";
     let chk=Math.floor(th/1000)
        // num +=romanChar[10].repeat(chk-9)
        chk= th-chk*100
        num +=two_digit(chk)
        return num
        // console.log(num)
    }
    else if(th>500 && th<900)
     {  let chk=Math.floor(th/100)
        let num="D"
         num +=romanChar[100].repeat(chk-5)
        chk= th-chk*100
        num +=two_digit(chk)
         //console.log(num)
         return num
    } 
     else if(th>900 && th<1000)
     {  let chk=Math.floor(th/100)
        let num="CM"
        // num +=romanChar[100].repeat(chk-5)
        chk= th-chk*100
        num +=two_digit(chk)
         //console.log(num)
         return num
    } 
    }
}

function fur_digit(fr){
  if(fr in romanChar){
        return romanChar[fr]
    }
  else{
      if(fr>1000 && fr<4000)
     {  let chk=Math.floor(fr/1000)
        let num=""
         num +=romanChar[1000].repeat(chk)
        chk= fr-chk*1000
        if(chk < 10){
           num +=sing_digit(chk) 
        }
        else if(chk > 10 && chk < 100){
           num +=two_digit(chk) 
        }
        else if(chk > 100 && chk <= 999){
           num +=thi_digit(chk) 
        }
        else if(fr == 0){
            return num
        }
        
         //console.log(num)
         return num
    } 
  }
}