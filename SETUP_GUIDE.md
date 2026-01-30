# Beacon Charity Website - Complete Setup Guide

## Overview
This is a full-stack charity website with an admin dashboard for managing all content. The system uses BetterAuth for authentication, Prisma + PostgreSQL for database operations, and React Hook Form with Resend for form submissions.

## 🚀 Quick Start

### 1. Environment Variables Setup

Create a `.env.local` file in your project root with:

```env
# Database (Supabase PostgreSQL)
DATABASE_URL="postgresql://user:password@host:port/database"

# BetterAuth
BETTER_AUTH_SECRET="your-secret-key"
BETTER_AUTH_URL="http://localhost:3000"

# Email (Resend)
RESEND_API_KEY="your-resend-api-key"

# Google OAuth (Optional)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

### 2. Install Dependencies

```bash
npm install prisma @prisma/client better-auth react-hook-form resend lucide-react
```

### 3. Database Setup

```bash
# Generate Prisma client
npx prisma generate

# Create migration
npx prisma migrate dev --name init

# Push schema to database
npx prisma db push

# View database in Prisma Studio
npx prisma studio
```

### 4. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see your site.

---

## 📁 Project Structure

```
/app
  /actions           # Server actions for CRUD operations
    - carousel.ts
    - team.ts
    - events.ts
    - blog.ts
    - contact.ts
    - volunteer.ts
  /api/auth         # Authentication endpoints
  /dashboard        # Admin dashboard
    /carousel       # Manage carousel images
    /team          # Manage team members
    /events        # Manage events
    /blog          # Manage blog posts
    /messages      # View contact submissions
    /settings      # Site settings
  /login            # Login page
  /donate           # Donation page
  /volunteer        # Volunteer signup
  /contact          # Contact page
  /public           # Static assets
/components
  /dashboard        # Dashboard components
    - sidebar.tsx
  /ui              # UI components
/prisma
  - schema.prisma   # Database schema
/lib
  - prisma.ts       # Prisma client
  - auth.ts         # BetterAuth configuration
```

---

## 🔑 Key Features

### Authentication (BetterAuth)
- Email/password authentication
- Session management
- Protected routes via middleware

### Database (Prisma + PostgreSQL)
Full CRUD operations for:
- Carousel Images
- Team Members
- Events
- Blog Posts
- Contact Messages
- Volunteer Signups
- Contact Information

### Admin Dashboard
- Responsive sidebar navigation
- Real-time form management
- Status tracking for submissions
- Settings management

### Forms
- React Hook Form for validation
- Resend email integration
- Contact form submission tracking
- Volunteer signup management

---

## 🛠️ Database Schema

### Key Models

**User** - Authentication (BetterAuth managed)
```prisma
- id: String (unique)
- email: String (unique)
- name: String
- image: String
```

**CarouselImage** - Hero section images
```prisma
- id, imageUrl, title, subtitle, order, active
```

**TeamMember** - Team profiles
```prisma
- id, name, role, bio, imageUrl, order, active
```

**Event** - Charity events
```prisma
- id, title, description, date, time, location, imageUrl, attendees, category, active
```

**BlogPost** - Blog articles
```prisma
- id, title, content, excerpt, slug, imageUrl, category, published, readTime
```

**ContactInfo** - Site-wide contact details
```prisma
- id, email, phone, address
```

**ContactSubmission** - Contact form submissions
```prisma
- id, name, email, subject, message, status, createdAt
```

**VolunteerSignup** - Volunteer applications
```prisma
- id, name, email, phone, interests, commitmentLevel, skills, message, status
```

---

## 📝 Server Actions Guide

All server actions are in `/app/actions/` and follow this pattern:

```typescript
// Example: Creating a carousel image
import { createCarouselImage } from '@/app/actions/carousel'

const result = await createCarouselImage({
  imageUrl: '/carousel-1.jpg',
  title: 'Education',
  subtitle: 'Empowering minds',
  userId: 'user-id'
})

