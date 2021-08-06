import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header'
import Story from './components/story'
import Faker from 'faker'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';

let user = []

for (let i = 0; i < 7; i++) {
      user.push({
        id:Faker.datatype.uuid(),
        name: Faker.internet.userName(),
        avatar: Faker.internet.avatar(),
      })
}




ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Story user = {user} />
  </React.StrictMode>,
  document.getElementById('root')
);
