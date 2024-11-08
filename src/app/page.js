import * as React from 'react'
import FilterForm from '@/app/components/FilterForm'
import LeaderBoardList from '@/app/components/LeaderBoardList'
import { Modal } from '@mui/material'

export default function Home() {
  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <Modal open>
          <FilterForm />
      </Modal>
      {/*<LeaderBoardList />*/}
    </div>
  );
}
