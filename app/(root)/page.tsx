import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="bg-gray-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8 text-center">
            <h1 className="h1-bold">
              Seamless transition in your new home
            </h1>
            <p className="p-regular-20 md:p-regular-24">
            Your trusted partner for a seamless and hassle-free transition to your new life in Sweden. We offer an automated software to prepare, review, and process immigration and relocation paperwork.
            </p>

            <div className="flex items-center justify-center">
            <Button size="lg" asChild className="bg-primary-500 button w-full sm:w-fit">
              <Link href="#tasks">
              Explore Now
              </Link>
            </Button>
            </div>
          </div>

        </div>
      </section>

      <section id="tasks" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
          <h2 className="h2-bold">
            Trusted by <br /> Organizations with immigration and relocation needs
          </h2>

          <div>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
              
              <div className="flex flex-col gap-4">
                <div className="flex">
                  <h5 className="h5-bold">Automated document processing</h5>
                </div>
                  <p>
                  We are training and building our software models to continuously detect errors in immigration applications ranging from student to work permit applications. We hope to deliver high quality and cohesive immigration applications using our LLM models.  
                  </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex">
                  <h5 className="h5-bold">Bank and personal number application</h5>
                </div>
                  <p>
                  Our team of experts will guide your employees/students through the complex bank and personal number application processes, ensuring compliance with Swedish regulations and minimizing any delays.                  
                  </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex">
                  <h5 className="h5-bold">Schooling and education guidance</h5>
                </div>
                  <p>
                  We'll provide personalized advice on the Swedish education system ranging from daycares to universities and assist with enrolling children in local schools, ensuring a seamless transition for the entire family.    
                  </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex">
                  <h5 className="h5-bold">Expert coaching suited to your needs</h5>
                </div>
                  <p>
                  We partner with experts in immigration, local norms, and government systems to simplify your journey in settling in your new home. Access our helpie expert network, filter based on categories, and schedule a meeting today. 
                  </p>
              </div>
          </div>
        </div>
      </section>

      <section id="needs" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold">
            Find help <br /> Tailored to you and your employee needs
        </h2>

          <div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

              <div className="flex flex-col gap-5 rounded-2xl bg-gray-50 py-5 px-5">
                <div className="flex items-center justify-center">
                  <h5 className="h5-bold">Single platform needed</h5>
                </div>
                  <p>
                  We employ language models to provide instant and accurate answers to your questions, saving time and reducing the stress associated with relocation.                  
                  </p>
              </div>

              <div className="flex flex-col gap-5 rounded-2xl bg-gray-50 py-5 px-5">
                <div className="flex items-center justify-center">
                  <h5 className="h5-bold">Streamlined process</h5>
                </div>
                  <p>
                  Our platform offers the real-time updates on the numerous administrative tasks such as visa, bank, or personal number applications whilst providing smooth user experience.                  
                  </p>
              </div>

              <div className="flex flex-col gap-5 rounded-2xl bg-gray-50 py-5 px-5">
                <div className="flex items-center justify-center">
                  <h5 className="h5-bold">Hands-on caring experts</h5>
                </div>
                  <p>
                  We are dedicated to making you feel supported with our quality care, responsiveness, and accountability. Building a trust-based relationship is important to us.                  </p>
              </div>

          </div>
        </div>
      </section>

      <section id="actions" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
      
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          <div className="flex flex-col gap-5 justify-start">
            <h2 className="h2-bold">
            Get started with Helpie coach in three easy steps
            </h2>
            <h3>
            To support your organization and your unique needs, we'd like to understand your needs.
            </h3>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="mailto:hello@helpie.coach">
              Book a call
              </Link>
            </Button>
          </div>

          <div className="flex flex-col gap-5 justify-start">
            <div className="flex flex-col gap-5 rounded-2xl bg-gray-50 py-5 px-5">
                <div className="flex justify-start">
                  <h5 className="h5-bold">1. Book a call with us</h5>
                </div>
                  <p>
                  Book a call with our local sales representative. We'll set you up with a free account, ready to suit your team's needs.                  </p>
              </div>

              <div className="flex flex-col gap-5 rounded-2xl bg-gray-50 py-5 px-5">
                <div className="flex justify-start">
                  <h5 className="h5-bold">2. Add and onboard your team</h5>
                </div>
                  <p>
                  From new hires to your existing expat workforce, onboard them effortlessly onto our platform.                  </p>
              </div>

              <div className="flex flex-col gap-5 rounded-2xl bg-gray-50 py-5 px-5">
                <div className="flex justify-start">
                  <h5 className="h5-bold">3. Explore our dedicated local expert support</h5>
                </div>
                  <p>
                  Our dedicate team will help your colleagues, from navigating personal number application to exploring housing neighbourhoods with our expert network.              
                  </p>
                </div>
          </div>
        </div>

      </section>
    </>
  );
}
