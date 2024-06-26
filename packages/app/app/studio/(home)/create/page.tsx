import { Card, CardContent } from '@/components/ui/card'
import CreateOrganizationForm from '../components/CreateOrganizationForm'
import Image from 'next/image'

const CreateOrganization = () => {
  return (
    <div className="mx-auto max-w-4xl w-full mt-12 flex flex-row">
      <div className=" rounded-l-xl w-1/3 bg-neutrals-100 p-6 space-y-4">
        <Image
          src="/logo.png"
          alt="streameth logo"
          height={50}
          width={50}
        />
        <h1 className="text-2xl font-medium ">
          Create an organization
        </h1>
        <p className="text-muted-foreground text-sm">
          Organizations are used to manage events and videos. You can
          create multiple organizations to manage different types of
          events.
        </p>
      </div>
      <Card className="w-2/3 rounded-r-xl m-auto bg-white border-none shadow-none">
        <CardContent>
          <CreateOrganizationForm />
        </CardContent>
      </Card>
    </div>
  )
}

export default CreateOrganization
