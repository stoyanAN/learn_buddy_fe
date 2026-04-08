import './App.css'
import {Button} from "@/components/ui/button.tsx";
import api from '@/services/api.ts'
import {JWT_KEY} from "@/shared/constants/storage-keys.const.ts";
import {useEffect} from "react";

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
        <div className="flex min-h-svh flex-col items-center justify-center">
            <Button onClick={getUsersQuery}>Get Users</Button>
        </div>
    )
}

export default App

