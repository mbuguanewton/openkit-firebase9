import { useEffect, useRef } from "react";

export default function useEventListener(eventType, cb, element = window) {
    const callbackRef = useRef(cb);

    useEffect(() => {
        callbackRef.current = cb;
    }, [cb]);

    useEffect(() => {
        if (element === null) return;
        const handler = (e) => callbackRef.current(e);
        element.addEventListener(eventType, handler);

        return () => element.removeEventListener(eventType, handler);
    }, [eventType, element]);
}
