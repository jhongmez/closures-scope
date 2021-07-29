const person = () => {
    var saveName = 'Name';
    return {
        // va retornar el valor que se encuentra en save name
        getName: () => {
            return saveName;
        },
        // aqui asignara un nuevo valor
        setName: (name) => {
            saveName =  name;
        }
    };
};

newPerson = person();
console.log(newPerson.getName());
newPerson.setName('Jhon');
console.log(newPerson.getName());