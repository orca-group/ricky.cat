import Image from 'next/image'

export default function Home() {
  return (
    <main className="grid grid-cols-2 grid-rows-1">
      <Image
        src="/Group 1.png"
        alt={''}
        width={441}
        height={902}
        />
      <div>
        <h1 className="text-3xl font-serif font-bold">
          ricky.cat
        </h1>
        <p>
          ricky.cat is an app designed for sharing pictures of your cats, dogs, or whatever else you
          want.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur eros et massa
          tincidunt finibus. Pellentesque habitant.
        </p>
      </div>
    </main>
  )
}
