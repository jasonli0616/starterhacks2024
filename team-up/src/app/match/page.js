"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import axios from "axios";
import MatchingButton from "../components/MatchingButton";
import { useEffect, useState } from "react";

function Page() {

    const { user, error, isLoading } = useUser();

    const [output, setOutput] = useState({});

    useEffect(() => {
        if (user) {
            axios.post("/api/matching", {
                email: user.email
            }).then((res) => {
                for (let emailAddress of res.data.userIDs) {

                    axios.post("/api/getuserpref", {email: emailAddress})
                        .then((res1) => {
                            setOutput({
                                ...output,
                                [emailAddress]: res1.data.preferences
                            })
                        });


                }
            })
        }
    }, [user])

    if (user) {

        return (
            <div>
                {Object.keys(output).map((key) => (
                    <div>
                        <h1 key={key}>{key}</h1>
                        {Object.keys(output[key]).map((pref) => {
                            if (output[key][pref])
                            return <p key={pref}>{pref} {output[key][pref]}</p>
                        })}
                    </div>
                ))}
            </div>
        )

    }

    return <></>
}

export default Page;