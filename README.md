![PROMPTHUB Logo](/public/Assets/header.jpg)

# 🌌 PROMPTHUB

## 📋 Table of Contents

- [✨ Introduction](#-introduction)
- [🚀 Features](#-features)
- [🛠 Tech Stack](#-tech-stack)
- [📥 Installation](#-installation)
- [📖 Usage](#-usage)
- [📸 Screenshots](#-screenshots)
- [⚙️ Configuration](#️-configuration)
- [📜 License](#-license)

## ✨ Introduction

**PROMPTHUB** is a dynamic marketplace for AI-generated image prompts, empowering users to buy and sell prompts crafted for AI art. Creators can monetize their unique prompts, while buyers discover top-tier prompts that fuel their creative endeavors. 🌟

## 🚀 Features

- 🏪 **Prompt Marketplace**: Buy and sell unique AI prompts with ease.
- 🔒 **Secure Authentication**: Clerk-powered secure user login.
- 🌐 **Media Hosting**: Prompt images managed with [Cloudinary](https://cloudinary.com) for fast, reliable delivery.
- 📱 **Responsive Design**: A seamless experience across all devices.
- 💸 **Secure Payments**: Process transactions with confidence using [Stripe](https://stripe.com).
- 🖼 **User Profiles**: Showcase your prompts and track purchase history.
- 🔍 **Search & Filter**: Easily locate prompts by style, tags, and popularity.

## 🛠 Tech Stack

PROMPTHUB leverages a modern and robust tech stack:

- **Frontend**: [Next.js](https://nextjs.org/), [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for responsive, fast design
- **Authentication**: [Clerk](https://clerk.dev)
- **Payments**: [Stripe](https://stripe.com) for secure transaction processing
- **Media Storage**: [Cloudinary](https://cloudinary.com) for image hosting and delivery
- **State Management**: Context API and custom hooks as needed

## 📥 Installation

To set up PROMPTHUB locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sithijakavee/PromptHub.git
   cd prompthub
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**: Add your Clerk, Stripe, and Cloudinary credentials in `.env.local`.

4. **Run the development server**:
   ```bash
   npm run dev
   ```
   Access it at `http://localhost:3000`.

## 📖 Usage

Once installed, you can:

- 🔎 **Explore Prompts**: Browse prompt packs by popularity or style.
- 👤 **Create a Profile**: Register and authenticate through Clerk.
- 📤 **Upload Prompts**: Upload prompt images managed with Cloudinary.
- 💳 **Purchase and Sell Prompts**: Buy prompts using Stripe-powered payments.

## 📸 Snapshots

Get a preview of PROMPTHUB in action:


   ![Homepage Screenshot](/public/Assets/git2.jpg) 
   ![Prompt Detail Screenshot](/public/Assets/git3.jpg) -->
   ![Profile Screenshot](/public/Assets/git2.jpg) 

## ⚙️ Configuration

Set up your environment variables in `.env.local`:

```plaintext
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=clerk_publishable_key

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

DATABASE_URL=your_database_uri

CLOUD_NAME=cloudinary_cloud_name
CLOUD_API_KEY=cloudinary_api_key
CLOUD_API_SECRET=cloudinary_api_secret

STRIPE_SECRET_KEY=
STRIPE_PUBLISHABLE_KEY=
```

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.

---

