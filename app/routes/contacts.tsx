import { Form, Link, NavLink, useNavigation, Outlet, useSubmit, json, useLoaderData } from "@remix-run/react";
import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"
import { Separator } from "~/components/ui/separator"
import { getContacts, createEmptyContact } from "~/services/contact";
import { LoaderFunctionArgs } from "@remix-run/node";
import { useEffect } from "react";
import { Favorite } from '~/routes/contacts.$contactId'
export const loader = async ({
  request,
}: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const contacts = await getContacts(q);
  return json({ contacts, q });
};

export const action = async () => {
  const contact = await createEmptyContact({ avatar: '', favorite: false, firstName: 'atip', github: 'as', lastName: 'nasakun', notes: 'nullll' });
  return json({ contact });
};


export default function ContactsId() {
  const { contacts, q } = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has(
      "q"
    );
  // useEffect(() => {
  //   const searchField = document.getElementById("q");
  //   if (searchField instanceof HTMLInputElement) {
  //     searchField.value = q || "";
  //   }
  // }, [q]);
  const submit = useSubmit();
  return (
    <div className="h-screen w-screen">
      <div className="grid grid-cols-12 h-full w-full">
        <div className="col-span-3 bg-slate-100">
          <div className="flex px-8 py-4 gap-2">
            <Form
              id="search-form"
              onChange={(event) => {
                const isFirstSearch = q === null;
                submit(event.currentTarget, {
                  replace: !isFirstSearch,
                });
              }}
              role="search"
            >
              <Input className={`${searching ? "opacity-25" : ""} "bg-white"`} id="q"

                name="q" placeholder="Search" defaultValue={q || ""} />
            </Form>
            <Form method="post">
              <Button variant="outline" className="text-sky-400/100">New</Button>
            </Form>
          </div>
          <Separator className="mb-2" />
          <div className="px-8">
            <nav>
              {contacts.length ? (
                <ul>
                  {contacts.map((contact) => (
                    <li key={contact.createdAt + contact.id}>
                      <NavLink
                        className={({ isActive, isPending }) =>
                          isActive
                            ? ""
                            : isPending
                              ? ""
                              : "text-sky-400/100"
                        }
                        to={`/contacts/${contact.id}`}
                      >
                        {contact.firstName} {contact.lastName}
                      </NavLink>
                      <Favorite contact={contact!}></Favorite>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>
                  <i>No contacts</i>
                </p>
              )}
            </nav>
          </div>
        </div>
        <div className="col-span-9">

          <div className={
            navigation.state === "loading" ? "opacity-25" : ""
          }>
            <Outlet></Outlet>
          </div>
        </div>
        {/* other elements */}
      </div>
    </div >

  );
}
