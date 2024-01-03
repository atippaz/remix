import { LoaderFunctionArgs, json, ActionFunctionArgs } from "@remix-run/node";
import { Form, useFetcher, useLoaderData } from "@remix-run/react";
import type { FunctionComponent } from "react";
import invariant from "tiny-invariant";
import { Button } from "~/components/ui/button";
import { getContact, type ContactRecord, updateContact } from "~/services/contact";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.contactId, "Missing contactId param");
  const contact = await getContact(params.contactId);
  if (!contact) {
    throw new Response("Not Found", { status: 404 });
  }
  return json({ contact });
};

export default function Contact() {
  const { contact } = useLoaderData<typeof loader>();
  return (
    <div className="flex px-16 py-8 gap-8">
      <div>
        <img
          className="rounded-2xl"
          width={200}
          alt={`${contact?.firstName} ${contact?.lastName} avatar`}
          key={contact?.avatar}
          src={contact?.avatar}
        />
      </div>

      <div>
        <h1 className="text-3xl font-bold flex gap-2">
          {contact?.firstName || contact?.lastName ? (
            <>
              {contact.firstName} {contact.lastName}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite contact={contact!} />
        </h1>



        <p className="mt-4">
          note: {contact?.notes ? contact.notes : '-'}
        </p>

        <div className="flex gap-2 mt-4">
          <Form action="edit">
            <Button variant="outline" className="text-sky-400" >Edit</Button>
          </Form>

          <Form
            action="destroy"
            method="post"
            onSubmit={(event) => {
              const response = confirm(
                "Please confirm you want to delete this record."
              );
              if (!response) {
                event.preventDefault();
              }
            }}
          >
            <Button variant="outline" className="text-rose-400" >Delete</Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export const action = async ({
  params,
  request,
}: ActionFunctionArgs) => {
  invariant(params.contactId, "Missing contactId param");
  const formData = await request.formData();
  return updateContact(params.contactId, {
    favorite: formData.get("favorite") === "true",
  });
};

export const Favorite: FunctionComponent<{
  contact?: Pick<ContactRecord, "favorite">;
}> = ({ contact }) => {
  // const favorite = contact.favorite;
  const fetcher = useFetcher()
  const favorite = fetcher.formData
    ? fetcher.formData.get("favorite") === "true"
    : contact?.favorite;
  return (
    <fetcher.Form method="post">
      <button
        aria-label={
          favorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
        name="favorite"
        value={favorite ? "false" : "true"}
      >
        {favorite ? "★" : "☆"}
      </button>
    </fetcher.Form>
  );
};
