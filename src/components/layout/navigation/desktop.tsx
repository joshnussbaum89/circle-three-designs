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
    <nav className="hidden lg:flex gap-8 justify-between items-center mb-8 px-8 py-4 border-b">
      <Link href="/">
        <Image src={logo} alt="Circle Three Designs Logo" width={75} height={75} />
      </Link>
      <ul className="flex items-center flex-wrap">
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
            className="flex items-center gap-1 py-2 px-4"
          >
            {items.title}
            <ChevronIcon />
          </summary>
          <Dropdown submenus={items.submenu} open={open} depth={depth} />
        </details>
      ) : (
        <Link href={items.url} className="block py-2 px-4 link">
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
          ? 'block w-80 py-2 bg-white data-[depth="1"]:absolute data-[depth="1"]:border data-[depth="1"]:rounded-lg data-[depth="2"]:px-2 data-[depth="2"]:w-full data-[depth="2"]:border-y'
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
