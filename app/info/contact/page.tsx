import Link from 'next/link'


function ContactPage() {
  return (
    <div>
      <h1 className='text-7xl'>Contact Page</h1>

      <Link href="/about" className='text-xl text-blue-600 inline-block mt-48'> Back Home</Link> 
      
    </div>
  )
}

export default ContactPage