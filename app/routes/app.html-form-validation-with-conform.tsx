import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { useFetcher, useNavigation } from "@remix-run/react";
import { authenticate } from "app/shopify.server";
import { useEffect, useState } from "react";

export const loader = async ({ request }: LoaderFunctionArgs) => {
    console.log("IN loader app.html-form-validation-with-conform.tsx");
    await authenticate.admin(request);
    console.log("OUT loader app.html-form-validation-with-conform.tsx");
    return {};
};


export const action = async ({ request }: ActionFunctionArgs) => {
    console.log("IN action app.html-form-validation-with-conform.tsx");
    await authenticate.admin(request);
    const formData = await request.formData();
    const name = formData.get("name");
    console.log("OUT action app.html-form-validation-with-conform.tsx", name);
    return { status: "success" };
};

export default function HTMLFormValidationWithConform() {
    const fetcher = useFetcher();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        fetcher.submit(new FormData(event.currentTarget), { method: "POST" });
    }

    useEffect(() => {
        if (fetcher.state !== "idle" && fetcher.data) {
            console.log("Start loading", fetcher.state, fetcher.data);
            setIsLoading(true);
        }  else {
            console.log("Stop loading", fetcher.state, fetcher.data);
            setIsLoading(false)
        }
    }, [fetcher.state, fetcher.data]);
    return (
        <div>
            <h1>HTML Form Validation with Conform</h1>
            {isLoading && <p>Loading...</p>}
            <fetcher.Form method="post" action="/app/html-form-validation-with-conform" onSubmit={handleSubmit}>
                <table>
                    <thead>
                        <tr>
                            <th>Field</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>
                                <label htmlFor="name">Name</label>
                            </td>
                            <td>
                                <input type="text" id="name" name="name" />
                            </td>
                        </tr>

                    </tbody>
                </table>
                <button type="submit">Submit</button>
            </fetcher.Form>
        </div>
    );
}