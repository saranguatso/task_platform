import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
      <footer className="border-t">
          <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 tex-cetner sm:flex-row">
            <Link href='/'>
              <Image src='/assets/images/small_logo.svg' alt='logo' width={128} height={38} />
            </Link>

            <p>
              2024 Helpie Group AB. All rights reserved.
            </p>
          </div>
      </footer>
  )
}

export default Footer