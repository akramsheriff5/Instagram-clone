import React from 'react'


const suggesion = (props) => {
    const usersug = props.suggest
    const allsug = usersug.map((user)=>{
        return <div className="row my-2" key={user.id}>
        <div className="col-sm my-auto text-center">
        <img src={user.avatar} className="border border-1 rounded-circle" width="55%" height="84%"/>

        </div>
        <div className="col-sm align-middle my-auto">
        <p className="text-dark font-weight-bold m-0">{user.name.substring(0,13)}</p>
        <p className="font-weight-light text-secondary">{user.surname.substring(0,13)}</p>

        </div>
        <div className="col-sm align-middle  my-auto">
        <p className="text-primary align-middle font-weight-bold">Follow</p>

        </div>
      </div>
     })
    return (
        <div>
             {allsug}
            
        </div>
    )
}

export default suggesion
