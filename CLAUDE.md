# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is "Chulis" - a personal Angular 17 application that appears to be a romantic anniversary/relationship tracker web app. The application is built with Angular 17 in standalone component mode, using Tailwind CSS for styling and includes a Swiper component for image galleries.

## Key Features

- **Anniversary Tracking**: Calculates days since a relationship started (June 12, 2024)
- **Monthly Anniversary Detection**: Shows special "monthverse" message on the 12th of each month with confetti animation
- **Photo Gallery**: Swiper-based image carousel with personal photos and videos
- **Interactive Letter**: Modal dialog containing a personal letter
- **Audio Player**: Embedded audio file support
- **Custom Elements**: Uses Lord Icon web components for animations

## Common Development Commands

### Development Server
```bash
ng serve
# or
npm start
```
The app runs on `http://localhost:4200/` with auto-reload on file changes.

### Build
```bash
ng build                    # Production build
ng build --configuration development  # Development build
npm run build              # Production build via npm
npm run watch              # Development build with watch mode
```

### Testing
```bash
ng test                    # Run unit tests via Karma
npm test                   # Run unit tests via npm
```

### Code Generation
```bash
ng generate component component-name
ng generate directive|pipe|service|class|guard|interface|enum|module
```

### Format Code
```bash
npx prettier --write .     # Format all files (Prettier is configured)
```

## Architecture

### Component Structure
- **Standalone Components**: Uses Angular 17's standalone component architecture
- **Single Page Application**: All functionality contained in the main `AppComponent`
- **Custom Elements Schema**: Configured to support web components like Lord Icon and Swiper

### Key Files
- `src/app/app.component.ts` - Main application logic with anniversary calculations
- `src/app/app.component.html` - Template with image gallery, letter modal, and UI elements
- `src/app/app.component.css` - Component-specific styles
- `src/styles.css` - Global styles and Tailwind imports

### Technology Stack
- **Angular 17**: Main framework with standalone components
- **Tailwind CSS**: Utility-first CSS framework
- **Swiper**: Touch slider/carousel library
- **Lord Icon**: Animated icon web components
- **TypeScript**: Strict mode enabled with comprehensive compiler options

### Asset Management
- Images and videos stored in `src/assets/`
- Audio files supported (MP3 format)
- Favicon and static assets configured in `angular.json`

### Configuration Files
- `angular.json` - Angular CLI configuration with build targets
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration with strict mode
- `package.json` - Dependencies and npm scripts

## Development Notes

### Date Calculations
The app calculates relationship milestones based on a hardcoded start date of June 12, 2024. The `calculateDaysSince()` and `calculateIsMonthverse()` methods handle this logic.

### Confetti Animation
Special confetti effect triggers on the 12th of each month using an inline script that loads confetti library dynamically.

### Modal Dialog
Uses native HTML `<dialog>` element for the letter modal, controlled via `showModal()` and `close()` methods.

### Custom Elements
Configured to use web components without Angular wrapping, enabling Lord Icon animations and Swiper carousel functionality.