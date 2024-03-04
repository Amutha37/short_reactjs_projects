import { useState, useEffect } from "react";
import axios from 'axios';
import ProfileData from './profile-data.jsx';
import "./styles.css";



const api = axios.create({
    baseURL: 'https://api.github.com',
  });
  
  let response ;
export default function GithubProfileFinder() {
   const [userName, setUserName ] = useState("Amutha37");
  // const [userName, setUserName ] = useState("Yumi Patron");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchGithubUserData() {
  try{
     response = await api.get(`/users/${userName}`);
    console.log('response',response.data );
 } catch(err){
    console.log('not found')
 }
const data = response.data

    if(data){
        setUserData(data)
        setLoading(false)
        setUserName('')
    } 
  }

  const handleSubmit = () => {
    fetchGithubUserData()

  };

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if(loading){
  return  <h1>Loading... ! Please Wait</h1>
  }

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="Search Github username..."
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />

        <button onClick={handleSubmit}>Search</button>
      </div>

      <div>
        { userData !== null ? <ProfileData user={userData}/> : 'No Such User'}
      </div>
    </div>
  );
}
