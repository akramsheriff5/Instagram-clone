import React from 'react'
import { BiDotsHorizontalRounded,BiBookmark} from "react-icons/bi";
import { FiMessageCircle,FiSend} from "react-icons/fi";
import {  TiHeartOutline} from "react-icons/ti";


const post = (props) => {
    const userPost = props.post
    const allPost = userPost.map((user)=>{ 
                    return <div className="col " key={user.id}>
                                <div className="card mt-3">
                                    <div className="card-header bg-white d-flex justify-content-between">
                                    <div className="d-flex ">
                                    <img src={user.avatar} className="border border-1 rounded-circle" width="13%" height="100%"/>  
                                    <p className="m-0 ml-2 mr-3 mt-1">{user.name.substring(0 , 13)}</p>
                                    </div>
                                    <BiDotsHorizontalRounded size={30}/>
                                    </div> 
                                    <div >
                                    <img src={user.posts} className="img-fluid" alt={user.id} width="100%"/>
                     
                                    </div>
                                    <div className="card-footer bg-white">
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <TiHeartOutline size={40}/>
                                                <FiMessageCircle size={30}/>
                                                <FiSend size={30}/>
                                            </div>
                                            <div>
                                                <BiBookmark size={30}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                   
                            </div>
                            })
    return (
        <div>
             {allPost}
            
        </div>
    )
}

export default post
