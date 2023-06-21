import { useCallback, useEffect, useState } from 'react'

import spinnerGap from '@iconify/icons-ph/spinner-gap'
import { Icon } from '@iconify/react'
import InfiniteScroll from 'react-infinite-scroll-component'

import shuffleArray from '@/lib/utils/shuffleArray'
import { SheetyData } from '@/types/data/sheety/SheetyData'

import GridLayout from '../grid/GridLayout'

type ScrollProps = {
  data: SheetyData[][]
}

export default function Scroll(props: ScrollProps) {
  const { data } = props

  const [allData, setAllData] = useState<SheetyData[][]>([])
  const [nextPosition, setNextPosition] = useState(1)
  const perPage = 1

  const loadProducts = useCallback(() => {
    const newElement = data.length === 1 ? shuffleArray(data[0]) : shuffleArray(data[nextPosition])

    const appendNextSetOfData = setTimeout(() => {
      setAllData((prev) => [...prev, newElement])
    }, 500)

    setNextPosition((prev) => (prev + 1 === data.length ? 0 : prev + perPage))

    return () => clearTimeout(appendNextSetOfData)
  }, [data, nextPosition])

  useEffect(() => {
    setAllData((prev) => [(prev[0] = shuffleArray(data[0]))])
  }, [data])

  return (
    <InfiniteScroll
      dataLength={allData.length}
      next={loadProducts}
      hasMore={true}
      loader={
        <div className="flex items-center justify-center py-8">
          <Icon className="h-8 w-8 animate-spin" icon={spinnerGap} />
        </div>
      }
    >
      <div className="flex flex-col gap-[2px]">
        {allData.map((each, index) => (
          <GridLayout key={index} data={each} />
        ))}
      </div>
    </InfiniteScroll>
  )
}
