import {prisma } from './db'
import Image from 'next/image'
import Link from "next/link"
import TODOItem from '../components/TODOItem'


function getTodos() {
    return prisma.todo.findMany();
}

async function toggleTODO(id: string, complete: boolean) {
    "use server"
    await prisma.todo.update({
        where:
            { id },
        data: { complete }
    });
}

export default async function Home() {

    "use client"
    /*
    server async function
    */
    const todos = await getTodos();
    return <>
        <header className='flex justify-between items-center mb-4'>
            <h1 className='text-2xl'> TODO list</h1>
            <Link href="newroute">new</Link>
        </header>
        <main>
            <ul className='pl-4'>
                {todos.map(todo => (
                    <TODOItem key={todo.id} {...todo} toggleTODO={toggleTODO} />
                ))}
        </ul>
        </main>
    </>
}
