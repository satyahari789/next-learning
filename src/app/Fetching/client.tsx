// app/fetching-data/client/page.tsx
'use client';
import { useEffect, useState } from 'react';
type Postdata = {
    id: number,
    title:string,
    body:string

}
export default function ClientFetchPage() {
    const [post, setPost] = useState<Postdata >();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/3')
            .then((res) => res.json())
            .then(setPost);
    }, []);

    return <pre>{JSON.stringify(post, null, 2)}</pre>;
}
