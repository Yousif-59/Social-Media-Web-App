import { useEffect, useState} from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios";
import { LineAxisOutlined } from "@mui/icons-material";


// import { Posts } from "../../dummyData";

export default function Feed({username}) {
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState("")

  // useEffect(() =>{
  //   const fetchPosts = async () =>{
  //     //const res = axios.get("posts/timeline/605b3d777a3cf74918165c05")
  //     //setPosts(res.data)
  //     //console.log(res)
  //   }
  //   //const res = LineAxisOutlined.get("/timeline/") stoped here...
  //   fetchPosts()
  // }, [])
   useEffect(()=>{
    const fetchPosts = async () => {
      const res = username
       ? await axios.get("/posts/profile/" + username)
       : await axios.get("/posts/timeline/642f60d1604a614cd4051dcf");
      setPosts(res.data);
    }
   fetchPosts();
    //console.log(res);
   }, [username]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}
