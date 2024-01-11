import { matchSorter } from 'match-sorter'
import sortBy from 'sort-by'
import invariant from 'tiny-invariant'

export type ContactMutation = {
    id?: string
    firstName?: string
    lastName?: string
    avatar?: string
    github?: string
    notes?: string
    favorite?: boolean
}

export type ContactRecord = ContactMutation & {
    id: string
    createdAt: string
}

////////////////////////////////////////////////////////////////////////////////
// This is just a fake DB table. In a real app you'd be talking to a real db or
// fetching from an existing API.
const fakeContacts = {
    records: {} as Record<string, ContactRecord>,

    async getAll(): Promise<ContactRecord[]> {
        return Object.keys(fakeContacts.records).map(
            (key) => fakeContacts.records[key]
        )
    },

    async get(id: string): Promise<ContactRecord | null> {
        return fakeContacts.records[id] || null
    },

    async create(values: ContactMutation): Promise<ContactRecord> {
        const id = values.id || Math.random().toString(36).substring(2, 9)
        const createdAt = new Date().toISOString()
        const newContact = { id, createdAt, ...values }
        fakeContacts.records[id] = newContact
        return newContact
    },

    async set(id: string, values: ContactMutation): Promise<ContactRecord> {
        const contact = await fakeContacts.get(id)
        invariant(contact, `No contact found for ${id}`)
        const updatedContact = { ...contact, ...values }
        fakeContacts.records[id] = updatedContact
        return updatedContact
    },

    destroy(id: string): ContactRecord {
        const contact = fakeContacts.records[id]
        delete fakeContacts.records[id]
        return contact
    },
}

////////////////////////////////////////////////////////////////////////////////
// Handful of helper functions to be called from route loaders and actions
export async function getContacts(query?: string) {
    let contacts = await fakeContacts.getAll()
    if (query) {
        contacts = matchSorter(contacts, query, {
            keys: ['firstName', 'lastName'],
        })
    }
    return contacts.sort(sortBy('last', 'createdAt'))
}

export async function createEmptyContact(data: ContactMutation) {
    const contact = await fakeContacts.create(data)
    return contact
}

export async function getContact(id: string) {
    return fakeContacts.get(id)
}

export async function updateContact(id: string, updates: ContactMutation) {
    const contact = await fakeContacts.get(id)
    if (!contact) {
        throw new Error(`No contact found for ${id}`)
    }

    await fakeContacts.set(id, { ...contact, ...updates })
    return contact
}

export async function deleteContact(id: string) {
    const contact = fakeContacts.destroy(id)
    return contact
}

;[
    {
        firstName: 'Dennis',
        lastName: 'Beatty',
        avatar: 'https://remix.run/conf-images/speakers/dennis.jpg',
    },
    {
        firstName: 'Greg',
        lastName: 'Brimble',
        avatar: 'https://remix.run/conf-images/speakers/greg.jpg',
    },
    {
        firstName: 'Ryan',
        lastName: 'Dahl',
        avatar: 'https://remix.run/conf-images/speakers/ryan.jpg',
    },
    {
        firstName: 'Sarah',
        lastName: 'Dayan',
        avatar: 'https://remix.run/conf-images/speakers/sarah.jpg',
    },
    {
        firstName: 'Ceora',
        lastName: 'Ford',
        avatar: 'https://remix.run/conf-images/speakers/ceora.jpg',
    },
    {
        firstName: 'Anthony',
        lastName: 'Frehner',
        avatar: 'https://remix.run/conf-images/speakers/anthony.jpg',
    },
    {
        firstName: 'Arisa',
        lastName: 'Fukuzaki',
        avatar: 'https://remix.run/conf-images/speakers/arisa.jpg',
    },
    {
        firstName: 'Henri',
        lastName: 'Helvetica',
        avatar: 'https://pbs.twimg.com/profile_images/960605708202004481/MMNCgNgM_400x400.jpg',
        github: '@HenriHelvetica',
        favorite: !0,
        notes: 'How To WebPageTest',
    },
    {
        firstName: 'Michael',
        lastName: 'Jackson',
        github: 'mjackson',
        avatar: 'https://pbs.twimg.com/profile_images/1529950053317505024/D2kf-q6Q_400x400.jpg',
    },
].forEach((contact) => {
    const id = `${contact.firstName}-${contact.lastName}`.toLowerCase()
    fakeContacts.create({ id, ...contact })
})
