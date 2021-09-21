import React, { useState } from "react";
import Button from "./Button";
import Backdrop from "./Backdrop";

function Post(props) {
  const [showModal, setShowModal] = useState();
  const [showModal2, setShowModal2] = useState();

   


  function showModalHandler() {
    setShowModal(true);
    console.log(`Hello from ${props.idSend}`);
}
  function closeModalHandler() {
    console.log(`Good bye ${props.idSend}`);
    setShowModal(false);
    setShowModal2(false);
  }

  function newModelHandler(){
    setShowModal2(true);
  }


  
  
  return (
      <div>
      <div className="namebutton">
        <Button onClick={showModalHandler}>{props.idSend}</Button>
      </div>
      {showModal &&
       <Backdrop onClick={closeModalHandler} />}
      {showModal && (
          <div className="modal">
            <h4>Hello from {props.idSend}</h4>
              <Button onClick={newModelHandler}>I want to know more</Button>
              {showModal2 && (
                  <div>
                  <p>Username : {props.postsUser}</p>
                  <p>Website : {props.postsWeb}</p>
                  <p>Email : {props.postEmail}</p>
                  </div>
              )}
        </div>
      )}
    </div>
  );
}


export default Post;
