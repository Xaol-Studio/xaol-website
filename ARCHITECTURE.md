# 🏛️ XAOL Studio Architecture & System Topology

High-performance, editorial landing page for XAOL Studio (`xaol.mx`). Designed following European software house aesthetics: deep architectural matte black (`#09090b`), 1px crisp borders, monochrome technical typography, zero bloated AI design tropes, and sub-100ms load times.

---

## 1. Technology Stack

| Layer | Technology | Details |
| :--- | :--- | :--- |
| **Markup & Semantics** | HTML5 Semantic Living Standard | Full ARIA, accessible dialogs, zero extraneous div soup |
| **CSS Engine** | Tailwind CSS (JIT CDN runtime) | Custom OKLCH / zinc theme, print styles, reduced-motion rules |
| **Typography** | Google Fonts | Inter (sans-serif) & JetBrains Mono (monospace technical blueprint) |
| **Icons** | Lucide Icons (ESM / CDN) | 16px monochrome vector line icons |
| **Interactivity** | Vanilla JavaScript (ES2022) | Native ROI calculation engine, accessible tabs, smooth scroll observer |
| **Hosting & CDN** | GitHub Pages / Cloudflare Edge | Zero server maintenance, instant edge delivery |

---

## 2. System Topology & Section Breakdown

```mermaid
flowchart TD
    subgraph Document["index.html"]
        Nav["Header & Nav (Sticky Architectural Bar)"]
        Hero["Hero Section (Studio Mission, SAT/Customs Focus)"]
        TechSpec["System Architecture Blueprint (Stack Specification)"]
        Bento["Bento Interactive Demos (SAT Parser, Dashboard, Customs Flow)"]
        ROICalc["Interactive ROI & Operational Savings Calculator"]
        Team["Engineering Founders (UNAM Informatics)"]
        CTA["Final CTA & Lead Intake (Direct WhatsApp & Email)"]
        Footer["Colophon & System Status Footer"]
    end

    subgraph ClientEngine["Vanilla JS Controller"]
        ROI["ROI Logic (Dynamic Sliders, Math.round, Savings Metric)"]
        Tabs["Bento Tab Controller (SAT XML, CFDI 4.0, Logistics)"]
        Menu["Mobile Navigation Toggle (Accessible ARIA state)"]
        Observer["Intersection Observer (Section Scroll Highlights)"]
    end

    ROICalc --> ROI
    Bento --> Tabs
    Nav --> Menu
    Document --> Observer
```

---

## 3. Data & Interaction Flow (ROI Engine)

```mermaid
sequenceDiagram
    autonumber
    actor Founder as Enterprise Client / Lead
    participant Slider as Hours / Hourly Rate Range Sliders
    participant Engine as Vanilla JS Calculator
    participant DOM as ROI Summary Metrics Panel
    participant CTA as WhatsApp Pre-filled Trigger

    Founder->>Slider: Adjusts manual hours spent / week
    Slider->>Engine: input event triggered
    Engine->>Engine: Calculate monthly hours, labor cost, and projected savings
    Engine->>DOM: Update projected hours saved & annual ROI ($MXN)
    Founder->>CTA: Clicks "Iniciar Proyecto"
    CTA->>Founder: Opens WhatsApp with pre-filled scope inquiry
```

---

## 4. Directory Structure

```
xaol-website/
├── index.html        # Complete production frontend (HTML, Tailwind config, JS engines)
├── ARCHITECTURE.md   # System architecture and topology documentation
└── README.md         # Deployment instructions and project overview
```
