import { Podcast } from 'lucide-react'
import { useEffect } from 'react'
import { Separator } from '~/components/ui/separator'
import DialogComponent from './dialog'
export default function PodcastComponect() {
    return (
        <>
            <div className="flex items-center justify-between mb-4">
                <div className="space-y-1">
                    <h2 className="text-2xl font-semibold tracking-tight">
                        New Episodes
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        Your favorite podcasts. Updated daily.
                    </p>
                </div>
            </div>
            <Separator></Separator>
            <div className="mt-4 ">
                <div className="flex h-[450px] shrink-0 items-center justify-center rounded-md border border-dashed">
                    <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
                        <div className="h-10">
                            <Podcast className="w-10 h-full text-muted-foreground"></Podcast>
                        </div>
                        <h3 className="mt-4 text-lg font-semibold">
                            No episodes added
                        </h3>
                        <p className="mb-4 mt-2 text-sm text-muted-foreground">
                            You have not added any podcasts. Add one below.
                        </p>
                        <DialogComponent />
                    </div>
                </div>
            </div>
        </>
    )
}
