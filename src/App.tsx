import React, { useState, useEffect } from 'react'
import InfinitePagination from './export'

function App() {
  const [current, handleCurrent] = useState(1)
  const [pageData, handlePageData] = useState([] as any)
  const [loading, handleLoading] = useState(false)
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

  useEffect(() => {
    handleLoading(false)
  }, [pageData])

  const handleChange = (curr: number) => {
    if (loading) return
    handleLoading(true)
    handleCurrent(curr)
    getList(curr)
  }

  return (
    <div className="App">
      <ul>
        {
          pageData.map((item: any) => <li>{item.character}</li>)
        }
      </ul>
      <InfinitePagination
        current={current}
        disableChange={loading}
        onChange={handleChange}
        pageLength={pageData?.length}
        pageSize={pageSize}
      />
    </div>
  )
}

export default App
