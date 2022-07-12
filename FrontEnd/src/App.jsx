import React, { useEffect, useState } from 'react';
import axios from 'axios' 
import Card from './components/Card';
import Pagination from './components/Pagination';
import './App.css'
const App = ({match}) => {
  const pageNum = match.params.pageNum || 1
  console.log(pageNum)
  const [post, setPost] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [page, setPage] = useState(parseInt(pageNum))
  const [pages, setPages] = useState(1)
  const fetchData = async ()=>{
      setLoading(true)
      try {
          const config = {
              headers: {
                  'content-type': 'application/json',
              },
          }
          const {data} =await axios.get(`/api/posts?page=${page}`)
          const {pages: totalPages, posts} = data
          setLoading(false)
          setPost(posts)
          setPages(totalPages)

      } catch (error) {
          setLoading(false)
          setError(error)
      }
  }
  useEffect(()=>{
      fetchData()
  },[page])
  return <div className='app'>
      <Pagination key={1} page={page} pages={pages} setPage={setPage}></Pagination>
      <div className='post-app'>
        {post.map((item)=>{
            return<Card key={item._id} post={item}></Card>
        })}
      </div>
      <Pagination  key={2} page={page} pages={pages} setPage={setPage}></Pagination>
  </div>;
};

export default App;

