import {useForm} from "react-hook-form";
import {loginSchema, type LoginSchemaType} from "@/modules/auth/schemas/login.schema.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Field, FieldError, FieldGroup, FieldLabel} from "@/components/ui/field.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {InputGroup, InputGroupAddon, InputGroupInput} from "@/components/ui/input-group.tsx";
import {EyeIcon, EyeOffIcon} from "lucide-react";
import {useState} from "react";
import {Spinner} from "@/components/ui/spinner.tsx";
import {useLogin} from "@/modules/auth/hooks/useLogin.ts";

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const {register, formState: {errors, isValid}, reset, handleSubmit} = useForm<LoginSchemaType>({
        resolver: zodResolver(loginSchema), defaultValues: {
            email: '',
            password: ''
        },
        mode: 'onBlur'
    });
    const logUserIn = useLogin(reset);

    const handleUserLogin = (data: LoginSchemaType) => {
        logUserIn.mutate(data);
    };


    return (<Card className="w-2/3 sm:max-w-md">
        <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Enter your email below to login to your account.</CardDescription>
        </CardHeader>
        <CardContent>
            <form id='login-form' onSubmit={handleSubmit(handleUserLogin)}>
                <FieldGroup>
                    <Field data-invalid={errors.email}>
                        <FieldLabel htmlFor="email-field" className="text-black">Email</FieldLabel>
                        <Input id="email-field" {...register('email')} type="email"
                               placeholder="Enter your email"
                               className="rounded-sm aria-invalid:text-black"
                               aria-invalid={!!errors.email}/>
                        {errors.email && (
                            <FieldError className="text-left" errors={[errors.email]}/>
                        )}
                    </Field>

                    <Field data-invalid={errors.password}>
                        <FieldLabel htmlFor="password-field"
                                    className="text-black">Password</FieldLabel>
                        <InputGroup className="rounded-sm">
                            <InputGroupInput id="password-field" {...register('password')}
                                             type={showPassword ? 'text' : 'password'}
                                             placeholder="Enter your password"
                                             className="aria-invalid:text-black"
                                             aria-invalid={!!errors.password}/>
                            <InputGroupAddon align="inline-end">
                                {showPassword ? <EyeIcon className="cursor-pointer"
                                                         onClick={() => setShowPassword((prevState) => !prevState)}/> :
                                    <EyeOffIcon className="cursor-pointer"
                                                onClick={() => setShowPassword((prevState) => !prevState)}/>}
                            </InputGroupAddon>
                        </InputGroup>
                        {errors.password && (
                            <FieldError className="text-left" errors={[errors.password]}/>
                        )}
                    </Field>
                </FieldGroup>
            </form>
        </CardContent>
        <CardFooter>
            <Field orientation="horizontal" className="flex align-center justify-center">
                <Button type="submit" form="login-form" aria-label="Submit" className="bg-green-600"
                        disabled={!isValid || logUserIn.isPending}>

                    {!logUserIn.isPending ? 'Submit' : 'Logging in... '}
                    {logUserIn.isPending && <Spinner data-icon="inline-start"/>}

                </Button>
            </Field>
        </CardFooter>
    </Card>)
}

export default Login
