import heartStraightLight from '@iconify/icons-ph/heart-straight-light'
import { Icon } from '@iconify/react'

import { Button } from '@/components/button/Button'
import Layout from '@/components/layout/Layout'
import { ButtonLink } from '@/components/link/ButtonLink'

export default function Profile() {
  return (
    <Layout title="Profile Page" desc="View your XLA Shop profile!" backToPreviousPage="/">
      <div className="grid grid-cols-5">
        <div className="col-span-4 flex flex-col gap-4">
          <div className="relative h-[190px] w-full sm:h-[250px]">
            <div className="h-[160px] rounded-2xl bg-gradient-to-br from-rose-500 via-purple-800 to-neutral-300 sm:h-[220px]" />
            <div className="absolute bottom-2 left-6 h-[64px] w-[64px] rounded-xl border-4 bg-gradient-to-bl from-fuchsia-700 via-sky-600 to-purple-100 sm:h-[100px] sm:w-[100px]" />
          </div>
          <div className="flex flex-col justify-between gap-5 md:flex-row">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-bold uppercase">JakeGyllenhaal</h1>
              <div className="space-x-4">
                <span className="w-fit rounded-lg border border-white px-2 py-1">gamer</span>
                <span className="text-gray-500 md:text-xl">Joined December 25, 2022</span>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-4">
              <Button font="bold">Settings</Button>
              <ButtonLink href="/profile/edit" font="bold">
                Edit Profile
              </ButtonLink>
            </div>
          </div>
          <div className="my-4 border border-white border-opacity-25" />
          <div className="flex flex-col gap-8 sm:flex-row">
            <div className="flex w-80 flex-col gap-6 rounded-2xl bg-soot-700 px-6 py-8">
              <span className=" text-2xl font-bold">Your wishlist</span>
              {[...Array(5)].map((each, key) => (
                <div key={key} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className=" h-8 w-8 rounded bg-yellow-600" />
                    <span>Game</span>
                  </div>
                  <div>
                    <Icon icon={heartStraightLight} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="col-span-1 flex w-10/12 flex-col gap-2 rounded-lg bg-soot-700 p-4">
            <ButtonLink href="/" variant="transparent">
              Profile
            </ButtonLink>
            <ButtonLink href="/" variant="transparent">
              Link One
            </ButtonLink>
            <ButtonLink href="/" variant="transparent">
              Link Two
            </ButtonLink>
            <ButtonLink href="/" variant="transparent">
              Link Three
            </ButtonLink>
            <div className="rounded border border-white border-opacity-20" />
            <ButtonLink href="/" variant="transparent" className="text-red-600">
              Log Out
            </ButtonLink>
          </div>
        </div>
      </div>
    </Layout>
  )
}
