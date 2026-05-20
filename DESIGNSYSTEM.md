# Agentik Design System & Token Memory

## 1. Typography
* **Primary Font:** Manrope (`font-manrope`)
* **H1 (Hero):** `text-5xl md:text-[68px] font-semibold leading-[1.1em] tracking-[-0.04em]`
* **H2 (Section Headers):** `text-4xl md:text-[56px] font-semibold leading-[1.1em] tracking-tight`
* **H5 (Card Headers):** `text-xl font-semibold tracking-tight`
* **Body Text (Standard):** `text-[16px] text-gray-500 leading-relaxed`
* **Body Text (Micro):** `text-[10px] text-gray-400`
* **Pill Text:** `text-[12px] font-bold tracking-wider uppercase`

## 2. Colors
* **Background (Global):** `#F5F5F5` (`var(--color-background)`)
* **Brand Dark (Text/Primary Buttons):** `#141414` (`var(--color-brand-dark)`)
* **Brand Light (Cards/Secondary):** `#FFFFFF` (`var(--color-brand-light)`)
* **Brand Purple (Accents/Hover):** `#A0ADFF` (`var(--color-brand-purple)`)
* **Grid Lines / Borders:** `#D6D6D6` (`var(--color-grid-line)`)

## 3. Shadows
* **Heavy Button:** `0 50px 80px -20px rgba(0, 0, 0, 0.25)`
* **Glow Button (Purple):** `0 50px 80px -20px rgba(160, 173, 255, 0.30)`
* **Chat Box / Inner Cards:** `0 20px 40px -10px rgba(0, 0, 0, 0.05)`

## 4. Layout Architecture
* **Global Grid Width:** `max-w-[1200px]`
* **Grid Structure:** Outer container sets full-width horizontal borders (`border-y`). Inner container locks to 1200px and sets vertical borders (`border-x`). 
* **Bento Grids:** Handled via Tailwind CSS Grid (`grid-cols-1 md:grid-cols-3`).