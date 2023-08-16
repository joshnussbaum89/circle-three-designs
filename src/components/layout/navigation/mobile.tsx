'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MenuItems, SubMenuItems } from './index'
import logo from '../../../../public/logo.png'
import CartIcon from '@/components/icons/cart'
import HamburgerIcon from '@/components/icons/hamburger'

export default function DesktopNavigation({ menuItems }: { menuItems: MenuItems[] }) {
  return (
    <nav className="flex gap-8 justify-between items-center mb-8 p-4 border lg:hidden">
      <Link href="/">
        <HamburgerIcon />
      </Link>

      {/* <ul className="flex items-center flex-wrap">
        {menuItems.map((menu, index) => {
          const depth = 0
          return <MenuItems items={menu} key={index} depth={depth} />
        })}
      </ul> */}

      <Link href="/">
        <Image src={logo} alt="Circle Three Designs Logo" width={75} height={75} />
      </Link>
      <Link href="/cart">
        <CartIcon />
      </Link>
    </nav>
  )
}

function MenuItems({ items, depth }: { items: MenuItems | SubMenuItems; depth: number }) {
  const [open, setOpen] = useState(false)

  return (
    <li className="cursor-pointer">
      {items.submenu ? (
        <details className="relative text-gray-600 open:text-black">
          <summary
            aria-haspopup="menu"
            aria-expanded={open ? 'true' : 'false'}
            onClick={() => setOpen((prev) => !prev)}
            className="flex items-center gap-1 py-2 px-4"
          >
            {items.title}

            <svg
              className="fill-current w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
            </svg>
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
  // increment depth
  depth++

  const dropdownStyles = open
    ? 'block w-80 py-2 bg-white data-[depth="1"]:absolute data-[depth="1"]:border data-[depth="1"]:rounded-lg data-[depth="2"]:px-2 data-[depth="2"]:w-full data-[depth="2"]:border-y'
    : 'hidden'

  return (
    <ul className={dropdownStyles} data-depth={depth}>
      {submenus.map((submenu, index) => (
        <MenuItems items={submenu} key={index} depth={depth} />
      ))}
    </ul>
  )
}
