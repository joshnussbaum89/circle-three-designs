import MobileNavigation from './mobile'
import DesktopNavigation from './desktop'

const menuItems = [
  {
    id: '1',
    title: 'Road Cases',
    url: '/road-cases',
    submenu: [
      {
        id: '1',
        title: 'Amp & Cab Cases',
        url: '/amp-cab-cases',
        submenu: [
          {
            id: '1',
            title: 'Amp Heads',
            url: '/amp-heads',
          },
          {
            id: '2',
            title: 'Combo Amps / Cabs',
            url: '/combo-amps-cabs',
          },
          {
            id: '3',
            title: 'Multiple Amps / Cabs / Fly Racks',
            url: '/multiple-amps-cabs-fly-racks',
          },
        ],
      },
      {
        id: '2',
        title: 'Console',
        url: '/console',
        submenu: [
          {
            id: '1',
            title: 'Allen & Heath Flight Cases',
            url: '/allen-heath-flight-cases',
          },
          {
            id: '2',
            title: 'Consoles',
            url: '/consoles',
          },
        ],
      },
      {
        id: '3',
        title: 'Guitar / Bass',
        url: '/guitar-bass',
        submenu: [
          {
            id: '1',
            title: 'CPAC Guitar Vault',
            url: '/cpac-guitar-vault',
          },
          {
            id: '2',
            title: 'Fly Vault',
            url: '/fly-vault',
          },
          {
            id: '3',
            title: 'Single Case',
            url: '/single-case',
          },
          {
            id: '4',
            title: 'Guitar Boat',
            url: '/guitar-boat',
          },
        ],
      },
      {
        id: '4',
        title: 'Keyboard / Piano',
        url: '/keyboard-piano',
        submenu: [
          {
            id: '1',
            title: 'CPAC Keyboard Vault',
            url: '/cpac-keyboard-vault',
          },
          {
            id: '2',
            title: 'Single Keyboard',
            url: '/single-keyboard',
          },
          {
            id: '3',
            title: 'Keyboard Blinds',
            url: '/keyboard-blinds',
          },
          {
            id: '4',
            title: 'Keyboard Trunk',
            url: '/keyboard-trunk',
          },
          {
            id: '5',
            title: 'Vintage Keyboards',
            url: '/vintage-keyboards',
          },
          {
            id: '6',
            title: 'B3 / Leslie',
            url: '/b3-leslie',
          },
          {
            id: '7',
            title: 'Yamaha CP-70 / CP-80',
            url: '/yamaha-cp-70-cp-80',
          },
          {
            id: '8',
            title: 'Pianos',
            url: '/pianos',
          },
        ],
      },
      {
        id: '5',
        title: 'Pedalboard',
        url: '/pedalboard',
        submenu: [
          {
            id: '1',
            title: 'CPAC Pedalboard Vault',
            url: '/cpac-pedalboard-vault',
          },
          {
            id: '2',
            title: 'Pedalboard Flight Case',
            url: '/pedalboard-flight-case',
          },
          {
            id: '3',
            title: 'Pedalboard in Pelican',
            url: '/pedalboard-in-pelican',
          },
        ],
      },
      {
        id: '6',
        title: 'Rackmount',
        url: '/rackmount',
        submenu: [
          {
            id: '1',
            title: 'CPAC Rack',
            url: '/cpac-rack',
          },
          {
            id: '2',
            title: 'Traditional Shockmount',
            url: '/traditional-shockmount',
          },
          {
            id: '3',
            title: 'Standard Rackmount',
            url: '/standard-rackmount',
          },
          {
            id: '4',
            title: 'Fly Racks',
            url: '/fly-racks',
          },
          {
            id: '5',
            title: 'Monitor Fly Racks',
            url: '/monitor-fly-racks',
          },
          {
            id: '6',
            title: 'Rackstation',
            url: '/rackstation',
          },
        ],
      },
      {
        id: '7',
        title: 'Vaults',
        url: '/vaults',
        submenu: [
          {
            id: '1',
            title: 'CPAC Guitar Vault',
            url: '/cpac-guitar-vault',
          },
          {
            id: '2',
            title: 'Fly Vault',
            url: '/fly-vault',
          },
          {
            id: '3',
            title: 'CPAC Keyboard Vault',
            url: '/cpac-keyboard-vault',
          },
          {
            id: '4',
            title: 'Drum Vault',
            url: '/drum-vault',
          },
          {
            id: '5',
            title: 'Studio Vault',
            url: '/studio-vault',
          },
          {
            id: '6',
            title: 'CPAC Pedalboard Vault',
            url: '/cpac-pedalboard-vault',
          },
        ],
      },
      {
        id: '8',
        title: 'Workbox',
        url: '/workbox',
        submenu: [
          {
            id: '1',
            title: 'Workbox: Hinged Lid',
            url: '/workbox-hinged-lid',
          },
          {
            id: '2',
            title: 'Workbox: Life-Off Lid',
            url: '/workbox-life-off-lid',
          },
          {
            id: '3',
            title: 'Doublewide Workbox: Lift-Off Lid',
            url: '/doublewide-workbox-lift-off-lid',
          },
          {
            id: '4',
            title: 'Doublewide Workbox: Clamshell',
            url: '/doublewide-workbox-clamshell',
          },
        ],
      },
      {
        id: '9',
        title: 'Workstation',
        url: '/workstation',
        submenu: [
          {
            id: '1',
            title: 'TM Workstation',
            url: '/tm-workstation',
          },
          {
            id: '2',
            title: 'GT Workstation',
            url: '/gt-workstation',
          },
          {
            id: '3',
            title: 'DW Workstation',
            url: '/dw-workstation',
          },
          {
            id: '4',
            title: 'DW Superdesk',
            url: '/dw-superdesk',
          },
          {
            id: '5',
            title: 'DW Rigger Workstation',
            url: '/dw-rigger-workstation',
          },
          {
            id: '6',
            title: 'Rackstation',
            url: '/rackstation',
          },
          {
            id: '7',
            title: 'Studio Workstation',
            url: '/studio-workstation',
          },
          {
            id: '8',
            title: 'Executive Workstation',
            url: '/executive-workstation',
          },
          {
            id: '9',
            title: 'Custom Workstation',
            url: '/custom-workstation',
          },
        ],
      },
      {
        id: '10',
        title: 'Wardrobe',
        url: '/wardrobe',
      },
      {
        id: '11',
        title: 'Entertainment Case',
        url: '/entertainment-case',
      },
      {
        id: '12',
        title: 'Stealth Chair',
        url: '/stealth-chair',
      },
      {
        id: '13',
        title: 'Guitar-Tech Briefcase',
        url: '/guitar-tech-briefcase',
      },
      {
        id: '14',
        title: 'Trunks',
        url: '/trunks',
      },
      {
        id: '15',
        title: 'TV Case',
        url: '/tv-case',
      },
    ],
  },
  {
    id: '2',
    title: 'Fly Racks',
    url: '/fly-racks',
    submenu: [
      {
        id: '1',
        title: 'Fly Racks',
        url: '/fly-racks',
        submenu: [
          {
            id: '1',
            title: '3RU (Carry On)',
            url: '/3ru-carry-on',
          },
          {
            id: '2',
            title: '3RU+ (Carry On)',
            url: '/3ru-carry-on',
          },
          {
            id: '3',
            title: 'T-Rack (Carry On)',
            url: '/t-rack-carry-on',
          },
          {
            id: '4',
            title: '2RU Wood Fly Rack (Carry On)',
            url: '/2ru-wood-fly-rack-carry-on',
          },
          {
            id: '5',
            title: '2RU Hybrid HH Fly Rack (Carry On)',
            url: '/2ru-hybrid-hh-fly-rack-carry-on',
          },
          {
            id: '6',
            title: '4RU Aluminum (Shallow)',
            url: '/4ru-aluminum-shallow',
          },
          {
            id: '7',
            title: '4RU / 6RU Aluminum',
            url: '/4ru-6ru-aluminum',
          },
          {
            id: '8',
            title: '4RU / 6RU Wood',
            url: '/4ru-6ru-wood',
          },
          {
            id: '9',
            title: '4RU / 6RU Hybrid',
            url: '/4ru-6ru-hybrid',
          },
          {
            id: '10',
            title: '4RU / 6RU Hybrid HH',
            url: '/4ru-6ru-hybrid-hh',
          },
          {
            id: '11',
            title: 'Monitor Fly Racks',
            url: '/monitor-fly-racks',
          },
        ],
      },
      {
        id: '2',
        title: 'Monitor Fly Racks',
        url: '/monitor-fly-racks',
        submenu: [
          {
            id: '1',
            title: 'Dual Monitor Fly Rack in Pelican Air 1637',
            url: '/dual-monitor-fly-rack-in-pelican-air-1637',
          },
          {
            id: '2',
            title: 'FIT with Monitor in Pelican Air 1637',
            url: '/fit-with-monitor-in-pelican-air-1637',
          },
          {
            id: '3',
            title: 'MA2 onPC with Monitor in Pelican Air 1637',
            url: '/ma2-onpc-with-monitor-in-pelican-air-1637',
          },
        ],
      },
      {
        id: '3',
        title: 'Fly Rack to Truck Pack',
        url: '/fly-rack-to-truck-pack',
      },
    ],
  },
  {
    id: '3',
    title: 'CPAC',
    url: '/cpac',
  },
  {
    id: '4',
    title: 'Case Construction',
    url: '/case-construction',
  },
  {
    id: '5',
    title: 'Clients & Brands',
    url: '/clients-brands',
  },
  {
    id: '6',
    title: 'Jobs',
    url: '/jobs',
  },
  {
    id: '7',
    title: 'Contact',
    url: '/contact',
  },
  {
    id: '8',
    title: 'Shop',
    url: '/shop',
  },
]

export type MenuItems = {
  id: string
  title: string
  url: string
  submenu?: SubMenuItems[]
}

export type SubMenuItems = {
  id: string
  title: string
  url: string
  submenu?: {
    id: string
    title: string
    url: string
  }[]
}

export default function Navigation() {
  return (
    <>
      <MobileNavigation menuItems={menuItems} />
      <DesktopNavigation menuItems={menuItems} />
    </>
  )
}
