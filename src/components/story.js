import React from 'react'
import '../css/index.css'
import Faker from 'faker'
import Post from './post'
import profile from '../public/profile.png';
import Suggesion from './suggesion'
import Footer from './footer'


let post = []
let suggest = []


for(let i = 0 ; i<5 ; i++){
  suggest.push({
    id:Faker.datatype.uuid(),
    name: Faker.internet.userName(),
    avatar:Faker.internet.avatar(),
    surname:Faker.name.findName()

  })
}

  for(let i = 0 ; i<10 ; i++){
    post.push({
      id:Faker.datatype.uuid(),
      name: Faker.internet.userName(),
      posts: Faker.image.image(),
      avatar:Faker.internet.avatar(),

    })
  }
                            
const story = (props) => { 
    const userProp = props.user
    const allStory = userProp.map((user)=>{ 
                    return <div className="col-sm text-center my-auto" key={user.id}>
                    <img src={user.avatar} className="border border-3 rounded-circle story-border image-set"  width="56%" height="56%" />
                    <p className="m-0">{user.name.substring(0 , 6)}</p>
                </div>
                 })
    return (
        <div>
          <div className="row mt-5 px-5 pt-5 sticky-top">
            <div className=" col-lg-8 col-xl-8 full-page ">
              <div className=" card ">
                  
                <div className=" card-body row ">
                    
                    {allStory}
                  
              </div>
                
              </div>
              <div className="row mt-5">
              
              <Post post = {post}/>

              </div>

            </div>
            <div className="col-4 sticky-top user-suggesion">
              <div className="row">
                <div className="col-sm my-auto text-center">
                <img src={profile} className="border border-1 rounded-circle" width="55%" height="84%"/>

                </div>
                <div className="col-sm align-middle my-auto">
                <p className="text-dark font-weight-bold m-0">unknown_user</p>
                <p className="font-weight-light text-secondary">security_breach</p>

                </div>
                <div className="col-sm align-middle  my-auto">
                <p className="text-primary align-middle font-weight-bold">Switch</p>

                </div>
              </div>
              <div className="row my-3">
                
                <div className="col-sm align-middle text-center my-auto my-auto">
                <p className="text-secondary font-weight-bold m-0">Suggestions For You</p>

                </div>
                <div className="col-sm align-middle text-center my-auto my-auto">
                <p className="text-secondary font-weight-bold m-0">See All</p>

                </div>
              </div>
            
              <Suggesion suggest={suggest}/>
              <Footer/>               
            </div>

          </div>
        </div>  
    )
}

export default story

