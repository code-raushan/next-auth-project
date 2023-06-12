'use client'

//useSession is hook to retreive the session data and display it on the client-side.

import { useSession } from "next-auth/react";

export const User = () =>{
    const {data: session} = useSession();
    return (
        <>
            <h1>client session</h1>
            <pre>{JSON.stringify(session)}</pre>
        </>
    )
}