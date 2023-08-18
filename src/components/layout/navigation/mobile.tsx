'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MenuItems, SubMenuItems } from './index'
import { CartIcon, HamburgerIcon, CloseIcon, ChevronIcon } from '@/components/icons'
import logo from '../../../../public/logo.png'
import SocialIcons from '../social-icons'

export default function MobileNavigation({ menuItems }: { menuItems: MenuItems[] }) {
  const [navOpen, setNavOpen] = useState(false)
  const depth = 0

  const handleSetNavOpen = () => {
    setNavOpen(!navOpen)
  }

  return (
    <nav className="flex items-center justify-between gap-8 border-b p-4 text-lg lg:hidden">
      <div onClick={handleSetNavOpen} className="cursor-pointer">
        {navOpen ? <CloseIcon /> : <HamburgerIcon />}
      </div>

      <Link href="/">
        <Image src={logo} alt="Circle Three Designs Logo" width={75} height={75} />
      </Link>

      <Link href="/cart">
        <CartIcon />
      </Link>

      <ul
        className={`absolute right-0 top-28 flex h-screen flex-col bg-white py-4 transition-all duration-300 ${
          navOpen ? 'visible left-0 opacity-100' : 'invisible -left-full opacity-0'
        }`}
      >
        {menuItems.map((menu, index) => (
          <MenuItems items={menu} key={index} depth={depth} />
        ))}

        <li className="mx-auto mt-auto p-8">
          <SocialIcons />
        </li>
      </ul>
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
        <details className="text-gray-600 open:text-black">
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
    <ul className={open ? 'block border-y bg-white p-2' : 'hidden'} data-depth={depth}>
      {submenus.map((submenu, index) => (
        <MenuItems items={submenu} key={index} depth={depth} />
      ))}
    </ul>
  )
}
