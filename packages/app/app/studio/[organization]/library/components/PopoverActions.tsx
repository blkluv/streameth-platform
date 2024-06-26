'use client'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  FilePenLine,
  Share2,
  Copy,
  TrashIcon,
  CircleEllipsisIcon,
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import DeleteAsset from './DeleteAsset'
import { IExtendedSession, eLayout } from '@/lib/types'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { ShareModalContent } from '@/components/misc/interact/ShareButton'
import { PopoverClose } from '@radix-ui/react-popover'
import { toast } from 'sonner'
import VideoDownload from '@/app/[organization]/components/VideoDownload'
import VideoDownloadClient from '@/components/misc/VideoDownloadClient'

const PopoverActions = ({
  session,
  organizationSlug,
  layout,
}: {
  session: IExtendedSession
  organizationSlug: string
  layout: eLayout
}) => {
  const itemId = session._id

  const handleCopy = () => {
    navigator.clipboard.writeText(session.ipfsURI!)
    toast.success('Copied IPFS Hash to your clipboard')
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <CircleEllipsisIcon className="cursor-pointer" />
      </PopoverTrigger>
      <PopoverContent className="w-60">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Dialog>
              <DialogTrigger>
                <Button
                  variant={'outline'}
                  className="space-x-2 w-full">
                  <Share2 className="=text-muted-foreground" />
                  <p className="">Share</p>
                </Button>
              </DialogTrigger>
              <ShareModalContent />
            </Dialog>
            <Button variant={'outline'}>
              <Link
                className="flex flex-row justify-center items-center space-x-2"
                href={`/studio/${organizationSlug}/library/${itemId}`}>
                <FilePenLine className="text-muted-foreground" />
                <p className="">Edit</p>
              </Link>
            </Button>
            {session.playbackId && (
              <VideoDownloadClient
                className="flex flex-row justify-center items-center space-x-2 w-full bg-white"
                videoName={`${session.name}.mp4`}
                variant="outline"
                playbackId={session.playbackId}
              />
            )}
            {layout == eLayout.grid && (
              <PopoverClose>
                <Button
                  variant={'outline'}
                  className="space-x-2 w-full"
                  onClick={() => handleCopy()}>
                  <Copy className="text-muted-foreground" />
                  <p>Copy IPFS Hash</p>
                </Button>
              </PopoverClose>
            )}
            <DeleteAsset
              session={session}
              href={`/studio/${organizationSlug}/library`}
              TriggerComponent={
                <Button
                  variant={'destructive-outline'}
                  className="flex justify-center space-x-2">
                  <TrashIcon />
                  <p>Delete</p>
                </Button>
              }
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default PopoverActions
