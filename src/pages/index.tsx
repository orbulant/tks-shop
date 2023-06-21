import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

import Layout from '@/components/layout/Layout'
import Scroll from '@/components/scroll/Scroll'
import shuffleArray from '@/lib/utils/shuffleArray'
import { SheetyData, SheetyDataChunkSize } from '@/types/data/sheety/SheetyData'

type HomeProps = {
  data: SheetyData[][]
}

export default function Home(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { data } = props

  return (
    <Layout title="XLA Shop" desc="World of mobile game payments">
      <Scroll data={data} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  // const sheetName = 'sheet1'
  // const url = `https://api.sheety.co/7db1c4a3a2d10b5eb338f852c4ecdcbb/xlaShopDb/${sheetName}`

  // const sheetyData: SheetyData[] = await fetch(url, {
  //   method: 'GET',
  // })
  //   .then((res) => res.json())
  //   .then((json) => json[sheetName])

  const sheetyData = Array(87).fill({
    name: 'Game',
    description: 'Description',
    link: '#',
    image: '#',
    buttonText: 'Button Text',
    id: 1,
  })

  const data: SheetyData[][] = []

  while (sheetyData.length > 0) data.push(shuffleArray(sheetyData.splice(0, SheetyDataChunkSize.AMOUNT)))

  return {
    props: { data },
  }
}
