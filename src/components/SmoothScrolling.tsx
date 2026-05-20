"use client"

// Import natively from the main 'lenis/react' subpath as instructed in the core docs
import { ReactLenis } from "lenis/react"

export default function SmoothScrolling({ children }: { children: React.ReactNode }) {
    return (
        <ReactLenis
            root
            options={{
                lerp: 0.1,
                // Changed from smoothTouch to syncTouch to match the updated API spec
                syncTouch: false,
            }}
        >
            {children}
        </ReactLenis>
    )
}