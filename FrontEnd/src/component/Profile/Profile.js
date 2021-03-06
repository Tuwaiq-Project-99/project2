import React, {useState , useEffect} from 'react'
import axios from 'axios';
import "../Profile/Profile.css"


export default function Profile() {
    const [profile, setProfile] = useState([])

    useEffect(() => {
        const get = async () => {
         await axios.get('http://localhost:5000/profile')
         .then(res =>{
           console.log("users",res.data.users)
           setProfile(res.data)
         })
         .catch(err => {
           console.log(err);
         })
         }
 
         get()
         
         }, [])
     
        function profilePage(arr){
            return <div>
            <h2 id="profile-header">My profile</h2>
                {arr && arr.map((elem , i )=>{
                    return (
                        
                    <div >
                        
                        <div className="member">
                        <span>{elem.id}</span>
                        <br />
                        <img src={elem.url} alt="" width={200} height={150} />
                        <br />
                        <span>{elem.name}</span>
                        <br />
                        <span>{elem.email}</span>
                        <br />
                        <span>{elem.type}</span>
                        <br />
                        </div>
                    </div>
                        
                    )
                
            })}
             
            </div>  
        }
        return (
        <div>
            {profilePage(profile)}
        </div>
    ) 
        } 

