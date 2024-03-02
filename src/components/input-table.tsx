'use client'

import { cn } from '@/lib/cn'
import { ComponentProps } from 'react'

export interface InputTableProps extends ComponentProps<'input'> {}

export function InputTable({ className, ...props }: InputTableProps) {
  return (
    <input
      type='text'
      className={cn(
        'border font-mono border-transparent transition-all ease-linear hover:border-zinc-700 outline-none bg-transparent p-2 rounded-full py-1.5 px-3 flex justify-center text-center items-center gap-1.5 text-xs text-zinc-500 leading-tight border-dashed focus-within:border-zinc-600',
        className
      )}
      {...props}
    />
  )
}
