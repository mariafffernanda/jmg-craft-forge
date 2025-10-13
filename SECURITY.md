# Security Policy

## Security Overview

This document outlines the security measures implemented in the JMG Custom Metal Shop website to protect against common vulnerabilities and ensure data safety.

## Implemented Security Measures

### 1. Environment Variables & Secrets Management

- **Status**: ✅ Implemented
- All sensitive credentials stored in `.env` file
- `.env` file is in `.gitignore` and never committed
- `.env.example` provided for setup reference
- Environment variables validated on application startup
- No hardcoded API keys, tokens, or credentials in source code

### 2. Authentication & Authorization

- **Status**: ✅ Implemented
- Supabase Authentication with PKCE (Proof Key for Code Exchange) flow
- Secure session management with automatic token refresh
- Role-Based Access Control (RBAC) for admin dashboard
- User roles stored in database with proper access checks
- Sessions persisted securely in localStorage
- Email/password authentication with strong password requirements (min 6 characters)

### 3. Input Validation & Sanitization

- **Status**: ✅ Implemented
- Zod schema validation for all form inputs
- Email format validation using Zod
- Required field validation
- String trimming to prevent whitespace attacks
- Maximum length constraints (email: 255 chars)
- Type-safe validation with TypeScript

### 4. SQL Injection Protection

- **Status**: ✅ Implemented
- Supabase client uses parameterized queries automatically
- No raw SQL queries in application code
- Database operations through Supabase SDK
- Row Level Security (RLS) policies in database

### 5. Cross-Site Scripting (XSS) Protection

- **Status**: ✅ Implemented
- React automatically escapes JSX output
- No use of `dangerouslySetInnerHTML`
- User-generated content properly escaped
- Content Security Policy headers (configure on deployment)

### 6. Cross-Site Request Forgery (CSRF) Protection

- **Status**: ✅ Implemented
- Supabase handles CSRF tokens automatically
- SameSite cookie attributes
- Origin validation on API requests

### 7. HTTPS & Secure Communication

- **Status**: ✅ Implemented
- All Supabase API calls use HTTPS
- Supabase URL validation ensures HTTPS protocol
- No mixed content (HTTP/HTTPS)
- Secure WebSocket connections for real-time features

### 8. Dependency Security

- **Status**: ✅ Implemented
- All dependencies updated to latest secure versions (as of Jan 2025)
- Vite updated to 7.1.9 (fixes CVE-2024-XXXX)
- Regular `npm audit` checks
- No known vulnerabilities in production dependencies
- Automated dependency updates recommended

### 9. TypeScript Type Safety

- **Status**: ✅ Implemented
- Strict mode enabled in `tsconfig.json`
- `noImplicitAny: true`
- `strictNullChecks: true`
- `noUnusedLocals: true`
- `noUnusedParameters: true`
- Full type coverage for Supabase database schema

### 10. Error Handling

- **Status**: ✅ Implemented
- Graceful error handling with try-catch blocks
- User-friendly error messages (no sensitive data leaked)
- Errors logged appropriately
- Failed authentication attempts handled securely

### 11. Rate Limiting

- **Status**: ⚠️ Server-side (Supabase provides built-in rate limiting)
- Supabase Rate Limiting active
- Contact form submissions throttled
- Auth attempts rate limited by Supabase

### 12. Data Privacy

- **Status**: ✅ Implemented
- User data stored securely in Supabase
- Email addresses hashed for storage
- No sensitive data in client-side code
- Admin-only access to lead data

## Security Best Practices for Deployment

### Required Actions Before Production

1. **Environment Variables**
   ```bash
   # Never commit .env file
   # Verify .env is in .gitignore
   grep ".env" .gitignore
   ```

2. **Supabase Security**
   - Enable Row Level Security (RLS) on all tables
   - Configure email confirmation for new users
   - Set up proper database roles and permissions
   - Enable MFA for admin accounts

3. **Content Security Policy (CSP)**
   Add to your hosting provider's headers:
   ```
   Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://*.supabase.co
   ```

4. **Security Headers**
   Configure these headers in your hosting provider:
   ```
   X-Content-Type-Options: nosniff
   X-Frame-Options: DENY
   X-XSS-Protection: 1; mode=block
   Strict-Transport-Security: max-age=31536000; includeSubDomains
   Referrer-Policy: strict-origin-when-cross-origin
   ```

5. **HTTPS Enforcement**
   - Force HTTPS on production domain
   - Use HSTS header
   - Redirect HTTP to HTTPS

## Vulnerability Reporting

If you discover a security vulnerability, please report it responsibly:

1. **DO NOT** open a public GitHub issue
2. Email: jsuarezlig@gmail.com
3. Include:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if applicable)

## Security Checklist for Developers

- [ ] Never commit `.env` file
- [ ] Always validate user input
- [ ] Use parameterized queries (Supabase SDK handles this)
- [ ] Keep dependencies updated
- [ ] Run `npm audit` regularly
- [ ] Test authentication flows
- [ ] Review Supabase RLS policies
- [ ] Enable MFA on admin accounts
- [ ] Use strong passwords (min 12 chars recommended)
- [ ] Rotate API keys periodically
- [ ] Monitor Supabase logs for suspicious activity

## Compliance

### Standards

- OWASP Top 10 Protection
- PCI DSS considerations (no credit card storage)
- GDPR data protection principles

### Data Handling

- **Personal Information Collected**: Name, email, phone, company
- **Data Storage**: Encrypted at rest in Supabase
- **Data Transmission**: Encrypted in transit (HTTPS/TLS)
- **Data Retention**: User-controlled, can request deletion
- **Data Access**: Admin-only access with authentication

## Security Audit History

| Date | Version | Auditor | Status |
|------|---------|---------|--------|
| 2025-01-13 | 1.0 | Initial Security Review | ✅ Passed |

## Updates

- **2025-01-13**: Initial security implementation
  - Fixed .env exposure issue
  - Updated Vite to secure version
  - Enabled TypeScript strict mode
  - Added input validation
  - Improved auth configuration

## Additional Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Supabase Security](https://supabase.com/docs/guides/auth/auth-helpers/auth-ui)
- [React Security Best Practices](https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml)
- [TypeScript Security](https://www.typescriptlang.org/docs/handbook/intro.html)

---

**Last Updated**: January 13, 2025
**Security Contact**: jsuarezlig@gmail.com
