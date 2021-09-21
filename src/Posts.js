import React, { useState, useEffect } from "react";
import axios from "axios";

import Post from "./Post";

function Posts() {

  const [posts, setPosts] = useState([]);
  const [postsId, setPostsId] = useState([]);

  const mapItem = [];

  useEffect(() => {
      // let kuca = [];
      axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((e) => {
          setPostsId(e.data);
          for (const dataObjt of e.data) {
              console.log("Hello from", dataObjt.name);
            }
        })
        .catch((err) => {
            console.log(err);
        });
        
        axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((rest) => {
            //   console.log(rest.data);
            setPosts(rest.data);
        })
      .catch((err) => {
          console.log(err);
        });
        
        // console.log(kuca)
    }, []);
    
    function pokusaj() {
        posts.forEach((items) => {
            postsId.forEach((item) => {
                if (item.id === items.userId) {
                    mapItem.push(item, items);
                    //   console.log(item.name)
                }
            });
        });
    }
    pokusaj();


    
    return (
        <div >
      {mapItem.map((itemt, pos) => {
          if (itemt.name && itemt.name !== undefined) {
              return (
                  <div key={pos}className="buble">
              <Post
                idSend={itemt.name}
                postEmail={itemt.email}
                postsUser={itemt.username}
                postsWeb={itemt.website}
                />
            </div>
          );
        }
        return (
            <div key={pos}className="buble2" >
            <p className="title">Title : {itemt.title}</p>
            <p className="body" >Body : {itemt.body}</p>
          </div>
        );
    }
    )
}
    </div>
  );
}

export default Posts;
