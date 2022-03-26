import React from 'react';
import { Article } from '../../components';
import './blog.css'

import { blog01, blog02, blog03, blog04, blog05 } from './imports';

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
        <div className="gpt3__blog-heading">
          <h1 className="gradient__text">
            Alot is happening, We are blogging about it.
          </h1>
        </div>
        <div className="gpt3__blog-container">
          <div className="gpt3__blog-container_groupA">
            <Article imgUrl={blog01} date="Nov 16, 2021" title="GPT3 and Open AI is the future. Let's explore how it is."/>
          </div>
          <div className="gpt3__blog-container_groupB">
            <Article imgUrl={blog02} date="Nov 16, 2021" title="GPT3 and Open AI is the future. Let's explore how it is."/>
            <Article imgUrl={blog03} date="Nov 16, 2021" title="GPT3 and Open AI is the future. Let's explore how it is."/>
            <Article imgUrl={blog04} date="Nov 16, 2021" title="GPT3 and Open AI is the future. Let's explore how it is."/>
            <Article imgUrl={blog05} date="Nov 16, 2021" title="GPT3 and Open AI is the future. Let's explore how it is."/>
          </div>
        </div>
    </div>
  );
};

export default Blog;
