# JMG Custom Metal Shop Website

A modern, professional website for JMG Custom Metal Shop - South Florida's premier metal fabrication company.

## Features

- **Multi-page Website**: Home, About, Services, Projects, FAQ, Contact, and Social pages
- **Admin Dashboard**: Secure admin panel for managing leads and content
- **Lead Management**: Contact form submissions tracked in Supabase
- **Email Notifications**: Automatic email alerts for new contact form submissions (optional)
- **Responsive Design**: Mobile-first design using Tailwind CSS
- **Modern UI**: Built with shadcn/ui components
- **Authentication**: Secure admin authentication with Supabase Auth

## Tech Stack

- **Frontend Framework**: React 18.3+ with TypeScript
- **Build Tool**: Vite 7.1+
- **Styling**: Tailwind CSS 3.4+
- **UI Components**: shadcn/ui with Radix UI primitives
- **Backend**: Supabase (Database + Authentication)
- **Routing**: React Router v6
- **Form Validation**: Zod schema validation
- **Icons**: Lucide React

## Prerequisites

- Node.js 18+ or 20+ (LTS version recommended)
- npm 9+ or pnpm 8+ or yarn 1.22+
- A Supabase account and project

## Installation

### 1. Clone the repository

```bash
git clone <YOUR_GIT_URL>
cd jmg-craft-forge-main
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment Setup

Copy the example environment file:

```bash
cp .env.example .env
```

Edit `.env` and add your Supabase credentials:

```env
VITE_SUPABASE_PROJECT_ID=your_project_id_here
VITE_SUPABASE_PUBLISHABLE_KEY=your_anon_public_key_here
VITE_SUPABASE_URL=https://your_project_id.supabase.co
```

**IMPORTANT**: Never commit your `.env` file to version control. It's already in `.gitignore`.

### 4. Database Setup

Run the migrations in your Supabase project:

1. Go to your Supabase project dashboard
2. Navigate to SQL Editor
3. Run the migration files from `supabase/migrations/` in order

### 5. Start Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Email Notifications

The contact form can send automatic email notifications when someone submits a lead. This is **optional** but highly recommended.

### Quick Setup (5 minutes)

1. **Choose an email service** (Resend recommended)
2. **Get API key** from the service
3. **Deploy Edge Function** to Supabase
4. **Run database migration**

**Full instructions**: See [EMAIL-NOTIFICATIONS-SETUP.md](EMAIL-NOTIFICATIONS-SETUP.md)

### What Gets Sent

When a customer submits the contact form:
- ✅ Email sent to **jsuarezlig@gmail.com** with all submission details
- ✅ Lead saved to admin dashboard automatically
- ✅ Customer sees success message

### Recommended Services

- **Resend** (Easiest) - 3,000 free emails/month
- **SendGrid** - 100 free emails/day
- **Zapier** - No code solution
- See full comparison in setup guide

## Security Features

### Implemented Security Measures

1. **Environment Variables**: All sensitive data stored in `.env` (not committed)
2. **Input Validation**: Zod schemas validate all form inputs
3. **SQL Injection Protection**: Supabase client uses parameterized queries
4. **XSS Protection**: React escapes output by default
5. **Authentication**: Supabase Auth with PKCE flow
6. **Authorization**: Role-based access control (RBAC) for admin dashboard
7. **HTTPS Only**: All API calls use HTTPS
8. **Strict TypeScript**: Full type safety enabled
9. **Dependency Security**: Regular updates and vulnerability scanning

### Security Best Practices

- All dependencies are up-to-date (as of January 2025)
- TypeScript strict mode enabled
- No hardcoded secrets or credentials
- CSRF protection through Supabase
- Session management with auto-refresh tokens

## Cross-Platform Compatibility

This application works on:

- **Operating Systems**: Windows, macOS, Linux
- **Browsers**: Chrome, Firefox, Safari, Edge (latest 2 versions)
- **Mobile**: iOS Safari, Android Chrome
- **Node.js**: v18.x, v20.x, v22.x

### Path Compatibility

- Uses `path.resolve()` for cross-platform path handling
- No hardcoded path separators
- Vite handles file paths automatically

## Deployment

### Option 1: Lovable

1. Open [Lovable](https://lovable.dev/projects/929ce4ef-2b3e-4b57-ba22-f23bd3eb6f92)
2. Click on Share → Publish

### Option 2: Manual Deployment (Vercel, Netlify, etc.)

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to your hosting provider

3. Set environment variables in your hosting provider's dashboard

### Option 3: Docker

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 8080
CMD ["npm", "run", "preview"]
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_SUPABASE_URL` | Your Supabase project URL | Yes |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Your Supabase anon/public key | Yes |
| `VITE_SUPABASE_PROJECT_ID` | Your Supabase project ID | Yes |

## Project Structure

```
jmg-craft-forge-main/
├── src/
│   ├── components/        # Reusable components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── Footer.tsx
│   │   ├── Navigation.tsx
│   │   └── ...
│   ├── pages/            # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Contact.tsx
│   │   ├── AdminDashboard.tsx
│   │   └── ...
│   ├── integrations/     # Third-party integrations
│   │   └── supabase/
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   └── main.tsx          # Application entry point
├── supabase/
│   └── migrations/       # Database migrations
├── public/               # Static assets
├── .env.example          # Example environment variables
└── package.json
```

## Browser Support

- Chrome/Edge: Last 2 versions
- Firefox: Last 2 versions
- Safari: Last 2 versions
- iOS Safari: iOS 13+
- Android Chrome: Android 8+

## Contributing

1. Create a feature branch
2. Make your changes
3. Ensure all tests pass
4. Submit a pull request

## Contact

- **Phone**: (305) 218-5311
- **Email**: jsuarezlig@gmail.com
- **Address**: 7318 N.W. 79th Ter., Miami, FL 33166

## License

Copyright © 2025 JMG Custom Metal Shop. All rights reserved.

## Support

For issues or questions, please contact the development team or open an issue in the repository.

---

**Building the Future | Serving Today.**
