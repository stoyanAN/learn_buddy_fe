import ForgotPasswordInstructions from "@/modules/auth/components/ForgotPasswordInstructions.tsx";
import ForgotPasswordForm from "@/modules/auth/components/ForgotPasswordForm.tsx";
import {useState} from "react";
import ResendPasswordResetEmail from "@/modules/auth/components/ResendPasswordResetEmail.tsx";

export default function ForgotPasswordLayout() {
    const [userEmail, setUserEmail] = useState("");
    const [showResendPasswordForm, setShowResendPasswordForm] = useState(false);

    return <div className="flex"><ForgotPasswordInstructions/> {!showResendPasswordForm &&
        <ForgotPasswordForm setUserEmail={setUserEmail}
                            setShowResendPasswordForm={setShowResendPasswordForm}/>}
        {showResendPasswordForm && <ResendPasswordResetEmail email={userEmail}/>}
    </div>
}
