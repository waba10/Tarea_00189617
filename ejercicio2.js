function conversion(num,unidad1,unidad2,medida){
    if(unidad1==='m' & unidad2==='cm'){
        return num*100;
    }
    else if(unidad1==='c' & unidad2==='m'){
        return num/100;
    }
    else if(unidad1==='k' & unidad2==='m'){
        return num*1000;
    }
    else if(unidad1==='m' & unidad2==='k'){
        return num/1000;
    }
    else if(unidad1==='p' & unidad2==='m'){
        return num/3.28084;
    }
    else if(unidad1==='m' & unidad2==='p'){
        return num*3.28084;
    }
    else if(unidad1==='C' & unidad2==='F'){
        return (num*(9/5))+32;
    }
    else if(unidad1==='F' & unidad2==='C'){
        return ((num-32)*(9/5));
    }
    else if(unidad1==='K' & unidad2==='F'){
        return ((num-273.15)*(9/5))+32;
    }
    else if(unidad1==='F' & unidad2==='K'){
        return (((num-32)*(9/5))+32);
    }
    else if(unidad1==='K' & unidad2==='C'){
        return num-273.15;
    }
    else if(unidad1==='C' & unidad2==='K'){
        return num+273.15;
    }
    else{
        console.log('Has ingresado algo incorrecto');
    }
}
