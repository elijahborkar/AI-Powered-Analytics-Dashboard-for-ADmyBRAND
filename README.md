AI-Powered Analytics Dashboard – ADmyBRAND Insights
A modern, responsive analytics dashboard built with Next.js, Recharts, and Framer Motion, designed for ADmyBRAND Insights – a fictional analytics platform for digital marketing agencies.

Features
  Interactive Overview – Key metrics (Revenue, Users, Conversions, Growth%)
  Dynamic Charts – Line, Bar, and Pie charts powered by Recharts
  Data Table – Campaign data with sorting and clean layout
  Dark/Light Mode – Seamless theme toggle using next-themes
  Smooth Animations – Framer Motion micro-interactions & transitions
  Responsive Design – Optimized for desktop, tablet, and mobile

Tech Stack
  Framework: Next.js (App Router)
  UI Components: shadcn/ui
  Charts: Recharts
  Animations: Framer Motion
  Theme Management: next-themes
  Styling: Tailwind CSS

Getting Started
  1.Clone this repository:
    git clone https://github.com/yourusername/admybrand-dashboard.git
    cd admybrand-dashboard
  2.Install dependencies:
    npm install
  3.Run the development server:
    npm run dev
    Open http://localhost:3000 to view it in your browser.

Folder Structure

/app
  ├── layout.tsx
  ├── page.tsx
  ├── providers.tsx
/components
  └── ui
      ├── button.tsx
      ├── card.tsx
Future Enhancements
  Real-time data updates via WebSockets
  Export data as PDF/CSV
  Advanced filtering & date range selection
  Skeleton loaders for improved UX
