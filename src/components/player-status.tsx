import { Minus, Plus } from 'lucide-react'
import { Button } from './ui/button'
import { InputTable } from './input-table'

export function PlayerStatus() {
  return (
    <main className='flex gap-4'>
      <section className='flex flex-1 items-baseline space-y-4 border-[1px] p-4 px-6 rounded-md border-zinc-800 max-w-[612px]'>
        <div className='flex flex-col justify-end gap-2'>
          <h1
            className='text-5xl font-prosto text-primary font-semibold'
            style={{
              textShadow: '0 0 8px #02B7FF',
            }}
          >
            Joui <br />
            Jouki
          </h1>
          <p className='text-md font-prosto text-primary/60'>
            Investigador Ocultista
          </p>
        </div>

        <div className='flex flex-col items-start'>
          <div className='flex gap-2'>
            <InputTable
              className='text-4xl text-primary font-bold font-prosto tracking-wide max-w-36'
              value={'32/54'}
              style={{
                textShadow: '0 0 8px #F00',
              }}
            />
          </div>

          <div className='flex items-center gap-3'>
            <InputTable
              className='text-3xl text-primary font-bold font-prosto tracking-wide max-w-32'
              value={'39/82'}
              style={{
                textShadow: '0 0 8px #08F',
              }}
            />
          </div>
        </div>
      </section>

      {/* <div className='w-full bg-muted/70 h-1 rounded-full' /> */}

      <section className='flex flex-col space-y-4 border-[1px] p-4 px-6 rounded-md border-zinc-800 max-w-[612px]'>
        <div className='flex items-center gap-3 justify-between'>
          <h1
            className='text-3xl font-prosto'
            style={{
              textShadow: '0 0 6px #ffffffc8',
            }}
          >
            NEX
          </h1>
          <InputTable
            className='text-start text-4xl text-primary font-bold font-prosto tracking-wide rounded-md max-w-28'
            value={'50%'}
            style={{
              textShadow: '0 0 8px #F00',
            }}
          />
        </div>

        <div className='flex items-center gap-3 justify-between'>
          <h1
            className='text-3xl font-prosto'
            style={{
              textShadow: '0 0 6px #ffffffc8',
            }}
          >
            PE
          </h1>

          <InputTable
            className='text-start text-3xl text-primary font-bold font-prosto tracking-wide rounded-md max-w-24'
            value={'12'}
            style={{
              textShadow: '0 0 8px #08F',
            }}
          />
        </div>

        <div className='flex items-center gap-3 justify-between'>
          <h1
            className='text-3xl font-prosto'
            style={{
              textShadow: '0 0 6px #ffffffc8',
            }}
          >
            DEF
          </h1>

          <InputTable
            className='text-start text-3xl text-primary font-bold font-prosto tracking-wide rounded-md max-w-24'
            value={'12'}
            style={{
              textShadow: '0 0 8px #08F',
            }}
          />
        </div>
      </section>
    </main>
  )
}
