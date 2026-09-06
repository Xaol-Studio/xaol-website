# XAOL Studio Web Platform & Client Demonstrators

<p align="left">
  <strong>Production Web Platform, Interactive Pricing Engine & Client Demonstrators</strong><br>
  Official Repository of <a href="https://github.com/Xaol-Studio"><strong>XAOL Software Studio</strong></a> · Mexico City / State of Mexico
</p>

<p align="left">
  <a href="https://xaol-website.vercel.app"><img src="https://img.shields.io/badge/Production_URL-xaol--website.vercel.app-059669?style=flat-square&logo=vercel&logoColor=white" alt="Production URL" /></a>
  <a href="https://github.com/Xaol-Studio"><img src="https://img.shields.io/badge/Organization-@Xaol--Studio-1e293b?style=flat-square&logo=github&logoColor=white" alt="Organization" /></a>
  <img src="https://img.shields.io/badge/Architecture-Zero--Build%20%2F%20Edge%20Native-blue?style=flat-square" alt="Architecture" />
  <img src="https://img.shields.io/badge/Performance-100%2F100%20Lighthouse-emerald?style=flat-square" alt="Performance" />
</p>

---

## 📌 Overview

This repository hosts the primary production web platform and interactive client demonstrators for **XAOL Software Studio**.

Unlike standard agency websites that rely on heavy content management systems, slow third-party plugins, and tracking bloat, the XAOL platform is engineered with **zero-build client performance**. It loads instantly on mobile networks, demonstrates live software capabilities in real time, and allows prospective clients to test working software modules before signing a contract.

---

## 🏛️ Architectural Highlights

- **Zero Runtime Cold-Starts:** 100% client-side execution for all demonstrators. No backend container spin-up delays or API gateway timeouts.
- **Edge Deployment Ready:** Configured for high-speed edge delivery via Vercel (`vercel.json`) with clean asset routing and immutable caching headers.
- **Privacy & Compliance:** Client simulations process data exclusively in browser memory. No business financial figures or customer data ever leave the local client environment.
- **Micro-Interactions & Dev Aesthetic:** Features an interactive terminal inspector, real-time MXN budget estimator, dynamic FAQ accordions, and WhatsApp deep-linking.

---

## 🧪 Interactive Client Demonstrators (`/demo`)

Each demonstrator is an autonomous, standalone single-page application addressing a high-frequency business operational problem:

| Demonstrator | Target Sector | Key Capabilities | Source File |
| :--- | :--- | :--- | :---: |
| **PyME Manager** | Retail, Auto-parts, Hardware | In-memory relational database simulator (PostgreSQL / SQLite schemas), instant SKU/barcode search, transaction register, and live stock adjustments. | [`demo/pyme-manager.html`](demo/pyme-manager.html) |
| **CFDI Sentinel** | Accounting & Fiscal Audit | Client-side CFDI 4.0 XML parser, Anexo 20 tax reconciliation, and instant screening against the official SAT Art. 69-B blacklist (EFOS/EDOS). | [`demo/sat-sentinel.html`](demo/sat-sentinel.html) |
| **MediCitas Pro** | Dental & Medical Clinics | Mobile-first appointment booking engine with dynamic time-slot allocation and instant formatted WhatsApp confirmation. | [`demo/citas-servicios.html`](demo/citas-servicios.html) |
| **AutoQuote Pro** | Auto-parts & Workshops | Fast-counter quoting engine featuring dual retail/mechanic pricing tiers, margin calculation, and 1-click WhatsApp quote generator. | [`demo/cotizador-refaccionaria.html`](demo/cotizador-refaccionaria.html) |
| **FoodOrder Pro** | Restaurants & Dark Kitchens | Digital visual menu for dine-in tables or delivery with order customization, tip calculation, and direct-to-kitchen WhatsApp dispatch. | [`demo/restaurante-pedidos.html`](demo/restaurante-pedidos.html) |

---

## 📁 Repository Structure

```
xaol-website/
├── index.html                    # Corporate landing page, terminal inspector & MXN pricing engine
├── vercel.json                   # Edge routing, security headers & clean URLs configuration
├── README.md                     # Platform architecture & deployment documentation
├── .gitignore                    # Version control ignore rules
└── demo/                         # Standalone client demonstrator applications
    ├── pyme-manager.html         # PyME Manager (Inventory & POS simulator)
    ├── sat-sentinel.html         # CFDI Sentinel (SAT CFDI 4.0 & Art. 69-B auditor)
    ├── citas-servicios.html      # MediCitas Pro (Clinic & dental appointment engine)
    ├── cotizador-refaccionaria.html # AutoQuote Pro (Fast-counter wholesale quoter)
    └── restaurante-pedidos.html  # FoodOrder Pro (Digital QR menu & order builder)
```

---

## 🚀 Deployment & Local Development

### Option A: 1-Click Vercel Deployment (Recommended)
This repository is optimized for continuous deployment with Vercel:
1. Import `Xaol-Studio/xaol-website` into your Vercel dashboard.
2. Select default framework preset: **Other**.
3. Deploy. The configuration in `vercel.json` handles all routing and header rules automatically.

### Option B: Local Development
No package manager or build step is required:
```bash
# Clone the repository
git clone https://github.com/Xaol-Studio/xaol-website.git
cd xaol-website

# Serve with any static server (Python, Caddy, Nginx, or VS Code Live Server)
python3 -m http.server 8080

# Open http://localhost:8080 in your browser
```

### Option C: Production Nginx Configuration
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/xaol-website;
    index index.html;

    location / {
        try_files $uri $uri.html $uri/ =404;
    }

    location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg)$ {
        expires 30d;
        add_header Cache-Control "public, no-transform";
    }
}
```

---

## 📞 Studio Contact & Commercial Inquiries

- **Lead Engineer:** Ian Miguel Delgado Huitrón ([@iamhuitron](https://github.com/iamhuitron))
- **Organization:** [github.com/Xaol-Studio](https://github.com/Xaol-Studio)
- **Direct WhatsApp:** [+52 593 126 9253](https://wa.me/525931269253)
- **Official Email:** [xaolstudio@gmail.com](mailto:xaolstudio@gmail.com)
- **Location:** Mexico City / State of Mexico (Cuautitlán Izcalli, Naucalpan, CDMX Norte)
