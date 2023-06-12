import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
const inter = Inter({ subsets: ['latin'] })
import { LoginButton, RegisterButton, LogoutButton, ProfileButton } from '@/components/buttons.component'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import { User } from '@/components/user.component'


export default async function Home() {
  const session = await getServerSession(authOptions)
  console.log(session);
  return (
    <main className='h-[75vh]' >
      <div className='flex justify-center items-center '>
        <LoginButton />
        <RegisterButton />
        <LogoutButton />
        <ProfileButton />
      </div>
      <h1>
        Server Sessions
      </h1>
      <pre>
        {JSON.stringify(session)}
      </pre>
      <User />
    </main>
  )
}
