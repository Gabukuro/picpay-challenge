const { faker } = require('@faker-js/faker');

function generatePayments() {
  let payments = [];
  for (let i = 0; i < 20; i += 1) {
    payments.push({
      id: faker.datatype.uuid(),
      user: {
        id: faker.datatype.uuid(),
        name: faker.name.firstName(),
        nick: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        title: faker.name.jobTitle(),
      },
      value: faker.finance.amount(),
      date: faker.datatype.datetime(),
      status: faker.datatype.boolean(),
    });
  }
  return payments;
}

generateDb = () => {
  let users = [{
    uuid: faker.datatype.uuid(),
    name: 'Nome Bonitinho',
    email: 'email@email.com',
    password: '123456',
    nick: faker.internet.userName(),
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ1c3VhcmlvMSIsInNlbmhhIjoiMTIzIn0.Pu_q8I5wAFYKMoRHx89SALV2zRE9YvfmF6WYthpDLbU'
  }];
  let payments = generatePayments();

  return { users, payments };
}

module.exports = generateDb;