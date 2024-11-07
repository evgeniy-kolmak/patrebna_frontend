import { Progress } from '@nextui-org/react';

export default function Home() {
  return (
    <main className='flex min-h-screen w-full flex-col items-center justify-start px-6 py-6 md:px-12 md:pt-12 lg:px-24 lg:pt-24'>
      <h1 className='text-[100px]'>Patrebna</h1>
      <Progress
        size='sm'
        color='success'
        isIndeterminate
        aria-label='Loading...'
        className='max-w-md'
      />
    </main>
  );
}
