const fs = require('fs');
const colors = require('colors');
const crearTabla = async(multiplicacion = 5, lista = false, hasta = 10) => {
    try{
        let salida = '';
        
        if(hasta){
            
            for(let i= 0; i <= hasta; i++){
                let resultado = multiplicacion * i;
                salida = salida +(`${multiplicacion} X ${i} = ${resultado} \n`);
            }
        }
        
        if(lista){
            console.log('================================='.blue);
            console.log('\tTabla del numero'.cyan,multiplicacion);
            console.log('================================='.blue);
            console.log(salida.yellow);
        }
        fs.writeFileSync( `./salida/tabla-del-${multiplicacion}.txt`, salida.yellow);
        
            console.log(`Tabla de ${multiplicacion} creada`.green)
        
        }
        catch(err){
                throw err
            }   
        }

module.exports = { 
     crearTabla
}