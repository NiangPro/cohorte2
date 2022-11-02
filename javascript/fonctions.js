function multiplication(val){
    for (let i = 1; i <=12; i++) {
     document.write(`${val} * ${i} = ${val*i}<br>`);
    }
 }


 function somme(a, b){
    return a+b;
 }
 function parfait(nombre){
    let som=0;
    for(let i=1; i<nombre; i++){
        if(nombre%i==0){
            som= som+i;
        }
        
    }
    if(som==nombre){
        alert(nombre+"est parfait")
    }else{
        alert(nombre+"n'est pas parfait");
    }
 }

//  fonction anonyme 
 const produit = function(x, y){
        document.write(x+" x "+y+" = "+(x*y));
 }

// fonction flechee 
 const difference = (x, y)=>{
    document.write(x+" - "+y+" = "+(x-y));
 }

 function premier(chif){
    let cpt=0;
    for(i=1; i<= chif; i++){
        if(chif%i==0){
            cpt++;
        }
    }
    if(cpt==2 || chif==1){
        alert(chif+" est premier");
    }else{
        alert(chif+"n'est pas premier");
    }

 }
 function factoriel(val){
    let fact=1;
    if(val==0){
        document.write("le factoriel de 0!=1");
    }
    for(let i =1; i<=val; i++){
            fact= fact*i;
            
    }
        // document.write(`${val}!=${fact}`);
        return fact;
 }

 const sayHi = ()=>{
    document.write("Bonjour tout le monde");
 }

//  fonction flechee exo10
const personnel = (prenom, nom , age) => {
    document.write(`Prenom: ${prenom}<br>
                Nom: ${nom}<br>
                Age: ${age}<br>
    ` );
}