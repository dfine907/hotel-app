import mapsImg from '@/images/maps.jpg'
import bike from '@/images/bikeFbanks.jpeg'
import Image from 'next/image'

const url = 'https://www.course-api.com/images/tours/tour-2.jpeg'

function page({ params }: { params: { id: string } }) {
  console.log(params.id);
  
  return (
    <div>
      {/* <h1 className="text-4xl">ID : {params.id}</h1> */}
      <h1 className="text-4xl"> Explore </h1>
      <section className="flex gap-x-4 mt-4">
        {/* local image */}
        <div>
          <Image
            src={bike}
            alt="maps"
            priority
            width={192}
            height={192}
            className="w-48 h-48 object-cover rounded"
          />
          <h2>Local Image </h2>
        </div>

        {/* remote image */}
        <div>
          <Image
            src={url}
            alt="tour"
            width={192}
            height={192}
            priority
            className="w-48 h-48 object-cover rounded"
          />
          <h2>Remote Image</h2>
        </div>
      </section>
    </div>
  )
}

export default page
