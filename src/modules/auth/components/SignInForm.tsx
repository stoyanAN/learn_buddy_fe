import {useForm} from "react-hook-form";
import {loginSchema, type LoginSchemaType} from "@/modules/auth/schemas/login.schema.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {FieldGroup} from "@/components/ui/field.tsx";
import {Button} from "@/components/ui/button.tsx";
import {LockIcon, Mail} from "lucide-react";
import {Spinner} from "@/components/ui/spinner.tsx";
import {useLogin} from "@/modules/auth/hooks/useLogin.ts";
import {Separator} from "@/components/ui/separator.tsx";
import {FormInputField} from "@/shared/components/FormInput.tsx";
import {useNavigate} from "react-router";
import {AUTH_PATHS} from "@/pages/auth/paths.ts";

function SignInForm() {
    const navigate = useNavigate();
    const logUserIn = useLogin();
    const {register, formState: {errors, isValid}, reset, handleSubmit} = useForm<LoginSchemaType>({
        resolver: zodResolver(loginSchema), defaultValues: {
            email: '',
            password: ''
        },
        mode: 'onTouched'
    });

    const handleUserLogin = (data: LoginSchemaType) => {
        logUserIn.mutate(data, {
            onError: () => {
                reset()
            }
        });
    };


    return (<div className="w-2/3 sm:max-w-md  p-5">
        <h5 className="text-[22px] font-bold text-text-secondary tracking-tight mb-7">Welcome
            back</h5>
        <form id='login-form' onSubmit={handleSubmit(handleUserLogin)} autoComplete="off">
            <FieldGroup>
                <FormInputField
                    id="email-field"
                    label="Email"
                    registration={register('email')}
                    error={errors.email}
                    type="email"
                    placeholder="you@example.com"
                    icon={Mail}
                />

                <FormInputField
                    id="password-field"
                    label="Password"
                    registration={register('password')}
                    error={errors.password}
                    type="password"
                    placeholder="Enter your password"
                    icon={LockIcon}
                    labelAction={
                        <Button variant="link"
                                onClick={() => console.log('it is working')}
                                className="text-accent hover:text-accent-bright cursor-pointer transition-colors px-1 text-xs focus-visible:ring-1">Forgot
                            password?</Button>
                    }
                />
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
        <div className="flex flex-col gap-4 mt-14">
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
            <Button variant="link" className="text-xs text-accent hover:text-accent-glow cursor-pointer"
                    onClick={() => navigate(`../${AUTH_PATHS.SIGN_UP}`)}>Create a free
                account</Button>
        </div>
    </div>)
}

export default SignInForm
