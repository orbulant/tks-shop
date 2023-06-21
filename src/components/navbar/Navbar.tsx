import { useState } from 'react'

import { Transition } from '@headlessui/react'
import menuHamburger from '@iconify/icons-charm/menu-hamburger'
import xIcon from '@iconify/icons-ph/x'
import { Icon } from '@iconify/react'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const DynamicBabkaLoginButton = dynamic(() => import('@/components/babka/BabkaLoginButton'), { ssr: false })

export default function Navbar() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false)

  return (
    <>
      <nav className="sticky top-0 z-50 flex h-11 items-center justify-between bg-white px-7">
        <div className="flex w-full flex-row items-center justify-between">
          <div className="mx-3 space-x-2">
            <Link className="text-2xl font-bold" href="/">
              TKS Shop
            </Link>
            <Link href="/info" className="text-gray-600 italic">(Click here for more info)</Link>
          </div>

          <DynamicBabkaLoginButton
            id="babka-button"
            className="hidden h-10 w-40 overflow-hidden rounded-[100px] bg-transparent md:block"
          />

          <button className="md:hidden" onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}>
            {isHamburgerOpen ? (
              <Icon icon={xIcon} className="h-5 w-5 transition hover:rotate-90 active:scale-110" />
            ) : (
              <Icon icon={menuHamburger} className="h-5 w-5 active:scale-110" />
            )}
          </button>
        </div>

        <Transition
          show={isHamburgerOpen}
          className="h-screen overflow-hidden transition-all duration-1000 md:hidden"
          enterFrom="transform scale-95 opacity-0 max-h-0"
          enterTo="transform scale-100 opacity-100 max-h-screen"
          leaveFrom="transform scale-100 opacity-100 max-h-screen"
          leaveTo="transform scale-95 opacity-0 max-h-0"
        >
          <div className="flex flex-col items-center py-10">
            <DynamicBabkaLoginButton
              id="babka-button-mobile"
              className="h-11 w-full max-w-sm overflow-hidden rounded-[100px] bg-transparent"
            />
          </div>
        </Transition>
      </nav>
    </>
  )
}
