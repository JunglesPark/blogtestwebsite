import { Homepage, BlogContentPage, AboutUsPage, ServicesCloudPage, ServicesMiddlewarePage, ContactUsPage } from "./pages"
import { Routes, Route } from "react-router-dom"
import { Navbar, Footer } from "./components"
import useFetch from "./hooks/useFetch"

export default function App() {
  let {loading, data, error} = useFetch("http://localhost:1337/api/blogs?populate=*")
  if(loading) return <p>Loading...</p>
  if(error) return <p>Error!</p>
  console.log(data)

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage blogs={data?data:""} />}></Route>
        <Route path="/blog/:id" element={<BlogContentPage blogs={data?data:""} />}></Route>
        <Route path="/about" element={<AboutUsPage />}></Route>
        <Route path="/services/cloud" element={<ServicesCloudPage />}></Route>
        <Route path="/services/middleware" element={<ServicesMiddlewarePage />}></Route>
        <Route path="/contactus" element={<ContactUsPage />}></Route>
        
      </Routes>
      <Footer/>
    </div>
  )
}
