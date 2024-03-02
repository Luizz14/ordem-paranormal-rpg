import { Button } from './ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table'

import {
  ALargeSmallIcon,
  Backpack,
  Weight,
  Sword,
  BookOpenText,
  Dice5,
  Dices,
  ShieldPlus,
  PersonStanding,
  Search,
  Filter,
} from 'lucide-react'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'
import { Control, Input } from './ui/input'
import { InputTable } from './input-table'

export function SkillsTable() {
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
            Perícias
          </h1>
          <p className='text-sm text-muted-foreground'>
            Aqui estão as perícias que você tem.
          </p>
        </div>

        <BookOpenText className='size-6 font-light text-primary stroke-1' />
      </div>

      <div className='max-w-[256px] flex items-center gap-4'>
        <Input variant='filter'>
          <Search className='size-3' />
          <Control placeholder='Pesquisar perícia...' />
        </Input>

        <Button variant={'outline'}>
          <div className='gap-2 flex items-center justify-center'>
            <Filter className='size-3 text-primary' />
            <p className='text-sm'>Filtrar</p>
          </div>
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              <div className='flex items-center gap-2'>
                <ALargeSmallIcon className='size-3' />
                Nome
              </div>
            </TableHead>

            <TableHead>
              <div className='flex items-center justify-center gap-2'>
                <Sword className='size-3' />
                Perícia
              </div>
            </TableHead>

            <TableHead>
              <div className='flex items-center justify-center gap-2'>
                <Dice5 className='size-3' />
                Dados
              </div>
            </TableHead>

            <TableHead>
              <div className='flex items-center justify-center gap-2'>
                <ShieldPlus className='size-3' />
                Bônus
              </div>
            </TableHead>

            <TableHead>
              <div className='flex items-center justify-center gap-2'>
                <PersonStanding className='size-4' />
                Treinamento
              </div>
            </TableHead>

            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 8 }).map((_, index) => (
            <TableRow key={index}>
              <TableCell>
                <span className='text-primary'>Encontrar</span>
              </TableCell>
              <TableCell>
                <span className='text-primary items-center justify-center flex'>
                  PER
                </span>
              </TableCell>
              <TableCell>
                <span className='text-primary items-center justify-center flex'>
                  1d20
                </span>
              </TableCell>

              <TableCell className='items-center justify-center flex'>
                <InputTable
                  value={'1d20'}
                  className='max-w-14 items-center text-green-600/80'
                />
                {/* <span className='text-primary items-center justify-center flex'>
                  1d20
                </span> */}
              </TableCell>

              <TableCell>
                <span className='text-primary items-center justify-center flex'>
                  Treinando
                </span>
              </TableCell>

              <TableCell>
                <Tooltip>
                  <TooltipTrigger>
                    <Button variant={'outline'} size={'icon'}>
                      <Dices className='size-5 text-primary' />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className='bg-zinc-900'>
                    <p className='text-primary'>Rolar</p>
                  </TooltipContent>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  )
}
