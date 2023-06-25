import React, {useEffect,useState} from 'react'
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import { useHistory } from 'react-router'
const Home:React.FC = () => {
  const history = useHistory();
 const handleSubmit = () =>{
  history.push('/random')
   
 }
  
  return (
  
      <form autoComplete='off'  onSubmit={handleSubmit}>
        <TextField
        required
        variant="outlined"
        sx={{width:"70vmin" ,padding:"1rem"}}
        placeholder="UserName"
         />
        <br/>
        <TextField
        variant="outlined"
        sx={{width:"70vmin", padding:"1rem"}}
        placeholder="Password" />
        <br/>
        <Button variant="contained"
        type="submit">
          Login
        </Button>
      </form>

  )
}
export default Home