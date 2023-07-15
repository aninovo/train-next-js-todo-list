import Image from 'next/image'
import Link from 'next/link'
import { prisma } from '../db'
import { type } from "os"
import { redirect } from 'next/navigation'

/*
Server-side function
*/
async function createTODO(data: FormData) {
    "use server" // this is not just a coment, it tells next.js this is a server-only code
    const title = data.get('title')?.valueOf();
    if (typeof title !== "string" || title.length === 0) {
        throw new Error('Invalid Title');
    }

    await prisma.todo.create({
        data: {
            title,
            complete: false
        }
    });

    redirect('/');
}



export default function Home() {
    return <>
        <header className='flex justify-between items-center mb-4'>
            <h1 className='text-2xl'> TODO list</h1>
        </header>
        <form
            action={createTODO }
            className="flex gap-2 flex-col">
            <input type="text" name="title" className="" />
            <div>
                <Link href="..">Cancel</Link>
                <button type="submit">Create</button>
            </div>
        </form>
    </>
}
