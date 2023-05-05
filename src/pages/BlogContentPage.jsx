import React from 'react'
import { BlogContent } from "../components";

const BlogContentPage = ({blogs}) => {
  return (
    <div>
        <BlogContent blogs={blogs}/>
    </div>
  )
}

export default BlogContentPage