import type { LoaderFunctionArgs, ActionFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, useLoaderData, useNavigate } from "@remix-run/react";
import invariant from "tiny-invariant";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";

import { getContact, updateContact } from "~/services/contact";

export const loader = async ({
  params,
}: LoaderFunctionArgs) => {
  invariant(params.contactId, "Missing contactId param");
  const contact = await getContact(params.contactId);
  if (!contact) {
    throw new Response("Not Found", { status: 404 });
  }
  return json({ contact });
};

export const action = async ({
  params,
  request,
}: ActionFunctionArgs) => {
  invariant(params.contactId, "Missing contactId param");
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateContact(params.contactId, updates);
  return redirect(`/contacts/${params.contactId}`);
};
export default function EditContact() {
  const { contact } = useLoaderData<typeof loader>();
  const navigate = useNavigate()

  return (
    <Form className="px-16 py-8" method="post">
      <div className="grid grid-cols-12">
        <div className="col-span-4">Name</div>
        <div className="col-span-8 flex gap-4">
          <Input
            defaultValue={contact.firstName}
            aria-label="First name"
            name="first"
            type="text"
            placeholder="First"
          />
          <Input
            aria-label="Last name"
            defaultValue={contact.lastName}
            name="last"
            placeholder="Last"
            type="text"
          />
        </div>
      </div>

      <div className="grid grid-cols-12 mt-4">
        <div className="col-span-4">Avatar URL</div>
        <Input
          className="col-span-8"
          aria-label="Avatar URL"
          defaultValue={contact.avatar}
          name="avatar"
          placeholder="https://example.com/avatar.jpg"
          type="text"
        />
      </div>
      <div className="grid grid-cols-12 mt-4">
        <div className="col-span-4">Notes</div>
        <Textarea rows={6} className="col-span-8" name="notes" defaultValue={contact.notes} placeholder="Type your message here." />

      </div>
      <div className="grid grid-cols-12 mt-4">
        <div className="col-span-4 ">

        </div>
        <div className="col-span-8 flex gap-2">
          <Button type="submit" className="text-sky-400" variant="outline">Save</Button>
          <Button type="button" variant="outline" onClick={() => {
            navigate(-1)
          }}>Cancel</Button>

        </div>
      </div>
    </Form >
  );
}
