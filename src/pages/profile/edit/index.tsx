import googleLogoBold from '@iconify/icons-ph/google-logo-bold'
import { Icon } from '@iconify/react'

import { Button } from '@/components/button/Button'
import Layout from '@/components/layout/Layout'

export default function EditProfile() {
  return (
    <Layout backToPreviousPage="/profile">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Edit Profile</h1>
        <div className="flex items-center gap-8">
          <div className="h-16 w-16 rounded-lg bg-yellow-500" />
          <span className="font-light">PNG, JPEG, or SVG formats - maximum size of 1 MB</span>
        </div>
        <div className="flex gap-2">
          <Button>Upload</Button>
          <Button variant="red_outline">Delete Avatar</Button>
        </div>
        <div className="flex w-96 flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label>Email</label>
            <input type="text" className="rounded-lg px-4 py-2" />
          </div>
          <div className="flex flex-col gap-2">
            <label>Nickname (max: 20 Characters)</label>
            <input type="text" className="rounded-lg px-4 py-2" />
          </div>
          <div className="flex flex-col gap-2">
            <label>Date of Birthday</label>
            <input type="text" className="rounded-lg px-4 py-2" />
            <span className="text-sm text-gray-500">You can only change your date of birth once</span>
          </div>
          <Button variant="red">Save</Button>
        </div>
        <div className="my-4 rounded-lg border border-white border-opacity-20" />
        <h2 className="text-3xl font-semibold">Push Notifications</h2>
        <div className="flex flex-col gap-4">
          {[...Array(5)].map((each, key) => (
            <label key={key} className="relative inline-flex cursor-pointer items-center">
              <input type="checkbox" value="" className="peer sr-only" />
              <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300"></div>
              <span className="ml-3 text-sm font-medium">Some Setting</span>
            </label>
          ))}
        </div>
        <div className="my-4 rounded-lg border border-white border-opacity-20" />
        <h2 className="text-3xl font-semibold">Social Networks</h2>
        <div className="flex gap-8">
          <div className="flex h-32 w-32 flex-col justify-between rounded-lg bg-soot-400 p-2">
            <Icon icon={googleLogoBold} className="h-6 w-6" />
            <Button variant="red">Disconnect</Button>
          </div>
          {[...Array(3)].map((each, key) => (
            <div key={key} className="flex h-32 w-32 flex-col justify-between rounded-lg bg-soot-400 p-2">
              <Icon icon={googleLogoBold} className="h-6 w-6" />
              <Button>Connect</Button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
