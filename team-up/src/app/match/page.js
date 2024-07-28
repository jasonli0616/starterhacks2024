"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import axios from "axios";
import MatchingButton from "../components/MatchingButton";

function Page() {

    

    const { user, error, isLoading } = useUser();

    async function submit() {
        axios.post("/api/matching", {
            email: user.email
        }).then((res) => {
            console.log(res.data.userIDs)
        })
    }

    return (
        <MatchingButton onclick={submit}>Test</MatchingButton>
    )
}

export default Page;