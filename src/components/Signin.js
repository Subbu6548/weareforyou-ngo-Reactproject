
import React,{useState,useEffect} from 'react'
import "../style.css";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { initializeApp } from "firebase/app"
import { Link } from 'react-router-dom';

const firebaseApp = initializeApp({ 
  apiKey: "AIzaSyCiba2s84YwGEBPVCpqc_71RwgRhSXrd18",
  authDomain: "sign-in-f2b17.firebaseapp.com",
  projectId: "sign-in-f2b17",
  storageBucket: "sign-in-f2b17.appspot.com",
  messagingSenderId: "952966705685",
  appId: "1:952966705685:web:62771eca978a44ffa3941c",
  measurementId: "G-M1K6J3EX5R"
});
const auth = getAuth(firebaseApp);
const Signin = () => {
    const [user,setUser]=useState(null);
    useEffect(()=>{
      onAuthStateChanged(auth,person=>{
        if(person){
          setUser(person);
        }
        else{
          setUser(null);
        }
      })
  
    },[]
    )
    const signInWithGoogle=async()=>{
      try{
        await signInWithPopup(auth,new firebase.auth.GoogleAuthProvider);
   
      }
     
      catch(err)
      {
        console.log(err);
  
      }
    }
  return (
    
        <div>
      <center>
        {user ?

        < div >
      
          <Link to="/Donate" className='donate1'
           >To donate</Link>
          
          
          <button onClick={()=>auth.signOut()}>Sign out</button>

          

        </div> :
      <button onClick={signInWithGoogle}>sign in with google</button>
      }
      </center>
        
    </div>
      
    
  )
}

export default Signin
