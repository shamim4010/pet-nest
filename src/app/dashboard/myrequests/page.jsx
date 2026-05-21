import MyRequest from '@/components/ui/myrequests/MyRequest';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

async function MyRequests() {

  const session = await auth.api.getSession({
    headers: await headers()
  })

  const userInfo = session?.user


  const res = await fetch(`${process.env.SERVER_URL}/orders/${userInfo?.id}`);
  const data = await res.json();

  console.log(data)

  return (
    <div className='bg-[url("/noisebg.png")] bg-no-repeat bg-cover p-24'>
      <div>
        <div>
          <h2 className='text-5xl font-bold text-white'>My Adoption Requests</h2>
          <p className='text-white opacity-60 mt-4'>Track your journey toward a new companionship.</p>
        </div>
        <div className='flex flex-col gap-8 justify-center items-center my-12'>
          {data.map(order => {
            return (
              <MyRequest key={order?._id} {...{ order }} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default MyRequests