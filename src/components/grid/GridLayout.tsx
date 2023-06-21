import Grid from '@/components/grid/Grid'
import { SheetyData, Sizes } from '@/types/data/sheety/SheetyData'

type GridLayoutProps = {
  data: SheetyData[]
}

export default function GridLayout(props: GridLayoutProps) {
  const { data } = props

  const sizes: Sizes = [
    'square-large',
    'rect-horizontal',
    'square-small',
    'square-small',
    'square-small',
    'square-small',
    'rect-vertical',
    'rect-horizontal',
    'square-large',
    'square-small',
    'square-small',
    'rect-horizontal',
    'rect-horizontal-large',
  ]

  if (!data) return <div className="flex items-center justify-center py-16 text-5xl font-bold">NO DATA!</div>

  return (
    <div className="grid h-[1432px] w-full grid-cols-2 grid-rows-5 gap-[2px] lg:grid-cols-5">
      {data.map((each, index) => {
        return (
          <Grid
            key={index}
            name={each.name}
            desc={each.description}
            link={each.link}
            image={each.image}
            buttonText={each.buttonText}
            size={sizes[index]}
          />
        )
      })}
    </div>
  )
}
