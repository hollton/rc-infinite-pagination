import React from 'react'
import './index.scss'

export interface PaginationProps {
  current?: number;
  pageSize?: number;
  pageLength?: number;
  wrapClassName?: string;
  itemClassName?: string;
  disableChange?: boolean;
  onChange?: (current: number) => void;
  prevText?: React.ReactNode;
  nextText?: React.ReactNode;
  prev?: React.ReactNode;
  next?: React.ReactNode;
}

const InfinitePagination = ({
  current = 1,
  pageSize = 10,
  pageLength = 0,
  wrapClassName = 'pagination',
  itemClassName = 'pagination-item',
  prevText = <span>&lt;</span>,
  nextText = <span>&gt;</span>,
  ...props
}: PaginationProps) => {
  const {
    onChange, prev, next, disableChange
  } = props

  const isFirstPage = () => (
    current <= 1
  )

  const isLastPage = () => (
    pageLength < pageSize
  )

  const handleChange = (type: number) => {
    if (disableChange) return
    if ((type === -1 && isFirstPage()) || (type === 1 && isLastPage())) return
    const nextNo = current + 1 * type
    onChange?.(nextNo)
  }

  const renderPrev = () => (
    <li
      className={`${itemClassName} pagination-prev ${isFirstPage() ? 'disabled' : ''}`}
      onClick={() => handleChange(-1)}
    >
      {
        prev === undefined ? <span>{prevText}</span> : prev
      }
    </li>
  )

  const renderNext = () => (
    <li
      className={`${itemClassName} pagination-next ${isLastPage() ? 'disabled' : ''}`}
      onClick={() => handleChange(1)}
    >
      {
        next === undefined ? <span>{nextText}</span> : next
      }
    </li>
  )

  return (
    <ul className={wrapClassName}>
      {renderPrev()}
      <li className={`${itemClassName} active`}>{current}</li>
      {renderNext()}
    </ul>
  )
}

export default InfinitePagination
