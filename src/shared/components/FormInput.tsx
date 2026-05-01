// shared/components/form/FormInput.tsx
import {type FieldError as FieldErrorType, type UseFormRegisterReturn} from 'react-hook-form'
import * as React from "react";
import {type ReactNode, useState} from "react";
import {Field, FieldError, FieldLabel} from "@/components/ui/field.tsx";
import {InputGroup, InputGroupAddon, InputGroupInput} from "@/components/ui/input-group.tsx";
import {EyeIcon, EyeOffIcon} from "lucide-react";

interface FormInputProps {
    // identity
    id: string;
    label: string;

    // react-hook-form
    registration: UseFormRegisterReturn<string>;
    error: FieldErrorType | undefined;

    // input config
    type?: 'text' | 'password' | 'number' | 'email';
    placeholder?: string;
    autoComplete?: string;
    icon?: (props: any) => ReactNode | Promise<ReactNode>;
    showPasswordToggle?: boolean;
    labelAction?: React.ReactNode
}

export function FormInputField({
                                   id,
                                   label,
                                   registration,
                                   error,
                                   type = 'text',
                                   placeholder,
                                   autoComplete,
                                   icon: Icon,
                                   showPasswordToggle,
                                   labelAction
                               }: FormInputProps) {
    const [showPassword, setShowPassword] = useState(false);
    const inputType = showPasswordToggle
        ? showPassword ? 'text' : 'password'
        : type

    return (
        <Field data-invalid={error} className="gap-1">
            <FieldLabel htmlFor={id}
                        className="text-xs font-medium text-text-secondary tracking-wide flex justify-between">
                {label}
                {labelAction && labelAction}
            </FieldLabel>
            <InputGroup className="bg-white/[4%] has-[[data-slot=input-group-control]:focus-visible]:border-border/50
          has-[[data-slot=input-group-control]:focus-visible]:bg-accent/[6%]
          has-[[data-slot=input-group-control]:focus-visible]:ring-accent/40 has-[[data-slot=input-group-control]:invalid]:ring-accent/40 rounded-sm !ring-0">
                {Icon && (
                    <InputGroupAddon align="inline-start" className="text-text-muted">
                        <Icon/>
                    </InputGroupAddon>
                )}
                <InputGroupInput
                    id={id}
                    {...registration}
                    type={inputType}
                    placeholder={placeholder}
                    autoComplete={autoComplete}
                    aria-invalid={!!error}
                    className="text-text-primary placeholder:text-muted text-sm"
                />
                {showPasswordToggle && (
                    <InputGroupAddon align="inline-end">
                        {showPassword ? <EyeIcon className="cursor-pointer"
                                                 onClick={() => setShowPassword((prevState) => !prevState)}/> :
                            <EyeOffIcon className="text-text-muted cursor-pointer"
                                        onClick={() => setShowPassword((prevState) => !prevState)}/>}
                    </InputGroupAddon>
                )}
            </InputGroup>
            <FieldError
                id={`${id}-error`}
                className="mt-[7px] px-2.5 py-[7px] rounded-[7px] text-xs text-danger-text bg-danger-subtle"
                errors={[error]}
            />
        </Field>
    )
}
