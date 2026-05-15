import {signUpSchema, type SignUpSchemaType} from "@/modules/auth/schemas/sign-up.schema.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {Button} from "@/components/ui/button.tsx";
import {useSignUp} from "@/modules/auth/hooks/useSignUp.ts";
import {FieldGroup} from "@/components/ui/field.tsx";
import {LockIcon, Mail, User} from "lucide-react";
import {FormInputField} from "@/shared/components/FormInput.tsx";
import {Spinner} from "@/components/ui/spinner.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import {useNavigate} from "react-router";
import {AUTH_PATHS} from "@/pages/auth/paths.ts";

function SignUpForm() {
    const navigate = useNavigate();
    const signUpUser = useSignUp();
    const {register, formState: {errors, isValid}, reset, handleSubmit} = useForm<SignUpSchemaType>({
        resolver: zodResolver(signUpSchema), defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        mode: 'onTouched'
    });
    const handleUserSignUp = (data: SignUpSchemaType) => {
        signUpUser.mutate(data, {
            onError: () => {
                reset()
            }
        });
    }

    return (<div className="w-2/3 sm:max-w-md p-5">
        <h5 className="text-[22px] font-bold text-text-secondary tracking-tight mb-1.5">Welcome</h5>
        <div className="text-sm text-violet-200">Already have an account? <Button variant="link"
                                                                                  className="text-accent hover:text-accent-bright cursor-pointer transition-colors px-1"
                                                                                  onClick={() => navigate(`../${AUTH_PATHS.SIGN_IN}`)}>Sign
            in</Button></div>
        <form id="signup-form" onSubmit={handleSubmit(handleUserSignUp)}>
            <FieldGroup>
                <div className="grid grid-cols-2 gap-2.5">
                    <FormInputField
                        id="first-name-field"
                        label="First Name"
                        registration={register('firstName')}
                        error={errors.firstName}
                        type="text"
                        placeholder="John"
                        icon={User}
                    />
                    <FormInputField
                        id="last-name-field"
                        label="Last Name"
                        registration={register('lastName')}
                        error={errors.lastName}
                        type="text"
                        placeholder="Doe"
                        icon={User}
                    />
                </div>

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
                    placeholder="Min. 8 characters"
                    icon={LockIcon}
                />

                <FormInputField
                    id="confirm-password-field"
                    label="Confirm Password"
                    registration={register('confirmPassword')}
                    error={errors.confirmPassword}
                    type="password"
                    placeholder="Confirm your password"
                    icon={LockIcon}
                />
            </FieldGroup>
        </form>
        <div className="flex flex-col gap-1 mt-7">
            <Button type="submit" form="login-form" aria-label="Submit"
                    className="w-full rounded-sm
                    disabled:pointer-events-auto
    bg-accent hover:bg-accent-bright active:bg-accent-dim
    text-white text-sm font-medium border-none cursor-pointer
    disabled:cursor-not-allowed
    hover:-translate-y-px active:translate-y-0 transition-all"
                    disabled={!isValid || signUpUser.isPending}>

                {!signUpUser.isPending ? 'Sign Up' : 'Signing in... '}
                {signUpUser.isPending && <Spinner data-icon="inline-start"/>}

            </Button>
            <Separator className="!w-auto mt-4 bg-border/[30%]"/>
            <div className="text-text-muted text-xs text-center">
                By creating an account you agree to our <Button variant="link"
                                                                className="text-xs p-0 cursor-pointer text-text-secondary">Terms
                of
                service</Button> and <Button className="text-xs p-0 cursor-pointer text-text-secondary"
                                             variant="link">Privacy policy</Button>
            </div>
        </div>
    </div>)
}

export default SignUpForm;
