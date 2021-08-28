import React from 'react'
import Story from './story'
import Faker from 'faker'
let user = []

for (let i = 0; i < 7; i++) {
      user.push({
        id:Faker.datatype.uuid(),
        name: Faker.internet.userName(),
        avatar: Faker.internet.avatar(),
      })
}


export default function home() {
    return (
        <div>
            <Story user = {user} />
        </div>
    )
}
