import {useForm} from "react-hook-form";
import {loginSchema, type LoginSchemaType} from "@/modules/auth/schemas/login.schema.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {Field, FieldError, FieldGroup, FieldLabel} from "@/components/ui/field.tsx";
import {Button} from "@/components/ui/button.tsx";
import {InputGroup, InputGroupAddon, InputGroupInput, InputGroupText} from "@/components/ui/input-group.tsx";
import {EyeIcon, EyeOffIcon, LockIcon, Mail} from "lucide-react";
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
        mode: 'onTouched'
    });
    const logUserIn = useLogin(reset);

    const handleUserLogin = (data: LoginSchemaType) => {
        logUserIn.mutate(data);
    };


    return (<div className="w-2/3 sm:max-w-md dark:bg-stone-900 p-5">
        <h5 className="text-[22px] font-bold text-text-secondary tracking-tight mb-1.5">Welcome
            back</h5>
        <div className="text-sm text-violet-200">Don't have an account? <Button variant="link"
                                                                                className="text-accent hover:text-accent-bright cursor-pointer transition-colors px-1">Sign
            up</Button></div>
        <form id='login-form' onSubmit={handleSubmit(handleUserLogin)}>
            <FieldGroup>
                <Field data-invalid={errors.email} className="gap-1">
                    <FieldLabel htmlFor="email-field"
                                className="text-xs font-medium text-text-secondary tracking-wide">Email</FieldLabel>
                    <InputGroup
                        className="bg-white/[4%] has-[[data-slot=input-group-control]:focus-visible]:border-border/50
          has-[[data-slot=input-group-control]:focus-visible]:bg-accent/[6%]
          has-[[data-slot=input-group-control]:focus-visible]:ring-accent/40 has-[[data-slot=input-group-control]:invalid]:ring-accent/40 rounded-sm !ring-0">
                        <InputGroupAddon align="inline-start"
                                         className="text-text-muted"><Mail/></InputGroupAddon>
                        <InputGroupInput autoComplete="off" id="email-field" {...register('email')} type="email"
                                         placeholder="you@example.com"
                                         className="text-text-primary placeholder:text-muted text-sm "
                                         aria-invalid={!!errors.email}/>
                    </InputGroup>
                    <FieldError id="email-error"
                                className="mt-[7px] px-2.5 py-[7px] rounded-[7px] text-xs text-danger-text bg-danger-subtle"
                                errors={[errors.email]}/>
                </Field>

                <Field data-invalid={errors.password} className="gap-1">
                    <FieldLabel htmlFor="password-field"
                                className="text-xs font-medium text-text-secondary tracking-wide flex justify-between">
                        <span>Password</span>
                        <Button variant="link"
                                className="text-accent hover:text-accent-bright cursor-pointer transition-colors px-1 text-xs">Forgot
                            password?</Button>
                    </FieldLabel>
                    <InputGroup
                        className="bg-white/[4%] has-[[data-slot=input-group-control]:focus-visible]:border-border/50
          has-[[data-slot=input-group-control]:focus-visible]:bg-accent/[6%]
          has-[[data-slot=input-group-control]:focus-visible]:ring-accent/40 has-[[data-slot=input-group-control]:invalid]:ring-accent/40 rounded-sm !ring-0">
                        <InputGroupAddon align="inline-start">
                            <InputGroupText>
                                <LockIcon
                                    className="text-text-muted"/>
                            </InputGroupText>
                        </InputGroupAddon>
                        <InputGroupInput id="password-field" {...register('password')}
                                         type={showPassword ? 'text' : 'password'}
                                         placeholder="Enter your password"
                                         className="text-text-primary placeholder:text-muted text-sm"
                                         aria-invalid={!!errors.password}/>
                        <InputGroupAddon align="inline-end">
                            {showPassword ? <EyeIcon className="cursor-pointer"
                                                     onClick={() => setShowPassword((prevState) => !prevState)}/> :
                                <EyeOffIcon className="text-text-muted cursor-pointer"
                                            onClick={() => setShowPassword((prevState) => !prevState)}/>}
                        </InputGroupAddon>
                    </InputGroup>

                    <FieldError id="password-error"
                                className="mt-[7px] px-2.5 py-[7px] rounded-[7px] text-xs text-danger-text bg-danger-subtle"
                                errors={[errors.password]}/>

                </Field>
            </FieldGroup>
            <div className="flex items-center justify-between mt-3 mb-4">
                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="checkbox"
                        defaultChecked
                        className="w-[15px] h-[15px] accent-accent cursor-pointer rounded"
                    />
                    <span className="text-[13px] text-secondary">Keep me signed in</span>
                </label>
            </div>
        </form>
        <div className="flex flex-col gap-4">
            <Button type="submit" form="login-form" aria-label="Submit"
                    className="w-full rounded-sm
                    disabled:pointer-events-auto
    bg-accent hover:bg-accent-bright active:bg-accent-dim
    text-white text-sm font-medium border-none cursor-pointer
    disabled:cursor-not-allowed
    hover:-translate-y-px active:translate-y-0 transition-all"
                    disabled={!isValid || logUserIn.isPending}>

                {!logUserIn.isPending ? 'Sign In' : 'Logging in... '}
                {logUserIn.isPending && <Spinner data-icon="inline-start"/>}

            </Button>
            <div className="grid grid-cols-3 gap-4 items-center mt-2">
                <Separator className="!w-auto"/>
                <span
                    className="inline-block text-xs text-text-muted w-max relative -left-1">Don't have an account?</span>
                <Separator className="!w-auto"/>
            </div>
            <Button variant="link" className="text-xs text-accent hover:text-accent-glow cursor-pointer">Create a free
                account</Button>
        </div>
    </div>)
}

export default Login
