import {AUTH_PATHS} from "@/pages/auth/paths.ts";
import {Link} from "react-router";
import {Info, Mail} from "lucide-react";
import {useForgotPassword} from "@/modules/auth/hooks/useForgotPassword.ts";
import {useForm} from "react-hook-form";
import {forgotPasswordSchema, type ForgotPasswordSchema} from "@/modules/auth/schemas/forgot-password.schema.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {FormInputField} from "@/shared/components/FormInputField.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Spinner} from "@/components/ui/spinner.tsx";

interface ForgotPasswordFormProps {
    setUserEmail: (value: string) => void;
    setShowResendPasswordForm: (value: boolean) => void;
}

export default function ForgotPasswordForm({setUserEmail, setShowResendPasswordForm}: ForgotPasswordFormProps) {
    const forgotPasswordHook = useForgotPassword();
    const {register, formState: {errors, isValid}, reset, handleSubmit} = useForm<ForgotPasswordSchema>({
        resolver: zodResolver(forgotPasswordSchema), defaultValues: {
            email: '',
        },
        mode: 'onTouched'
    });
    const handleForgotPassword = (data: ForgotPasswordSchema) => {
        setUserEmail(data.email);
        forgotPasswordHook.mutate(data, {
            onSuccess: () => {
                setShowResendPasswordForm(true);
            },
            onError: () => {
                reset();
            }
        });
    }

    return (
        <div className="flex items-center justify-center p-10 bg-[#0d0b12]">
            <div className="w-full max-w-sm">
                {/* ── REQUEST STATE ── */}
                <h2 className="text-xl font-bold text-[#f5f0e8] tracking-tight mb-1.5">Forgot your password?</h2>
                <p className="text-sm text-[#b0a8c8] mb-6 leading-relaxed">
                    Enter your email and we'll send a reset link.{' '}
                    <Link to={AUTH_PATHS.SIGN_IN} className="text-purple-400 hover:text-purple-300">Back to sign
                        in</Link>
                </p>

                {/* Hint box */}
                <div className="flex items-start gap-2 bg-purple-600/7 border border-purple-900/20 rounded-xl p-3 mb-5">
                    <Info className="w-3.5 h-3.5 text-[#7a7090] shrink-0 mt-0.5"/>
                    <span className="text-xs text-[#b0a8c8] leading-relaxed">
          The reset link expires in <strong className="text-[#ede8f5]">15 minutes</strong>. Check your spam folder if you don't see it.
        </span>
                </div>
                <form id='forgot-password-form' onSubmit={handleSubmit(handleForgotPassword)} autoComplete="off">
                    {/* Email field */}
                    <FormInputField
                        id="email-field"
                        label="Email address"
                        registration={register('email')}
                        error={errors.email}
                        type="email"
                        placeholder="you@example.com"
                        icon={Mail}
                    />

                    {/* Submit */}
                    <Button
                        type="submit"
                        className="w-full bg-purple-600 hover:bg-purple-400 text-white"
                        disabled={!isValid || forgotPasswordHook.isPending}
                    >
                        {forgotPasswordHook.isPending && <Spinner/>}
                        Send reset link
                    </Button>
                </form>

                <div className="flex items-center gap-3 my-4">
                    <div className="flex-1 h-px bg-purple-900/20"/>
                    <span className="text-xs text-[#7a7090]">or</span>
                    <div className="flex-1 h-px bg-purple-900/20"/>
                </div>

                <Button variant="outline"
                        className="w-full border-purple-900/20 text-[#b0a8c8] hover:text-[#ede8f5] hover:bg-purple-600/7">
                    <Link to={AUTH_PATHS.SIGN_IN}>← Back to sign in</Link>
                </Button>
            </div>

        </div>
    )
}