if (result.success) {
  console.log('Created:', result.data)
} else {
  console.error('Error:', result.error)
}
```

### Available Actions

**Carousel:**
- `getCarouselImages()` - Fetch all active images
- `createCarouselImage(data)` - Add new image
- `updateCarouselImage(id, data)` - Update image
- `deleteCarouselImage(id)` - Remove image

**Team:**
- `getTeamMembers()` - Fetch team
- `createTeamMember(data)` - Add member
- `updateTeamMember(id, data)` - Update member
- `deleteTeamMember(id)` - Remove member

**Events:**
- `getEvents(category?)` - Fetch events
- `createEvent(data)` - Create event
- `updateEvent(id, data)` - Update event
- `deleteEvent(id)` - Remove event

**Blog:**
- `getBlogPosts(published)` - Fetch posts
- `getBlogPostBySlug(slug)` - Get single post
- `createBlogPost(data)` - Create post
- `updateBlogPost(id, data)` - Update post
- `deleteBlogPost(id)` - Remove post

**Contact:**
- `getContactInfo(userId)` - Fetch contact details
- `updateContactInfo(userId, data)` - Update contact
- `submitContactForm(data)` - Handle form submission
- `getContactSubmissions()` - Fetch all submissions
- `updateContactSubmissionStatus(id, status)` - Update submission status

**Volunteer:**
- `submitVolunteerSignup(data)` - Handle volunteer form
- `getVolunteerSignups(status?)` - Fetch signups
- `updateVolunteerSignupStatus(id, status)` - Update status
- `deleteVolunteerSignup(id)` - Remove signup

---

## 🔐 Authentication Flow

### Login
1. User visits `/login`
2. Submits email/password
3. System authenticates via BetterAuth
4. Session created
5. Redirects to `/dashboard`

### Protected Routes
Add middleware to protect dashboard:

```typescript
// middleware.ts
import { auth } from '@/lib/auth'

export async function middleware(request: NextRequest) {
  const session = await auth.api.getSession({ headers: request.headers })
  
  if (!session && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

export const config = {
  matcher: ['/dashboard/:path*']
}
```

---

## 📧 Email Integration (Resend)

Setup in your form handlers:

```typescript
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// Send confirmation email
await resend.emails.send({
  from: 'noreply@beaconcharity.org',
  to: 'user@example.com',
  subject: 'Thank you for contacting us',
  html: '<p>We received your message</p>'
})
```

---

## 🚀 Deployment

### To Vercel

1. Push code to GitHub
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy!

```bash
git push origin main
```

### Environment Variables to Set in Vercel:
- DATABASE_URL
- BETTER_AUTH_SECRET
- RESEND_API_KEY
- GOOGLE_CLIENT_ID (optional)
- GOOGLE_CLIENT_SECRET (optional)

---

## 🎯 Next Steps

1. **Connect Database:**
   - Set up Supabase PostgreSQL
   - Update DATABASE_URL

2. **Configure Authentication:**
   - Generate BETTER_AUTH_SECRET
   - Set up Google OAuth (optional)

3. **Set Up Email:**
   - Add RESEND_API_KEY

4. **Customize:**
   - Update hero carousel images
   - Add team members
   - Create events
   - Write blog posts
   - Configure contact info

5. **Deploy:**
   - Push to GitHub
   - Deploy to Vercel

---

## 📚 Useful Resources

- [Prisma Docs](https://www.prisma.io/docs/)
- [BetterAuth Docs](https://www.better-auth.com)
- [React Hook Form](https://react-hook-form.com/)
- [Resend Docs](https://resend.com/docs)
- [Next.js App Router](https://nextjs.org/docs/app)

---

## ⚠️ Important Notes

1. **NEVER commit `.env.local`** - Add to `.gitignore`
2. **Database backups** - Set up automatic backups in Supabase
3. **Email testing** - Use Resend's test email feature
4. **Session security** - Keep BETTER_AUTH_SECRET secure
5. **API rate limits** - Monitor Resend usage

---

## 🤝 Support

For issues or questions:
1. Check the documentation
2. Review the code comments
3. Check Prisma/BetterAuth docs
4. Review error logs

---

**Last Updated:** January 2025
**Version:** 1.0
