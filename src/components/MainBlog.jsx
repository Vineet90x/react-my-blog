import React from 'react'
import '../styles/MainBlog.css'
import { Link } from 'react-router-dom'

const MainBlog = () => {
  return (
    <>
<div class="container">
        <div class="main-content">
            <div class="blog-post">
                <h3>From The Firehouse</h3>
                <hr/>
                <h1>Sample blog post</h1>
                <p className='date'>January 1, 2014 by <Link to = "/">Mark</Link></p>
                <p className='para'>This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.</p>
                <hr/>
                <p className='para'>Lorem ipsum, dolor sit <Link to= "/">amet consectetur adipisicing</Link> elit. Maxime eius id quaerat hic doloremque praesentium consequuntur excepturi, harum, quam accusamus odio sed commodi quod pariatur? In cumque facilis facere, velit explicabo excepturi numquam quibusdam. Quisquam adipisci dolores blanditiis fugiat eius.
                </p>
                <p className='para'>Lorem ipsum dolor sit <b>amet consectetur adipisicing elit</b>.Autem nemo aperiam omnis repudiandae culpa quas dicta debitis dolor. Accusantium, minima.</p>
                <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod perferendis harum commodi necessitatibus autem deserunt fugit doloremque dolor ipsum suscipit explicabo id ab voluptate impedit ea nemo nam magnam consectetur</p>
            </div>
            <div class="blog-post">
                <h2>Heading</h2>
                <p className='para'>Nullam viverra sollicitudin mauris, eu malesuada libero venenatis sed. Vestibulum pharetra consequat justo, non ultricies mi faucibus vel. Cras sit amet ultricies libero. Suspendisse potenti. Duis in nunc non elit fermentum dignissim vel ac lorem. Phasellus at turpis nec lorem fermentum ultricies. Ut vehicula dui id dui ullamcorper, et feugiat sapien ultrices.</p>
            </div>

            <div class="blog-post">
                <h2>Sub-Heading</h2>
                <p className='para'>Integer gravida, felis ut consectetur interdum, ligula turpis rhoncus elit, in tincidunt mi orci non ex. Fusce ut purus sed sapien tincidunt venenatis. Duis euismod est ac venenatis scelerisque. </p>
                <li> 
                    Example Code block
                </li>
                <p className='para'>Maecenas nec nulla vel justo gravida fermentum non ac ante. Integer a ante sit amet justo auctor maximus. Suspendisse tincidunt ligula ac tortor convallis, vel luctus justo luctus.</p>
                </div>

            <div class="blog-post">
                <h2>Sub-Heading</h2>
                <p className='para'>Integer gravida, felis ut consectetur interdum, ligula turpis rhoncus elit, in tincidunt mi orci non ex. Fusce ut purus sed sapien tincidunt venenatis. Duis euismod est ac venenatis scelerisque. Maecenas nec nulla vel justo gravida fermentum non ac ante. Integer a ante sit amet justo auctor maximus. Suspendisse tincidunt ligula ac tortor convallis, vel luctus justo luctus.
                <li> 
                    A personal or professional website with regularly updated content, typically in reverse.
                </li>
                <li> 
                    To share thoughts, ideas, experiences, or expertise; build a personal or professional brand
                </li>
                <li>
                    Choose a niche, select a platform (e.g., WordPress, Blogger, Medium), design your blog.
                </li>
                </p>
                <p className='para'>
                Regularly updating your blog with fresh content keeps your audience engaged and helps you maintain a consistent presence online.
                <li>Focus on creating high-quality, informative, and engaging content </li>
                <li>Optimize your blog posts for search engines using relevant keywords</li>
                <li>Respond to comments, interact with your readers on social media</li>
                </p>
                <p className='para'>
                    Use social media to promote your blog and reach a wider audience
                </p>
            </div>
            <div class="blog-post">
                <h2>Another blog post</h2>
                <p className='date'>December 23, 2013 by <Link to = "/">Jacob</Link></p>
                <p className='para'>This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.</p>
                <p className='para'>Lorem ipsum, dolor sit <Link to= "/">amet consectetur adipisicing</Link> elit. Maxime eius id quaerat hic doloremque praesentium consequuntur excepturi, harum, quam accusamus odio sed commodi quod pariatur? In cumque facilis facere, velit explicabo excepturi numquam quibusdam. Quisquam adipisci dolores blanditiis fugiat eius.
                </p>
                <p className='para'>Lorem ipsum dolor sit <b>amet consectetur adipisicing elit</b>.Autem nemo aperiam omnis repudiandae culpa quas dicta debitis dolor. Accusantium, minima.</p>
                <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod perferendis harum commodi necessitatibus autem deserunt fugit doloremque dolor ipsum suscipit explicabo id ab voluptate impedit ea nemo nam magnam consectetur</p>
            </div>
            <div class="blog-post">
                <h2>New Feature</h2>
                <p className='date'>December 14, 2013 by <Link to = "/">Chris</Link></p>
                <p className='para'>This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.
                <li> 
                    A personal or professional website with regularly updated content, typically in reverse.
                </li>
                <li> 
                    To share thoughts, ideas, experiences, or expertise; build a personal or professional brand
                </li>
                <li>
                    Choose a niche, select a platform (e.g., WordPress, Blogger, Medium), design your blog.
                </li>
                </p>
                <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Autem nemo aperiam omnis repudiandae culpa quas dicta debitis dolor. Accusantium, minima.</p>
                <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod perferendis harum commodi necessitatibus autem deserunt fugit doloremque dolor ipsum suscipit explicabo id ab voluptate impedit ea nemo nam magnam consectetur</p>
            </div>

            <div className='btn'>
                <button id = "older">Older</button>
                <button id = "newer">Newer</button>
            </div>

        </div>
        <div class="sidebar">
            <div className="about">
            <h3 >About</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel et voluptas rerum repudiandae ea ratione id totam nemo voluptatem impedit?</p>
            </div>
            <div className='archives'>
                <h3>Archives</h3>
                <Link to ="/">March 2014</Link>
                <Link to ="/">February 2014</Link>
                <Link to ="/">January 2014</Link>
                <Link to ="/">December 2013</Link>
                <Link to ="/">November 2013</Link>
                <Link to ="/">October 2013</Link>
                <Link to ="/">September 2013</Link>
                <Link to ="/">August 2013</Link>
                <Link to ="/">July 2013</Link>
                <Link to ="/">June 2013</Link>
                <Link to ="/">May 2013</Link>
                <Link to ="/">April 2013</Link>
            </div>
            <div className='elsewhere'>
                <h3>Elsewhere</h3>
                <Link to ="/">Github</Link>
                <Link to ="/">Twitter</Link>
                <Link to ="/">Facebook</Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default MainBlog
