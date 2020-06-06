function cetak_gambar(panjang){
    let pola ="";
        if(panjang%2 == 1){
        for(i=1; i<= panjang; i++){
            if( i != 0.5*panjang+0.5){
                for(j=1; j<=panjang; j++){
                    if (j == 1 || j == panjang){
                        pola += '*';
                    }
                    else{
                        pola += '=';
                    }
                }
            }
            else{
                for(j=1; j<=panjang; j++){
                pola += '*';
                }
            } 
            pola +='\n';
        }
    } else{
        pola = undefined;
    }
    return pola;
}
let hasil = cetak_gambar(5);
console.log(hasil);