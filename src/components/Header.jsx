import React from 'react'
import "../styles/Header.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div class="featured-post">
  <div class="featured-content">
    <h1>Title of a longer featured blog post</h1>
    <p>Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
    <Link to ="/">Continue reading...</Link>
  </div>
</div>

<div class="post-cards">
  <div class="post-card">
    <div class="post-text">
      <Link to ="/" class="category">World</Link>
      <h2>Featured post</h2>
      <p>Nov 12</p>
      <p className='content'>This is a wider card with supporting text below as a natural lead-in to additional content.</p>
      <a className="continue" href="/">Continue reading</a>
    </div>
    <div class="post-thumbnail">Thumbnail</div>
  </div>

  <div class="post-card">
    <div class="post-text">
      <Link to ="/" class="category2">Design</Link>
      <h2>Post title</h2>
      <p>Nov 11</p>
      <p className='content'>This is a wider card with supporting text below as a natural lead-in to additional content.</p>
      <Link to = "/">Continue reading</Link>
    </div>
    <div class="post-thumbnail">Thumbnail</div>
  </div>
</div>

    </>
  )
}

export default Header
