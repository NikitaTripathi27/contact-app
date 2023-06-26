
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
        placeholder="Username"
         />
        <br/>
        <TextField
        variant="outlined"
        sx={{width:"70vmin", padding:"1rem"}}
        placeholder="password" />
        <br/>
        <Button variant="contained"
        type="submit">
          Login
        </Button>
      </form>

  )
}
export default Home
