import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8 text-center">
            <h1 className="h1-bold">
              Seamless transition in your new home
            </h1>
            <p className="p-regular-20 md:p-regular-24">
            Your trusted partner for a seamless and hassle-free transition to your new life in Sweden. We offer an automated software to prepare, review, and process immigration and relocation paperwork.
            </p>

            <div className="flex items-center justify-center">
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#tasks">
              Explore Now
              </Link>
            </Button>
            </div>
          </div>

          {/* <Image 
            src="/assets/images/small_hero_3.jpg"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          /> */}
          

        </div>
      </section>

      <section id="tasks" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
          <h2 className="h2-bold">
            Trusted by <br /> Organizations with hundreds of tasks
          </h2>
          
          <div className="flex w-full flex-col gap-5  md:flex-row">
            Search, 
            Category, 
            Filter
          </div>
      </section>
    </>
  );
}
