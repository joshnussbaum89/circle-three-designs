'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MenuItems, SubMenuItems } from './index'
import { CartIcon, ChevronIcon } from '@/components/icons'
import logo from '../../../../public/logo.png'

export default function DesktopNavigation({ menuItems }: { menuItems: MenuItems[] }) {
  const depth = 0

  return (
    <nav className="mb-8 hidden items-center justify-between gap-8 border-b px-8 py-4 lg:flex">
      <Link href="/">
        <Image src={logo} alt="Circle Three Designs Logo" width={75} height={75} />
      </Link>
      <ul className="flex flex-wrap items-center">
        {menuItems.map((menu, index) => (
          <MenuItems items={menu} key={index} depth={depth} />
        ))}
      </ul>
      <Link href="/cart">
        <CartIcon />
      </Link>
    </nav>
  )
}

function MenuItems({ items, depth }: { items: MenuItems | SubMenuItems; depth: number }) {
  const [open, setOpen] = useState(false)

  const handleSetOpen = () => {
    setOpen(!open)
  }

  return (
    <li className="cursor-pointer">
      {items.submenu ? (
        <details className="relative text-gray-600 open:text-black">
          <summary
            aria-haspopup="menu"
            aria-expanded={open}
            onClick={handleSetOpen}
            className="flex items-center gap-1 px-4 py-2"
          >
            {items.title}
            <ChevronIcon />
          </summary>
          <Dropdown submenus={items.submenu} open={open} depth={depth} />
        </details>
      ) : (
        <Link href={items.url} className="link block px-4 py-2">
          {items.title}
        </Link>
      )}
    </li>
  )
}

function Dropdown({
  submenus,
  open,
  depth,
}: {
  submenus: SubMenuItems[]
  open: boolean
  depth: number
}) {
  depth++

  return (
    <ul
      className={
        open
          ? 'block w-80 bg-white py-2 data-[depth="1"]:absolute data-[depth="2"]:w-full data-[depth="1"]:rounded-lg data-[depth="1"]:border data-[depth="2"]:border-y data-[depth="2"]:px-2'
          : 'hidden'
      }
      data-depth={depth}
    >
      {submenus.map((submenu, index) => (
        <MenuItems items={submenu} key={index} depth={depth} />
      ))}
    </ul>
  )
}
