import Image from "next/image"

export default function MenuSection() {
  return (
    <section className="w-full py-20 px-6 text-center">

      <div className="flex justify-center pt-10">
        <Image
          src="/menu.jpeg"// put image in public folder
          alt="Cake Menu"
          width={600}
          height={1200}
          className="rounded-xl shadow-lg"
        />
      </div>
    </section>
  )
}