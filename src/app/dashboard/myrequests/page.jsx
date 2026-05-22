import NoData from '@/components/shared/nodata/NoData';
import MyRequest from '@/components/ui/myrequests/MyRequest';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

export const dynamic = 'force-dynamic';

async function MyRequests() {

  const session = await auth.api.getSession({
    headers: await headers()
  })

  const userInfo = session?.user

  console.log('Requst Page', userInfo?.id)

  const { token } = await auth.api.getToken({
    headers: await headers()
  })

  console.log('Requst page', token)

  const res = await fetch(`https://petnest-server-six.vercel.app/orders/${userInfo?.id}`, {
    headers: {
      authorization: `Bearer ${token}`
    }
  });
  const data = await res.json();

  console.log(data)

  return (
    <div className='w-full bg-[url("/noisebg.png")] bg-no-repeat bg-cover'>
      <div className='w-full bg-black/20 backdrop-blur-2xl p-24'>
        <div>
          <h2 className='text-5xl font-bold text-white'>My Adoption Requests</h2>
          <p className='text-white opacity-60 mt-4'>Track your journey toward a new companionship.</p>
        </div>
        <div className='flex flex-col gap-8 justify-center items-center my-12'>
          {data?.length === 0 ? <NoData /> : data.map(order => {
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