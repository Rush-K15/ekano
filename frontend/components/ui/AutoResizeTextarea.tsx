"use client";

import {
    forwardRef,
    useEffect,
    useRef,
} from "react";

type AutoResizeTextareaProps =
    React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const AutoResizeTextarea = forwardRef<
    HTMLTextAreaElement,
    AutoResizeTextareaProps
>(function AutoResizeTextarea(
    {
        className = "",
        onChange,
        value,
        ...props
    },
    forwardedRef
) {
    const textareaRef =
        useRef<HTMLTextAreaElement>(null);

    function resizeTextarea() {
        const textarea = textareaRef.current;

        if (!textarea) return;

        textarea.style.height = "0px";
        textarea.style.height = `${textarea.scrollHeight}px`;
    }

    useEffect(() => {
        resizeTextarea();
    }, [value]);

    function handleChange(
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) {
        resizeTextarea();

        onChange?.(event);
    }

    return (
        <textarea
            {...props}
            value={value}
            ref={(element) => {
                textareaRef.current = element;

                if (typeof forwardedRef === "function") {
                    forwardedRef(element);
                } else if (forwardedRef) {
                    forwardedRef.current = element;
                }
            }}
            rows={1}
            onChange={handleChange}
            className={[
                "min-h-12",
                "max-h-40",
                "resize-none",
                "overflow-y-auto",
                className,
            ].join(" ")}
        />
    );
});

export default AutoResizeTextarea;