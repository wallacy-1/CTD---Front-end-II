function dividir (parametro1, parametro2) {
    if(parametro1 == 0 || parametro2 == 0){
        return "Não se pode dividir por zero";
    }
    return parametro1 / parametro2;
}

// console.log(dividir(10, 0));