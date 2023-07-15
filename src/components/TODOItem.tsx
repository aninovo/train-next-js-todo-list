
"use client"

type TODOItemProps ={
    id: string
    title: string
    complete: boolean
    toggleTODO: (id:string, complete:boolean) => void
}
export default function TODOItem({ id, title, complete, toggleTODO }: TODOItemProps) {
    return <li className="flex gap-1 items-center">
        <input
            id={id}
            type="checkbox"
            className="cursor-pointer peer"
            defaultChecked={complete}
            onChange={e => toggleTODO(id, e.target.checked)}
        />
        <label htmlFor={id} className="peer-chacked:line-through">{title}</label>
    </li>
}