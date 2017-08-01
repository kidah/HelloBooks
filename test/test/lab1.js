function aritGeo(items=[]){
    arithdiff1 = items[1] - items[0];
    geodiff1 = items[1] / items[0];
    arithdiff2 = items[items.length-1] - items[items.length - 2];
    geodiff2 = items[items.length-1] / items[items.length - 2];

    if (items.length < 1){
        print(0)
    }
    else if(arithdiff1 == arithdiff2 && items.length > 2){
        print('Arithmetic');
    }
    else if(geodiff1 == geodiff2 && items.length > 2 ){
        print('Geometric');
    }
    else{
         print (-1);
     }
  
}
aritGeo([2,3,4,6])