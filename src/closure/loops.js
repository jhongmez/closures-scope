// Usamos LET ya que son valores que iran cambiando
// dentro de la ejecucion del scope
const anotherFunction = () => {
    for(let i = 0; i < 10; i++) {
        setTimeout(() => {
           console.log(i); 
        }, 1000);
    }
}
anotherFunction()
