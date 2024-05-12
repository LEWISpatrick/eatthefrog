import { Button } from '../../components/ui/button'
import { Card, CardContent, CardHeader } from '../../components/ui/card'
import { Input } from '../../components/ui/input'
import React from 'react'

const page = () => {
  return (
    <div className='container mx-auto flex flex-col items-center justify-center h-screen'>
      <Card className='text-center h-[500px] w-[500px]'>
        <CardHeader>
          <h1 className='text-4xl font-bold'>🐸 Log a Frog 🐸</h1>
          <p className='text-lg'>🐸 Log a frog and keep track of your progress 🐸</p>
        </CardHeader>
        <CardContent className='flex flex-col items-center justify-center space-y-4'>
          <Input className='w-full' placeholder="Frog Name" />
          <Input className='w-full' placeholder="Hours Spent on Frog" />
          <Button className='w-full'>Log</Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default page
