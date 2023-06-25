import React, { useEffect, useState } from "react";
import axios from "axios";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import userItemSkeleton from "../Skeleton"
import Button from "@mui/material/Button"
import { useHistory } from "react-router";
const RandomUser: React.FC = () => {
  const history = useHistory()
  const [userlist, setuserlist] = useState<any[]>([]);
  const [skeletonLoading, setskeletonLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);



  const getRandomUser = async () => {
   
    setskeletonLoading(true)
    try{
    const results = await fetch(
        `https://randomuser.me/api/?page=${page}&results=12&seed=abc`
      )
      const data = await results.json();
      console.log(data)
          setuserlist((prev) => [...prev, ...data.results]);
          setLoading(false);
          setskeletonLoading(false)
   
      }
      catch(err){
        console.log(err)
      }
  };

  useEffect(() => {
      getRandomUser();
 
  }, [page]);
  console.log(userlist)

  const handleScroll =() =>{
    if(window.innerHeight + document.documentElement.scrollTop +1 >= document.documentElement.scrollHeight){
      console.log(window.innerHeight);
      setLoading(true)
      setPage((prev)=>prev+1)
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll' ,handleScroll)

    return ()=>{
      window.removeEventListener("scroll" ,handleScroll)
    }
  },[])

  const handleClick=()=>{
    history.push("/")
  }

  return (
    <>
    <Button className="btn" onClick={handleClick} >LogOut</Button>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {userlist &&
          userlist.length > 0 &&
          userlist.map((item) => (
            <ListItem key={`${item.name.first} ${item.name.last}`}>
              <Stack direction="row" spacing={3}>
                <Avatar src={item.picture.thumbnail} />
                <ListItemText
                  primary={`${item.name.title}. ${item.name.first} ${item.name.last}`}
                />
              </Stack>
            </ListItem>
          ))}
      </List>
      {loading && (
        <>
      <div>loading...</div>
      </>
       )}

       {/* {skeletonLoading && (
      
      [...Array(20)].map(()=>{
        <>
         <ListItem>
         <Stack spacing={2} direction='row'>
         <Skeleton variant="circular" width={40} height={40} />
         <Skeleton variant="rectangular" width={210} height={30} />
           </Stack>
         </ListItem>
         </>
      })
     
       )} */}
    </>
  );
};

export default RandomUser;
