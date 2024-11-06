import { useRouteError } from "react-router-dom";
import PageContent from "./PageContent";

export default function ErrorElement(){
    const error = useRouteError();
    let title = "ERROR OCCURED";
    let message  = "Something goes too wrong ! oops"
    if(error.status === 500) {
        message = error.data.message ;

    }


    return <PageContent title={title}>
                <p>{message}</p>
            </PageContent>
}