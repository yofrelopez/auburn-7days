import React from 'react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    label: string;
    isTextArea?: boolean;
    rows?: number;
}

export default function FormInput({
    label,
    isTextArea = false,
    rows = 4,
    className = "",
    ...props
}: FormInputProps) {
    const inputClasses = `w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3.5 text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all shadow-sm ${className}`;

    return (
        <div className="space-y-1.5 w-full">
            <label htmlFor={props.id || props.name} className="text-xs font-bold uppercase tracking-wider text-neutral-700 ml-1">
                {label}
            </label>

            {isTextArea ? (
                <textarea
                    className={inputClasses}
                    rows={rows}
                    {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
                />
            ) : (
                <input
                    className={inputClasses}
                    {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
                />
            )}
        </div>
    );
}
