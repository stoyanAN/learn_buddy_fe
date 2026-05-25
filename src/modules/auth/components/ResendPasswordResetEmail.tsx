import {Mail} from "lucide-react";
import {Link} from "react-router";
import {AUTH_PATHS} from "@/pages/auth/paths.ts";
import {useForgotPassword} from "@/modules/auth/hooks/useForgotPassword.ts";
import {Button} from "@/components/ui/button.tsx";

interface ResendPasswordResetEmailProps {
    email: string;
}

export default function ResendPasswordResetEmail({email}: ResendPasswordResetEmailProps) {
    const forgotPasswordHook = useForgotPassword();
    const handleResentPasswordResetEmail = () => forgotPasswordHook.mutate({email})

    return <div className="text-center py-2">
        <div
            className="w-14 h-14 rounded-full bg-purple-600/12 border border-purple-600/30 flex items-center justify-center mx-auto mb-5">
            <Mail className="w-6 h-6 stroke-purple-400"/>
        </div>
        <h2 className="text-xl font-bold text-[#f5f0e8] tracking-tight mb-2">Check your inbox</h2>
        <p className="text-sm text-[#b0a8c8] leading-relaxed">We sent a password reset link to</p>
        <div
            className="inline-flex items-center bg-purple-600/12 border border-purple-600/30 text-purple-300 text-xs font-medium px-4 py-1.5 rounded-full font-mono my-3">
            {email}
        </div>
        <p className="text-sm text-[#b0a8c8] leading-relaxed">
            The link expires in <strong className="text-[#ede8f5]">15 minutes</strong>. Check your spam
            folder if you don't see it.
        </p>
        <div className="flex items-center justify-center gap-1.5 text-sm text-[#7a7090] mt-5">
            Didn't receive it?
            <Button variant="link" className="text-purple-400 hover:text-purple-300 font-medium cursor-pointer"
                    onClick={handleResentPasswordResetEmail}>
                Resend email
            </Button>
        </div>
        <Link to={AUTH_PATHS.SIGN_IN}
              className="block text-sm text-purple-400 hover:text-purple-300 mt-3">
            ← Back to sign in
        </Link>
    </div>
}
