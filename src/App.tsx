import React, { useState, useEffect } from 'react'
import InfinitePagination from './export'

function App() {
  const [current, handleCurrent] = useState(1)
  const [pageData, handlePageData] = useState([] as any)
  const pageSize = 10

  const getList = async (curr: number) => {
    const result = await fetch(
      `https://animechan.vercel.app/api/quotes/anime?title=naruto&limit=${pageSize}&page=${curr}&type=Doc`
    ).then((res) => res.json())
    handlePageData(result)
  }

  useEffect(() => {
    getList(current)
  }, [])

  const handleChange = (curr: number) => {
    handleCurrent(curr)
    getList(curr)
  }

  const prev = <button style={{ height: '100%' }}>prev</button>

  const next = <button style={{ height: '100%' }}>next</button>

  return (
    <div className="App">
      <ul>
        {
          pageData?.map((item: any) => <li>{item.character}</li>)
        }
      </ul>
      <InfinitePagination
        current={current}
        pageSize={pageSize}
        pageData={pageData}
        className="customizeClassName"
        onChange={handleChange}
        prevText="prev"
        nextText="next"
        prev={prev}
        next={next}
      />
    </div>
  )
}

export default App
