import { ref, get } from "firebase/database"
import { database } from "@/firebase"
import HomePage from "./HomePage"
import { FaNodeJs } from "react-icons/fa"

async function getData() {
  return await (await get(ref(database))).val()
}

export default async function page() {

  const data = await getData()

  return (
    <>
      {data ?
        <HomePage data={data} />
        :
        <div className='h-screen w-screen flex flex-col items-center justify-center gap-5 text-violet-600 fixed z-30 bg-gray-100 dark:bg-grey-900'>
          <FaNodeJs size={100} className='animate-pulse' />
          <p className='animate-pulse text-xl'>Loading...</p>
        </div>
      }
    </>
  )
}