import React from 'react'
import { useParams } from "react-router-dom"

const BlogContent = ({blogs}) => {

  const {id} = useParams()

  let blog={}
  if (blog) {
    let arr = blogs.data.filter(blog => blog.id == id)
    blog=arr[0]
  } else {
    blog={}
  }

  console.log("Blog Object")
  console.log(blog)

  /*const blogs=[
    {
      "id": 1,
      "title":"10 days of solidity 1",
      "desc":"Learn how to learn solidity in 10 days",
      "coverImg":"https://i.pinimg.com/736x/9f/f7/8b/9ff78b1a00b89070db87a64ba03c9ba8.jpg",
      "content":"Intro to web 3 Day 1: Intro to Web3 What is Web3 To put it simply, lorem ipsum",

      "authorName":"John Doe",
      "authorImg":"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      "authorDesc":"Web Developer"
    },
    {
      "id": 2,
      "title":"10 days of solidity 2",
      "desc":"Learn how to learn solidity in 10 days",
      "coverImg":"https://i.pinimg.com/736x/9f/f7/8b/9ff78b1a00b89070db87a64ba03c9ba8.jpg",
      "content":"Intro to web 3 Day 1: Intro to Web3 What is Web3 To put it simply, lorem ipsum",

      "authorName":"John Doe",
      "authorImg":"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      "authorDesc":"Web Developer"
    },
    {
      "id": 3,
      "title":"10 days of solidity 3",
      "desc":"Learn how to learn solidity in 10 days",
      "coverImg":"https://i.pinimg.com/736x/9f/f7/8b/9ff78b1a00b89070db87a64ba03c9ba8.jpg",
      "content":"Intro to web 3 Day 1: Intro to Web3 What is Web3 To put it simply, lorem ipsum",

      "authorName":"John Doe",
      "authorImg":"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      "authorDesc":"Web Developer"
    },
  ]

  let blog = blogs.filter(blog => blog.id == id)
  blog = blogs[0]*/

  return (
    
    <div className="w-full pb-10 bh-[#f9f9f9]">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm-grid-cols-3 ss:gri-cols-1 
        gap-x-8 gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black">

          <div className="col-span-2 gap-x-8 gap-y-8">
            <img className="h-56 w-ful object-cover" src={`http://localhost:1337${blog.attributes.coverimg.data.attributes.url}`} />
            <h1 className="font-bold text-2xl my-1 pt-5">{blog.attributes.blogTitle}</h1>
            <div className="pt-5"><p>{blog.attributes.blogContent}</p></div>
          </div>

          <div className="w-full bg-white rounded-xl overflow-hidden drop-shadow-md py-5 max-h-[250px]">
            <div>
              <img className="p-2 w-32 h-32 rounded-full mx-auto" src={blog.authorImg} />
              <h1 className="font-bold text-2xl text-center text-gray-900 pt-3">{blog.authorName}</h1>
              <p className="text-center text-gray-900 font-medium">{blog.authorDesc}</p>
             
            </div>
          </div>

        </div>
      </div>
    </div>
    
  )
}

export default BlogContent