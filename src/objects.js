const createPerson = (name, age) => {
  return {
          name: name,
          age: age
        }
}

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};


const hasProperty = (property, object) => {
  return Boolean(object[property]);
};

const isOver65 = person => {
  return person.age > 65;
};

const getAges = people => {
  return people.map(person => person.age)
};

const findByName = (name, people) => {
  return people.filter(people => people.name === name)[0];
};

const findHondas = cars => {
  return cars.filter(car => car.manufacturer === "Honda");
};

const averageAge = people => {
  const ages = people.map(person => person.age);
  return ages.reduce((total, age) => total + age) / ages.length;
  
};

const createTalkingPerson = (name, age) => {
  return {
          name: name,
          age: age,
          introduce: function(name2){
            return `Hi ${name2}, my name is ${name} and I am ${age}!`
          }
  }
 
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
