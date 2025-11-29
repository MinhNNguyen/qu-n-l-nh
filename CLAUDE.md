# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Vietnamese real estate property management dashboard built with React, TypeScript, and Vite. The application provides property owners with a mobile-first dashboard to view their real estate portfolio, upcoming meetings, unit statuses, and vacancy alerts. The app supports multiple owners via URL parameters.

## Key Commands

- `npm run dev` - Start development server on port 8080
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Architecture

### Routing Structure
- `/` - Landing page (Index component)
- `/dashboard?owner={ownerId}` - Owner-specific dashboard with personalized data
- `/*` - 404 Not Found page

### Data Layer
- Mock data system in `src/data/mockData.ts` with TypeScript interfaces
- Owner data accessed via URL parameter `?owner={ownerId}`
- Default owner fallback: `owner001`

### Component Architecture
- **Pages**: High-level route components in `src/pages/`
- **Layout**: Reusable layout components in `src/components/layout/`
- **Dashboard**: Feature-specific dashboard components in `src/components/dashboard/`
- **UI**: shadcn/ui components in `src/components/ui/`

### Mobile-First Design
- Max width: 430px (mobile container)
- Fixed header with mobile navigation
- Touch-optimized interactions
- Vietnamese language interface

### Tech Stack
- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Routing**: React Router v6
- **State Management**: React Query (TanStack Query)
- **UI Library**: shadcn/ui + Radix UI primitives
- **Styling**: Tailwind CSS with custom status colors
- **Icons**: Lucide React
- **Development**: ESLint + SWC

### Key Data Types
- `OwnerData`: Complete owner profile with units, meetings, alerts
- `Unit`: Property unit with status (setup-marketing | on-sale | on-deposit)
- `Meeting`: Scheduled property viewings
- `VacancyAlert`: Upcoming move-out notifications

### Styling System
- Custom status colors for property states (vacant, on-sale, upcoming, rented)
- Custom animations (fade-in, slide-in-right, scale-in)
- Vietnamese font: Be Vietnam Pro
- HSL color variables for theming consistency

### Development Notes
- Uses Lovable platform integration (lovable-tagger in dev mode)
- Path alias `@/` maps to `src/` directory
- Development server configured for IPv6 (::) on port 8080