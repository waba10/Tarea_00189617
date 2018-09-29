function conversion(num,unidad1,unidad2,medida){
    var ob={cantidad:num, unidad1:unidad1, unidad2:unidad2,medida:medida};
    if(ob.unidad1==='m' & ob.unidad2==='c'){
        return num*100;
    }
    else if(ob.unidad1==='c' & ob.unidad2==='m'){
        return num/100;
    }
    else if(ob.unidad1==='k' & ob.unidad2==='m'){
        return num*1000;
    }
    else if(ob.unidad1==='m' & ob.unidad2==='k'){
        return num/1000;
    }
    else if(ob.unidad1==='p' & ob.unidad2==='m'){
        return num/3.28084;
    }
    else if(ob.unidad1==='m' & ob.unidad2==='p'){
        return num*3.28084;
    }
    else if(ob.unidad1==='C' & ob.unidad2==='F'){
        return (num*(9/5))+32;
    }
    else if(ob.unidad1==='F' & ob.unidad2==='C'){
        return ((num-32)*(9/5));
    }
    else if(ob.unidad1==='K' & ob.unidad2==='F'){
        return ((num-273.15)*(9/5))+32;
    }
    else if(ob.unidad1==='F' & ob.unidad2==='K'){
        return (((num-32)*(9/5))+32);
    }
    else if(ob.unidad1==='K' & ob.unidad2==='C'){
        return num-273.15;
    }
    else if(ob.unidad1==='C' & ob.unidad2==='K'){
        return num+273.15;
    }
    else{
        console.log('Has ingresado algo incorrecto');
    }
}
