import React from 'react'
import { Link } from "react-router-dom"

const Blogs = ({blogs}) => {
    console.log("BlogsPage")
    console.log(blogs)

    const blogs1 = [
        {
            "id": 1,
            "title": "Blog 1",
            "desc": "Lorem Ipsum has been the industry's standard dummy text",
            "coverImg": "https://i.pinimg.com/736x/9f/f7/8b/9ff78b1a00b89070db87a64ba03c9ba8.jpg"
        },
        {
            "id": 2,
            "title": "Blog 2",
            "desc": "Lorem Ipsum has been the industry's standard dummy text",
            "coverImg": "https://i.pinimg.com/736x/9f/f7/8b/9ff78b1a00b89070db87a64ba03c9ba8.jpg"
        },
        {
            "id": 3,
            "title": "Blog 3",
            "desc": "Lorem Ipsum has been the industry's standard dummy text",
            "coverImg": "https://i.pinimg.com/736x/9f/f7/8b/9ff78b1a00b89070db87a64ba03c9ba8.jpg"
        },
    ]

  return (
    <div className="w-full bg-[#f9f9f9] py-[50px]">
        <div className="max-w-[1240px] mx-auto">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-1 gap-8 px-4 text-black">

                {blogs.data.map((blog) =>
                    <Link to={`/blog/${blog.id}`}>
                        <div className="bg-white rounded-xl overflow-hidden drop-shadow-md">
                            <img className="h-56 w-full object-cover" src={`http://localhost:1337${blog.attributes.coverimg.data.attributes.url}`} />
                            <div className="p-8">
                                <h3 className="font-bold text-2xl my-l">{blog.attributes.blogTitle}</h3>
                                <p className="text-gray-600 text-xl">{blog.attributes.blogContent}</p>
                            </div>
                        </div>
                    </Link>
                )}
                


            </div>
        </div>
    </div>
  )
}

export default Blogs