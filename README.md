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

## 🔗 Related Links

- Backend Repository: [peak-post-strapi](https://github.com/daffaalex22/peak-post-strapi)
