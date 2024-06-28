'use client'

function error({ error }: { error: Error }) {
  console.log(error)

  return (
    <>
      <div>
        We encounted an error. We appreciate your patience...
      </div>
    </>
  )
}

export default error

