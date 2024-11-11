import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';
import { doc, deleteDoc } from "firebase/firestore";

const Comment = ({commentObj, isOwener})=>{

  const deleteComment = ()=>{
    const deleteConfirm = window.confirm('정말 삭제할까요?');
    if(deleteConfirm){
      
    }
  }

  return(
    <ListGroup.Item>
      <div className='d-flex justify-content-between'>
        {commentObj.comment}
        {isOwener &&            
          <div className='d-flex gap-1'>
            <Button variant="secondary"  size="sm">수정</Button>
            <Button variant="danger" onClick={deleteComment}  size="sm">삭제</Button>
          </div> 
        }
   
      </div>
    </ListGroup.Item> 
  )
}
export default Comment;