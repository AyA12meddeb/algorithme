function Countsentancelengthwordsandvowels(str) {
    var NB_C=0
    var NB_V=0
    var NB_W=1
    for(var i=0;i<str.length;i++){
       NB_C=NB_C+1 
    
    if (str[i]== " "){
       NB_W=NB_W+1}
    if (str[i].includes("aeiou")){
       NB_V=NB_V+1}
    
       }
       console.log(NB_C);
       console.log(NB_W);
       console.log(NB_V);
    }
    console.log(Countsentancelengthwordsandvowels("hello friend"));