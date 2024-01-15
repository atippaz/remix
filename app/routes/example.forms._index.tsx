import CardForms from '~/components/card-forms'
import { Form } from "@remix-run/react";
import { Input } from '~/components/ui/input'
import { Textarea } from '~/components/ui/textarea';
import { useState } from 'react';
import { Button } from '~/components/ui/button';

export default function Forms() {
  const [urls, setUrl] = useState(["https://shadcn.com", "http://twitter.com/shadcn"])
  return (
    <CardForms title='Profile' des='This is how others will see you on the site.'>
      <Form navigate={false} >
        <div>
          <p>Username</p>
          <Input defaultValue='' />
          <p>This is your public display name. It can be your real name or a pseudonym. You can only change this once every 30 days.</p>
        </div>
        <div>
          <p>Email</p>
          <Input defaultValue='' />
          <p>You can manage verified email addresses in your email settings.</p>
        </div>
        <div>
          <p>Bio</p>
          <Textarea defaultValue='' />
          <p>You can @mention other users and organizations to link to them.</p>
        </div>
        <div>
          <p>URLs</p>
          <p>Add links to your website, blog, or social media profiles.</p>
          <div>
            {urls.map(x => {
              return (<Input defaultValue={x} />)
            })}
          </div>
          <Button variant="ghost" onClick={() => {
            setUrl(old => [...old, ''])
          }}>Add Url</Button>
        </div>
        <Button >Update Profile</Button>
      </Form>
    </CardForms>
  )
}