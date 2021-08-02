import React, { useState, useEffect } from 'react'
import './index.scss'

export interface PaginationProps {
  current?: number;
  pageSize?: number;
  pageData?: Array<any>;
  className?: string;
  onChange?: (current: number) => void;
  prevText?: React.ReactNode;
  nextText?: React.ReactNode;
  prev?: React.ReactNode;
  next?: React.ReactNode;
}

const InfinitePagination = ({
  current = 1,
  pageSize = 10,
  pageData = [],
  className = '',
  prevText = <span>&lt;</span>,
  nextText = <span>&gt;</span>,
  ...props
}: PaginationProps) => {
  const {
    onChange, prev, next
  } = props
  const [loading, handleLoading] = useState(false)

  useEffect(() => {
    handleLoading(false)
  }, [pageData])

  const isFirstPage = () => (
    current <= 1
  )

  const isLastPage = () => (
    pageSize > (pageData?.length || 0)
  )

  const handleChange = (type: number) => {
    if (loading) return
    handleLoading(true)
    if ((type === -1 && isFirstPage()) || (type === 1 && isLastPage())) return
    const nextNo = current + 1 * type
    onChange?.(nextNo)
  }

  const renderPrev = () => (
    <li
      className={`pagination-item pagination-prev ${isFirstPage() ? 'disabled' : ''}`}
      onClick={() => handleChange(-1)}
    >
      {
        prev === undefined ? <span>{prevText}</span> : prev
      }
    </li>
  )

  const renderNext = () => (
    <li
      className={`pagination-item pagination-next ${isLastPage() ? 'disabled' : ''}`}
      onClick={() => handleChange(1)}
    >
      {
        next === undefined ? <span>{nextText}</span> : next
      }
    </li>
  )

  return (
    <ul className={`pagination ${className}`}>
      {renderPrev()}
      <li className="pagination-item active">{current}</li>
      {renderNext()}
    </ul>
  )
}

export default InfinitePagination
