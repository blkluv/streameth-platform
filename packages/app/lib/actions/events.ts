"use server"
import { createEvent } from '@/lib/services/eventService'
import { cookies } from 'next/headers'
import { IEvent } from "streameth-new-server/src/interfaces/event.interface"


export const createEventAction = async ({
  event,
}: {
  event: IEvent
}) => {

  // create scheduelling sheet, and create folder strucutre in drive

  const authToken = cookies().get('user-session')?.value
  if (!authToken) {
    throw new Error('No user session found')
  }
  const response = await createEvent({
    event: {...event, unlisted:true },
    authToken,
  })

  if (!response) {
    throw new Error('Error creating event')
  }

  return response
}