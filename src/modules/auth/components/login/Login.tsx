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
import {Separator} from "@/components/ui/separator.tsx";

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


    return (<Card className="w-2/3 sm:max-w-md dark:bg-stone-900">
        <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Enter your email below to login to your account.</CardDescription>
        </CardHeader>
        <CardContent>
            <form id='login-form' onSubmit={handleSubmit(handleUserLogin)}>
                <FieldGroup>
                    <Field data-invalid={errors.email}>
                        <FieldLabel htmlFor="email-field"
                                    className="text-black">Email</FieldLabel>
                        <Input id="email-field" {...register('email')} type="email"
                               placeholder="Enter your email"
                               className="rounded-sm aria-invalid:text-black bg-stone-100 border-stone-200 placeholder:text-stone-400 focus-visible:border-green-800 focus-visible:ring-green-600/20"
                               aria-invalid={!!errors.email}/>
                        {errors.email && (
                            <FieldError className="text-left" errors={[errors.email]}/>
                        )}
                    </Field>

                    <Field data-invalid={errors.password}>
                        <FieldLabel htmlFor="password-field"
                                    className="text-black">Password</FieldLabel>
                        <InputGroup
                            className="rounded-sm bg-stone-100 border-stone-200 placeholder:text-stone-400 has-[[data-slot=input-group-control]:focus-visible]:border-green-800 has-[[data-slot=input-group-control]:focus-visible]:ring-green-600/20">
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
                        <div className="flex justify-end relative -top-3">
                            <Button variant="link" className="text-xs text-emerald-800 cursor-pointer">Forgot
                                password?</Button>
                        </div>
                        {errors.password && (
                            <FieldError className="text-left" errors={[errors.password]}/>
                        )}
                    </Field>
                </FieldGroup>
            </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
            <Button type="submit" form="login-form" aria-label="Submit"
                    className="w-full rounded-sm  bg-green-800 text-white border-stone-200 dark:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-auto disabled:bg-green-800"
                    disabled={!isValid || logUserIn.isPending}>

                {!logUserIn.isPending ? 'Sign In' : 'Logging in... '}
                {logUserIn.isPending && <Spinner data-icon="inline-start"/>}

            </Button>
            <div className="grid grid-cols-3 gap-4 items-center mt-2">
                <Separator className="!w-auto"/>
                <span
                    className="inline-block text-xs text-stone-400 w-max relative -left-1">Don't have an account?</span>
                <Separator className="!w-auto"/>
            </div>
            <Button variant="link" className="text-xs text-emerald-800 cursor-pointer">Create a free
                account</Button>
        </CardFooter>
    </Card>)
}

export default Login
