'use client'

import { Atributes } from '@/components/atributes'
import { Inventory } from '@/components/inventory'
import { PlayerStatus } from '@/components/player-status'
import { SkillsTable } from '@/components/skills-table'
import { Button } from '@/components/ui/button'
import { DotBackground } from '@/components/ui/dot-background'
import { LampContainer, LampDemo } from '@/components/ui/lamp'

import { motion } from 'framer-motion'

export default function Home() {
  return (
    <DotBackground>
      <main className='flex min-h-screen items-start gap-4 p-24'>
        <div className='z-20 flex flex-col gap-4'>
          <PlayerStatus />
          <Inventory />
        </div>
        <section className='z-20 flex flex-col gap-4'>
          <Atributes />
          <SkillsTable />
        </section>
      </main>
    </DotBackground>
  )
}
