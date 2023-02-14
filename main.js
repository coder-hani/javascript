// console.log('hello %chani L3 is %cDone ✅','color:blue','color:green; font-weight: bold')

// function countdown(num) {
//     // write your code here
//     let arr=[];
    
//     while(num>0){
//       num=num-3;
//       if(num>0){
//         if(num%2==0){
//           arr.push(num);
//         }
//       }
//       if(num<=3){
//         arr.push(0);
//       }
       
      
//     }
//     arr.sort((a,b)=>a-b);
// return arr;

// }
// console.log(countdown(2))
// *******************************





function convert_time(time) {
  // write your code here
  let hani=time.split(":");
  let min=hani[1].split(" ");

  for(let i=0;i<time.length;i++){
    if(time[i]==="p" && time[i+1]==="m"){ 
      //  if great than 10 or equal
      // if equal 12 12 or 00
    // add to new str pm
    // else
    // add am+12
       if(hani[0]>=12){
        hani[0]-=12;
       }else{
        hani[0]++;
        hani[0]+=11;


       }

    }else{
 if(time[i]==="a" && time[i+1]==="m"){
  if(hani[0]>=12){
    hani[0]-=12;
    break;
   }

}else{
  if(hani[0]>=12){
    hani[0]+="pm";
    
    break;
  }else{
    
    hani[0]+="am";
    break;


   }
}





}
}
console.log(hani[0])
console.log(min[0])
}
console.log(convert_time('10:30 am'))
