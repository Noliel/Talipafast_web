'use client'

import useLayoutService from '@/lib/hooks/useLayout'
import Link from 'next/link'
import useSWR from 'swr'
import Header from './header/Header'

const Sidebar = () => {
  const { toggleDrawer } = useLayoutService()
  const { data: categories, error } = useSWR('/api/products/categories')

  if (error) return error.message
  if (!categories) return 'Loading...'

  return (
    <div className=" w-80 bg-base-200 ">
      <Header />
      <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
        <li>
          <h2 className="text-xl">Shop By Department</h2>
        </li>
        {categories.map((category: string) => (
          <li key={category}>
            <Link href={`/search?category=${category}`} onClick={toggleDrawer}>
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
