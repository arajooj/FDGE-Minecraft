const fs = require('fs');
const dir = './tmp';


function main(){
    console.log("Iniciando")
    setTimeout(function() {
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
    }, 3000);
}

main()