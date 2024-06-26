'use client'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog'
import { Ban, CheckCircle2, Loader2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { type BaseError } from 'wagmi'
import TransactionHash from './TransactionHash'
import ShareCollection from './ShareCollection'

const PublishingNFTModal = ({
  open,
  onClose,
  isPublished,
  organization,
  hash,
  error,
  isTransactionApproved,
  publishError,
  isGeneratingMetadata,
  collectionId,
}: {
  open: boolean
  onClose: React.Dispatch<React.SetStateAction<boolean>>
  isPublished: boolean
  isSuccess: boolean
  organization: string
  hash?: string
  isTransactionApproved: boolean
  error: BaseError | null
  publishError?: string
  isGeneratingMetadata?: boolean
  collectionId?: string
}) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogTitle className="text-lg font-semibold">
          {publishError && 'Error'}
        </DialogTitle>
        {!isPublished && !error && !publishError && (
          <>
            <DialogTitle className="text-lg font-semibold">
              Publishing your NFT
            </DialogTitle>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="bg-grey p-2 mr-2 rounded-full h-fit">
                  {!isGeneratingMetadata ? (
                    <CheckCircle2 className="text-white fill-success w-6 h-6" />
                  ) : (
                    <Loader2 className="w-6 h-6 text-success  rounded-full animate-spin" />
                  )}
                </div>
                <div>
                  <p className="font-medium">
                    Generating collection metadata
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-grey p-2 mr-2 rounded-full h-fit">
                  {isTransactionApproved ? (
                    <CheckCircle2 className="text-white fill-success w-6 h-6" />
                  ) : (
                    <Loader2 className="w-6 h-6 text-success  rounded-full animate-spin" />
                  )}
                </div>
                <div>
                  <p className="font-medium">
                    Go to your wallet to approve the transaction
                  </p>
                  <p className="text-sm text-muted-foreground">
                    You&apos;ll be asked to pay gas fees and sign in
                    order to deploy your contract on the blockchain.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-grey p-2 mr-2 rounded-full h-fit">
                  <Loader2 className="w-6 h-6 text-success  rounded-full animate-spin" />
                </div>

                <div>
                  <p className="font-medium">
                    Publishing your NFT Collection
                  </p>
                  <p className="text-sm text-muted-foreground">
                    It may take some time for the transaction to be
                    processed.
                  </p>
                  {hash && <TransactionHash hash={hash} />}
                </div>
              </div>
            </div>
          </>
        )}
        {isPublished && (
          <div className="flex flex-col justify-center items-center text-center p-4">
            <Image
              src="/images/NFTSuccess.png"
              width="100"
              height="100"
              alt="success"
            />
            <p className="text-2xl mt-4">
              NFT Collection successfully published
            </p>
            <p className="text-muted-foreground mt-1">
              Your collection now published. Share link to invite your
              community.
            </p>
            {hash && <TransactionHash hash={hash} />}
            <div className="flex items-center gap-4 mt-8">
              <ShareCollection collectionId={collectionId} />

              <Link href={`/studio/${organization}/nfts`}>
                <Button
                  onClick={() => onClose(false)}
                  variant={'primary'}>
                  Done
                </Button>
              </Link>
            </div>
          </div>
        )}
        {error && (
          <div className="text-destructive text-center">
            Error:{' '}
            {(error as BaseError).shortMessage || error.message}
          </div>
        )}

        {publishError && (
          <div className="text-destructive flex flex-col items-center justify-center text-center">
            <Ban className="w-10 h-10 mb-4" />
            {publishError}
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default PublishingNFTModal
