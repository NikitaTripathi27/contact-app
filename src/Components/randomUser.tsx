import React, { useEffect, useState } from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";

import Stack from "@mui/material/Stack";
import { Skeleton } from "@mui/material";
import Button from "@mui/material/Button";
import { useHistory } from "react-router";
// import Home from "../Components/Home"
const RandomUser: React.FC = () => {
  const history = useHistory();
  const [userlist, setuserlist] = useState<any[]>([]);

  const [page, setPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  const getRandomUser = async (limit=20) => {
    try {
      const results = await fetch(
        `https://randomuser.me/api/?results=${limit}&inc=name,picture&nat=us`
      );
      const data = await results.json();
      setuserlist((prev) => [...prev, ...data.results]);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getRandomUser();
  }, [page]);
  console.log(userlist);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      console.log(window.innerHeight);
      setLoading(true);
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogOut = () => {
    history.push("/");
  };


  const UserListItemSkeleton = () => {
    return (
      <ListItem>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={3}
        >
          <Skeleton variant="circular" width={64} height={64} />
          <Skeleton variant="text" sx={{ fontSize: "2rem" }} width={196} />
        </Stack>
      </ListItem>
    );
  };

  return (
    <>
      <Button className="btn" onClick={handleLogOut}>
        LogOut
      </Button>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {userlist &&
          userlist.length > 0 &&
          userlist.map((item) => (
            <ListItem key={`${item.name.first} ${item.name.last}`}>
              <Stack direction="row" spacing={3}>
                <Avatar src={item.picture.medium} sx={{width: 64, height: 64}} />
                <ListItemText
                  primary={`${item.name.title}. ${item.name.first} ${item.name.last}`}
                />
              </Stack>
            </ListItem>
          ))}
          {loading && [...Array(12)].map(()=><UserListItemSkeleton />)}
      </List>
      {/* {loading && (
        <>
          <div>loading...</div>
        </>
      )} */}
    </>
  );
};

export default RandomUser;
