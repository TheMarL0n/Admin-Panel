import Image from 'next/image'
import FormLogin from './components/formLogin'

export default function Home() {
  return (
    <main id='login-main' className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container flex justify-between">
        <div className='flex-1 p-16 text-right text-gray-300'>
          <h1 className='text-5xl font-bold leading-none mb-4'>Welcome to the A-Panel</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
        <div className='flex flex-col flex-1 p-16 gap-8'>
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <FormLogin/>
        </div>
      </div>
    </main>
  )
}
