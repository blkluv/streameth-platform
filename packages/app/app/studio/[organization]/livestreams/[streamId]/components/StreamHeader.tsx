'use client'
import { buttonVariants } from '@/components/ui/button'
import { CardTitle } from '@/components/ui/card'
import { IExtendedStage } from '@/lib/types'
import React, { useEffect, useState } from 'react'

import ShareButton from '@/components/misc/interact/ShareButton'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const StreamHeader = ({
  stream,
  organization,
  isLiveStreamPage,
}: {
  stream: IExtendedStage
  organization: string
  isLiveStreamPage?: boolean
}) => {
  const [url, setUrl] = useState('')
  useEffect(() => {
    // This code will only run on the client side
    if (typeof window === 'undefined') return

    setUrl(window.location.origin)
  }, [])
  return (
    <div className="flex items-center justify-between w-full">
      <CardTitle className="lg:max-w-[550px] line-clamp-2">
        {stream.name}
      </CardTitle>
      <div className="flex items-center gap-4">
        {isLiveStreamPage && (
          <Link
            href={`/studio/${organization}/livestreams`}
            className="flex gap-1 items-center text-sm w-full">
            <ArrowLeft className="w-4 h-4" />
            Back to livestreams
          </Link>
        )}
        <ShareButton
          url={`${url}/${organization}/livestream?stage=${stream._id}`}
          shareFor="livestream"
        />
      </div>
    </div>
  )
}

export default StreamHeader
