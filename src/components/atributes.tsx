import { Backpack, Dumbbell, Eye, PersonStanding } from 'lucide-react'
import { InputTable } from './input-table'

export function Atributes() {
  return (
    <main className='space-y-4 border-[1px] p-4 rounded-md border-zinc-800 min-w-[612px] max-w-[612px]'>
      <div className='gap-2 justify-between flex'>
        <div>
          <h1
            className='text-2xl text-primary font-prosto font-semibold'
            style={{
              textShadow: '0 0 6px #ffffffc8',
            }}
          >
            Atributos
          </h1>
          <p className='text-sm text-muted-foreground'>
            Aqui estão os atributos do seu personagem.
          </p>
        </div>

        <PersonStanding className='size-6 font-light text-primary stroke-2' />
      </div>

      <section className='flex gap-4 justify-around'>
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className='flex flex-col -space-y-2'>
            <h1 className='text-sm'>Força</h1>

            <div className='flex gap-2 items-center'>
              <p className='font-prosto text-2xl'>FOR</p>
              <InputTable
                value={'2'}
                className='text-start text-2xl text-primary font-bold font-prosto tracking-wide rounded-md max-w-10'
              />
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}
