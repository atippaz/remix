import { Button } from '~/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '~/components/ui/dialog'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'

export default function DialogComponent() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Add Podcast</Button>
            </DialogTrigger>
            <DialogContent className="w-[700px] h-[250px]">
                <DialogHeader>
                    <DialogTitle>Add Podcast</DialogTitle>
                    <DialogDescription>
                        Copy and paste the podcast feed URL to import.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <Label className="text-left">Podcast URL</Label>
                    <Input
                        id="name"
                        placeholder="https://example.com/feed.xml"
                    />
                </div>
                <DialogFooter>
                    <Button type="submit">Import Podcast</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
