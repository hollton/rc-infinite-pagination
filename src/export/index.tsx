import React, { useState, useEffect, cloneElement, isValidElement } from 'react'
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
  first?: React.ReactNode;
}

const InfinitePagination = ({
  current = 1,
  pageSize = 10,
  pageData = [],
  className = '',
  prevText = <>&lt;</>,
  nextText = <>&gt;</>,
  ...props
}: PaginationProps) => {
  const {
    onChange, prev, next, first
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
    if ((type === -1 && isFirstPage()) || (type === 1 && isLastPage())) return
    const nextNo = current + 1 * type
    handleLoading(true)
    onChange?.(nextNo)
  }

  const renderFrist = () => !!first && (
    <li
      className="pagination-item pagination-first"
      onClick={() => onChange?.(1)}
    >
      {
        isValidElement(first) ? cloneElement(first, { disabled: isFirstPage() }) : first
      }
    </li>
  )

  const renderPrev = () => (
    <li
      className="pagination-item pagination-prev"
      onClick={() => handleChange(-1)}
    >
      {
        prev === undefined ? (
          <button
            className={`pagination-item-link ${isFirstPage() ? 'pagination-item-disabled' : ''}`}
          >
            {prevText}
          </button>
        ) : (isValidElement(prev) ? cloneElement(prev, { disabled: isFirstPage() }) : prev)
      }
    </li>
  )

  const renderNext = () => (
    <li
      className="pagination-item pagination-next"
      onClick={() => handleChange(1)}
    >
      {
        next === undefined ? (
          <button
            className={`pagination-item-link ${isLastPage() ? 'pagination-item-disabled' : ''}`}
          >
            {nextText}
          </button>
        ) : (isValidElement(next) ? cloneElement(next, { disabled: isLastPage() }) : next)
      }
    </li>
  )

  return (
    <ul className={`pagination ${className}`}>
      {renderFrist()}
      {renderPrev()}
      <li className="pagination-item">
        <button className="pagination-item-link pagination-item-active">{current}</button>
      </li>
      {renderNext()}
    </ul>
  )
}

export default InfinitePagination
