'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table'

import { ALargeSmallIcon, Backpack, Weight, Sword, Trash2 } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'
import { Input, Control } from './ui/input'
import { Button } from './ui/button'
import { InputTable } from './input-table'
import { toast } from 'sonner'
import { Progress } from './ui/progress'

export function Inventory() {
  return (
    <div className='space-y-4 border-[1px] p-4 rounded-md border-zinc-800 min-w-[612px] max-w-[612px]'>
      <div className='gap-2 justify-between flex'>
        <div>
          <h1
            className='text-2xl text-primary font-prosto font-semibold'
            style={{
              textShadow: '0 0 6px #ffffffc8',
            }}
          >
            Inventário
          </h1>
          <p className='text-sm text-muted-foreground'>
            Aqui estão os itens que você carrega na mochila.
          </p>
        </div>

        <Backpack className='size-6 font-light text-primary stroke-1' />
      </div>

      <div className='flex gap-4 items-center'>
        <Button variant={'outline'}>Adicionar item</Button>

        <div className='flex-1 flex-col space-y-1'>
          <Progress value={23} />

          <span className='flex items-center'>
            <p className='text-sm font-semibold text-primary/70'>10</p>
            <p className='text-sm font-semibold text-primary'>/23</p>
            <Weight className='size-3 mx-1 text-primary stoke-2' />
          </span>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              <div className='flex items-center gap-2'>
                <ALargeSmallIcon className='size-3' />
                Item
              </div>
            </TableHead>

            <TableHead className='flex items-center justify-center'>
              <div className='flex self-center max-w-min items-center justify-center gap-2'>
                <Weight className='size-3' />
                Peso
              </div>
            </TableHead>

            <TableHead className='items-center justify-center'>
              <div className='flex max-w-min items-center justify-center gap-2'>
                <Sword className='size-3' />
                Dano
              </div>
            </TableHead>

            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 5 }).map((_, index) => (
            <TableRow key={index}>
              <TableCell>
                <InputTable
                  value={'Muleta de tacar pao'}
                  className='text-primary text-md font-semibold'
                />
              </TableCell>

              <TableCell className='flex items-center justify-center'>
                <InputTable value={'1.5'} className='max-w-16' />
              </TableCell>

              <TableCell className='text-center justify-center items-center'>
                <InputTable
                  value={'2d6 + 1d4'}
                  className='text-primary max-w-28'
                />
              </TableCell>

              <TableCell className='flex items-end justify-end'>
                <Tooltip>
                  <TooltipTrigger>
                    <Button
                      variant={'outline'}
                      size={'icon'}
                      onClick={() =>
                        toast('Item macetou foi removido', {
                          description: 'Sunday, December 03, 2023 at 9:00 AM',
                          action: {
                            label: 'Desfazer',
                            onClick: () => console.log('Undo'),
                          },
                        })
                      }
                    >
                      <Trash2 className='size-4 text-destructive' />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className='bg-zinc-900'>
                    <p className='text-primary'>Remover</p>
                  </TooltipContent>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
