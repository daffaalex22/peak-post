# Peak Post 📝

A modern blogging platform built with Next.js and Strapi, featuring multi-tenancy support.

## 🌐 Live Demos

- Main site: [peak-post.vercel.app](https://peak-post.vercel.app)
- Sunda version: [peak-post-sunda.vercel.app](https://peak-post-sunda.vercel.app)

## ✨ Key Features
- 🔐 Google OAuth2 authentication
- 🏢 Multi-tenancy support with different content versions
- 💅 Modern and responsive design
- 🔍 SEO-friendly with Next.js
- 🔒 Secure API integration with Strapi backend
- 📝 Type-safe GraphQL operations with codegen

## 🛠️ Tech Stack

- **Frontend Framework**: Next.js (TypeScript)
- **Authentication**: NextAuth.js
- **OAuth Provider**: Google
- **Backend**: Strapi ([Backend Repository](https://github.com/daffaalex22/peak-post-strapi))
- **Deployment**: Vercel

## 📦 Notable Packages

- `next-auth`: Authentication system for Next.js
- `next`: React framework for production
- `typescript`: Type safety for JavaScript
- `react`: UI library
- `tailwindcss`: Utility-first CSS framework
- `@graphql-codegen/cli`: Generates TypeScript types from GraphQL schema
- `@graphql-codegen/typescript`: GraphQL TypeScript code generation
- `@graphql-codegen/typescript-operations`: Generates TypeScript types for GraphQL operations

## 🏗️ Architecture

The project implements a multi-tenant architecture where:
- The main site serves the default content
- The Sunda version serves localized content
- Both versions connect to the same Strapi backend with different content structures

## 🚀 How to Start This Project Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/peak-post.git
   cd peak-post
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Fill in the following variables in `.env.local`:
   - `NEXT_PUBLIC_STRAPI_URL`
   - `NEXT_GOOGLE_OAUTH2_CLIENT_ID`
   - `NEXT_GOOGLE_OAUTH2_CLIENT_SECRET`
   - `NEXTAUTH_SECRET`
   - `NEXTAUTH_URL`

4. **Generate GraphQL types**
   ```bash
   yarn codegen
   ```

5. **Start the development server** 🔥
   ```bash
   yarn dev
   ```

   The app should now be running at [http://localhost:3000](http://localhost:3000)

> 📝 Note: Make sure you also have the [backend server](https://github.com/daffaalex22/peak-post-strapi) running locally.

## 🔗 Related Links

- Backend Repository: [peak-post-strapi](https://github.com/daffaalex22/peak-post-strapi)
