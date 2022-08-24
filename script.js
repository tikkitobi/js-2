const data = ['Иван', "Иванов", "Отдел разработки"];
function func(emp) {
    let [name,surname,department] = emp
    let position;
    if(emp[3] !== undefined) {
        position = emp[3];
    }
    else {
        position = 'Junior';
    }
    console.log(name,surname,department,position);
}
func(data);