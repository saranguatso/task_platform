import { SearchParamProps } from '@/types'
import React from 'react'
import { getTaskById } from '@/lib/actions/task.actions'; // Import the appropriate module where getTaskById is defined
import Task from '@/lib/database/models/task.model';
import Image from 'next/image';
import { formatDateTime } from '@/lib/utils';

const TaskDetails = async ({ params: {id}}: SearchParamProps) => {
  const task = await getTaskById(id);

  console.log(task);
  
  return (
    <section className="flex justify-center bg-primary-50 bg-dotted-pattern bg-contain">
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl">
        <Image
          src={task.imageUrl}
          alt="hero image"
          width={1000}
          height={1000}
          className="h-full min-h-[300px] object-cover object-center"
        />

        <div className="flex w-full flex-col gap-8 p-5 md:p-10">
          <div className="flex flex-col gap-6">
            <h2 className='h2-bold'>{task.title}</h2>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex gap-3">
                <p className="p-bold-20 rounded-full bg-green-500/10 px-5 py-2 text-green-700">
                  {task.isFree ? 'FREE' : `$${task.price}`}
                </p>
                <p className="p-medium-16 rounded-full bg-grey-500/10 px-4 py-2.5 text-grey-500">
                  {task.category.name}
                </p>
              </div>

              <p className="p-medium-18 ml-2 mt-2 sm:mt-0">
                by{' '}
                <span className="text-primary-500">{task.organizer.firstName} {task.organizer.lastName}</span>
              </p>
            </div>
          </div>

          {/* <CheckoutButton event={task} /> */}

          <div className="flex flex-col gap-5">
            <div className='flex gap-2 md:gap-3'>
              <Image src="/assets/icons/calendar.svg" alt="calendar" width={32} height={32} />
              <div className="p-medium-16 lg:p-regular-20 flex flex-wrap items-center">
                <p>
                  {formatDateTime(task.startDateTime).dateOnly} - {' '}
                  {formatDateTime(task.startDateTime).timeOnly}
                </p>
                <p>
                  {formatDateTime(task.endDateTime).dateOnly} -  {' '}
                  {formatDateTime(task.endDateTime).timeOnly}
                </p>
              </div>
            </div>

            <div className="p-regular-20 flex items-center gap-3">
              <Image src="/assets/icons/location.svg" alt="location" width={32} height={32} />
              <p className="p-medium-16 lg:p-regular-20">{task.location}</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="p-bold-20 text-grey-600">What You'll Learn:</p>
            <p className="p-medium-16 lg:p-regular-18">{task.description}</p>
            <p className="p-medium-16 lg:p-regular-18 truncate text-primary-500 underline">{event.url}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TaskDetails