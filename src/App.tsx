import './App.css'
import {Button} from "@/components/ui/button.tsx";
import api from '@/services/api.ts'
import {JWT_KEY} from "@/shared/constants/storage-keys.const.ts";
import {useEffect} from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 5 * 60 * 1000,
            retry: 1,
            refetchOnWindowFocus: false
        }
    }
});

function App() {

    useEffect(() => {
        api.post('auth/login', {email: 's.nenkov@outlook.com', password: 'pass1234'}).then(function (response) {
            // handle success
            localStorage.setItem(JWT_KEY, response.data.accessToken);
        })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, []);

    const getUsersQuery = async () => {
        return await api.get('/users').then((response) => {
            console.log(response, ' users response ');
        });
    }


    return (
        <QueryClientProvider client={queryClient}>
            <div className="flex min-h-svh flex-col items-center justify-center">
                <Button onClick={getUsersQuery}>Get Users</Button>
            </div>
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    )
}

export default App

