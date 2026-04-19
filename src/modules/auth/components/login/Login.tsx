import {Controller, useForm} from "react-hook-form";
import {loginSchema, type LoginSchemaType} from "@/modules/auth/schemas/login.schema.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Field, FieldError, FieldGroup, FieldLabel} from "@/components/ui/field.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import api from "@/shared/services/api.ts";
import {useMutation} from "@tanstack/react-query";
import {JWT_KEY} from "@/shared/constants/storage-keys.const.ts";
import {useNavigate} from "react-router";
import {InputGroup, InputGroupAddon, InputGroupInput} from "@/components/ui/input-group.tsx";
import {EyeIcon, EyeOffIcon} from "lucide-react";
import {useState} from "react";
import {Spinner} from "@/components/ui/spinner.tsx";
import {toast} from "sonner";

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const loginForm = useForm<LoginSchemaType>({
        resolver: zodResolver(loginSchema), defaultValues: {
            email: '',
            password: ''
        },
        mode: 'all'
    });
    const logUserIn = useMutation({
        mutationKey: ['loginUser'],
        mutationFn: (credentials: LoginSchemaType) => api.post('/auth/login', {...credentials}).then(res => res.data),
        onSuccess: (response: { accessToken: string }) => {
            localStorage.setItem(JWT_KEY, response.accessToken);
            navigate('/dashboard');
        },
        onError: (error: any) => {
            console.error('Error logging in:', error);
            if (error.status === 401) {
                toast.error('Incorrect email or password', {
                    position: 'top-center',
                    duration: 2000,
                    className: '!bg-red-300/75'
                });

                loginForm.reset();
            }
        }
    })

    const handleSubmit = (data: LoginSchemaType) => {
        logUserIn.mutate(data);
    };


    return (<Card className="w-2/3 sm:max-w-md">
        <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Enter your email below to login to your account.</CardDescription>
        </CardHeader>
        <CardContent>
            <form id='login-form' onSubmit={loginForm.handleSubmit(handleSubmit)}>
                <FieldGroup>
                    <Controller control={loginForm.control} name="email"
                                render={({field, fieldState}) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="email-field" className="text-black">Email</FieldLabel>
                                        <Input id="email-field" {...field} type="email"
                                               placeholder="Enter your email"
                                               className="rounded-sm aria-invalid:text-black"
                                               aria-invalid={fieldState.invalid}/>
                                        {fieldState.invalid && (
                                            <FieldError className="text-left" errors={[fieldState.error]}/>
                                        )}
                                    </Field>
                                )}
                    />
                    <Controller control={loginForm.control} name="password"
                                render={({field, fieldState}) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="password-field"
                                                    className="text-black">Password</FieldLabel>
                                        <InputGroup>
                                            <InputGroupInput id="password-field" {...field}
                                                             type={showPassword ? 'text' : 'password'}
                                                             placeholder="Enter your password"
                                                             className="rounded-sm aria-invalid:text-black"
                                                             aria-invalid={fieldState.invalid}/>
                                            <InputGroupAddon align="inline-end">
                                                {!showPassword && <EyeOffIcon className="cursor-pointer"
                                                                              onClick={() => setShowPassword((prevState) => !prevState)}/>}
                                                {showPassword && <EyeIcon className="cursor-pointer"
                                                                          onClick={() => setShowPassword((prevState) => !prevState)}/>}
                                            </InputGroupAddon>
                                        </InputGroup>
                                        {fieldState.invalid && (
                                            <FieldError className="text-left" errors={[fieldState.error]}/>
                                        )}
                                    </Field>
                                )}
                    />
                </FieldGroup>
            </form>
        </CardContent>
        <CardFooter>
            <Field orientation="horizontal" className="flex align-center justify-center">
                <Button type="submit" form="login-form" aria-label="Submit" className="bg-green-600"
                        disabled={!loginForm.formState.isValid || logUserIn.isPending}>

                    {!logUserIn.isPending ? 'Submit' : 'Logging in... '}
                    {logUserIn.isPending && <Spinner data-icon="inline-start"/>}

                </Button>
            </Field>
        </CardFooter>
    </Card>)
}

export default Login
