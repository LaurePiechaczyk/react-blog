import React from 'react'
import "./Form.css";

export default function Form() {
  return (
    <>
    <h1 className="title-form">Write a Post</h1>
    <form className="container-form">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" placeholder='Enter your name'></input>

        <label htmlFor="article">Your article</label>
        <textarea id="article" placeholder='Your post'></textarea>

        <button>Send Post</button>
       
    </form>
    
    </>
  )
}
