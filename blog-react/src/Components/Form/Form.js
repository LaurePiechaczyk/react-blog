import React, { useState } from "react";
import "./Form.css";
import { useDispatch } from "react-redux";

export default function Form() {

    const [article, setArticle] = useState({
        title: "",
        body: "",
      })
    
    const dispatch = useDispatch();

    const handleForm = (e) => {
        e.preventDefault();

        dispatch({
            type: 'ADDARTICLE',
            payload: article
        })

        setArticle({
            title: "",
            body: "",
        })
    
    };

    const handleInputs = (e) => {
        if(e.target.classList.contains("inp-title")){
            const newObjState = {...article, title: e.target.value};
            setArticle(newObjState);
        }
        else if(e.target.classList.contains("inp-body")){
            const newObjState = {...article, body: e.target.value};
            setArticle(newObjState);
        }
    }

  return (
    <>
    <h1 className="title-form">Write a Post</h1>
    <form onSubmit={handleForm} className="container-form">
        <label htmlFor="title">Title</label>
        <input 
            onChange={handleInputs}
            value={article.title}
            type="text" 
            id="title" 
            placeholder='Enter your name'
            className="inp-title">
        </input>

        <label htmlFor="article">Your article</label>
        <textarea 
            onChange={handleInputs}
            value={article.body}
            id="article" 
            placeholder='Your post'
            className="inp-body">
        </textarea>

        <button>Send Post</button>
       
    </form>
    
    </>
  )
}
