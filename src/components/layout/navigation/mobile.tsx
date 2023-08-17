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
    <nav className="flex justify-between items-center gap-8 p-4 border-b lg:hidden text-lg">
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
        className={`absolute top-28 right-0 h-screen flex flex-col py-4 bg-white transition-all duration-300 ${
          navOpen ? 'visible left-0 opacity-100' : 'invisible -left-full opacity-0'
        }`}
      >
        {menuItems.map((menu, index) => (
          <MenuItems items={menu} key={index} depth={depth} />
        ))}

        <li className="mt-auto mx-auto p-8">
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
    <ul className={open ? 'block p-2 bg-white border-y' : 'hidden'} data-depth={depth}>
      {submenus.map((submenu, index) => (
        <MenuItems items={submenu} key={index} depth={depth} />
      ))}
    </ul>
  )
}
