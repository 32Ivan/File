import React, { useState, useEffect } from "react";
import axios from "axios";

function ModalId(props) {
  const [search, setSearch] = useState("");

  const [Id, setID] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((e) => {
        console.log(e.data);
        setID(e.data);
        for (const dataObjt of e.data) {
          console.log("Hello from", dataObjt.name);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
         <input className="inputclas" type="text" placeholder="Search..."  onChange={ev=>{setSearch(ev.target.value)}} />
      
       {Id.filter((ie)=>{
           if(search === ''){
        return ie.name;
           }
       else if(ie.name.toLowerCase().includes(search.toLocaleLowerCase())){
            return ie.name;
        }
    }).map((ie, ps) => {
        return (
          <div key={ps} className="id">
            <p>Name :{ie.name}</p>
            <p>Username :{ie.username}</p>
            <p>Id :{ie.id}</p>
            <p>Phone :{ie.phone}</p>
            <p>Website :{ie.website}</p>
            <div className="iddiv">
              <p>Address :{ie.address.street}</p>
              <p>City :{ie.address.city}</p>
              <p>Zipcode :{ie.address.zipcode}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default ModalId;
