import React from 'react'
import Image from 'next/image'
import ReserveSpotButton from './ReserveSpotModal'
import MintButton from '@/components/misc/MintButton'
import ComponentWrapper from './ComponentWrapper'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getEventPeriod } from '@/utils/time'
import { getImageUrl } from '@/utils'
import { IEvent } from 'streameth-server/model/event'
import SectionTitle from './SectionTitle'

const HomePageLogoAndBanner = ({ event }: { event: IEvent }) => {
  const { logo, banner } = event

  if (!logo && !banner) return null

  return (
    <ComponentWrapper sectionId="home">
      <Image
        className="rounded-lg max-h-[500px]"
        src={getImageUrl('/events/' + banner)}
        alt="Event Cover"
        width={1500}
        height={500}
        style={{
          objectFit: 'cover',
        }}
      />
      <div id="home" className="flex flex-col p-2">
        <div className=" flex-col flex space-y-2 md:flex-col">
          <div className="flex flex-col md:flex-row w-full justfy-center items-center my-1">
            <SectionTitle title={event.name} />
          </div>
          <div className=" flex flex-col space-y-4 text-left">
            <p>
              <span className="mr-2">&#128197;</span>
              {new Date(event.start).toDateString()}
              {new Date(event?.start).toDateString() !==
              new Date(event?.end).toDateString()
                ? ` - ${new Date(event.end).toDateString()}`
                : ''}
            </p>
            <p>
              <span className="mr-2">&#9200;</span>
              {event?.startTime
                ? `${getEventPeriod(event.startTime)} - ${
                    event.endTime ? getEventPeriod(event.endTime) : ''
                  } ${event.timezone}`
                : 'TBD'}
            </p>
            <p>
              <span className="mr-2">&#127759;</span>
              {event.location}
            </p>
            {/* <ReserveSpotButton event={event} /> */}
            <article className="prose max-w-full prose-a:text-white prose-gray text-white text-xl">
              <Markdown remarkPlugins={[remarkGfm]}>
                {event.description}
              </Markdown>
            </article>
          </div>
        </div>
      </div>
    </ComponentWrapper>
  )
}

export default HomePageLogoAndBanner