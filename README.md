# LifeLore
mongodb moongoose next-autj bcrypt nextjs reactjs tailwindcss

usecase form tut git readme use case?
main dir wwhne ?

kintsugi@machine:~/Documents/BaliGit/lifelore/lifelore$ npx create-next-app@latest ./


kintsugi@machine:~/Documents/BaliGit/lifelore/lifelore$ npm install bcrypt mongodb mongoose next-auth
bcrypt lib hash passwords
mongodb db
mongoose
next-auth



del app
app
components
models mongodb mongoose

del public
public
styles
utils
.env for secure keys


assets gist git eg 

tailwind

fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary-orange': '#FF5722',
      }

globals css

style 
dive func
fonts
tailwind stuff

page.jsx
layout.jsx

to change metadata?
npm run dev
Here's a detailed README for your Next.js application that incorporates all the features and tech stack you mentioned:


jsconfig.json

page.jsx  className="w-full flex-center flex-col" this is tailwind https://tailwindcss.com/docs/text-decoration-color

components made with rafce

Next lib for linking ;0
"use client"; // Add this directive to indicate that this is a client component

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import React from 'react';


To roll back to the specific commit 4e527db and make it final on the main branch, follow these steps carefully:

Step-by-Step Instructions
Open your terminal and navigate to your repository's root directory.

Reset your main branch to the specific commit using the --hard option. This will discard all changes made after the commit 4e527db:

bash
Copy code
git reset --hard 4e527db
Force push the changes to the remote main branch to ensure that the remote repository reflects this reset. This will overwrite the history on the main branch on the remote repository:

bash
Copy code
git push origin main --force

nav

const isUserLoggedIn = true; is a good technique
later make auth


route.js auth making api endpoints backend 




















---

# LifeLore

Lifelore is a platform where users can share life values, lessons, and advice across various fields. Built with modern web technologies, Lifelore aims to create a community-driven repository of knowledge and experiences.

LifeLore is a Next.js application designed to allow users to share and discover life lessons. The platform features a modern design with glassmorphism trends and provides a comprehensive CRUD system for managing Advices. It uses MongoDB for data storage and NextAuth for authentication.

## ⚙️ Tech Stack

- **Next.js**: A React framework for server-side rendering and static site generation.
- **MongoDB**: A NoSQL database for storing user data and Advices.
- **NextAuth**: Authentication library for securing user login with Google.
- **TailwindCSS**: A utility-first CSS framework for styling the application.

## 🔋 Features

- **Modern Design with Glassmorphism Trend Style**: A sleek and contemporary design using the glassmorphism trend for an appealing user interface.
- **Discover and Share AI Advices**: Users can explore Advices shared by the community and create their own.
- **Edit and Delete Created Advices**: Users have the ability to edit or delete their Advices at any time.
- **Profile Page**: Each user has a dedicated profile page showcasing their created Advices.
- **View Other People's Profiles**: Users can view profiles of other creators to explore their Advices.
- **Copy to Clipboard**: A "Copy to Clipboard" feature for users to easily copy Advices.
- **Search Advices by Specific Tag**: Search functionality to find Advices based on specific tags.
- **Google Authentication using NextAuth**: Secure Google authentication for a streamlined login experience.
- **Responsive Website**: Fully responsive design to ensure optimal viewing on desktops, tablets, and smartphones.

## 🤸 Quick Start

Follow these steps to set up the project locally on your machine:

### Prerequisites

Ensure you have the following installed:

- **Git**
- **Node.js**
- **npm (Node Package Manager)**

### Cloning the Repository

Clone the repository using Git:

```bash
git clone https://github.com/yourusername/lifelore.git
cd lifelore
```

### Installation

Install the project dependencies:

```bash
npm install
```

### Set Up Environment Variables

Create a new `.env` file in the root of your project and add the following content:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_URL_INTERNAL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret
GOOGLE_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
MONGODB_URI=your-mongodb-uri
```

Replace the placeholder values with your actual credentials:

- **NEXTAUTH_SECRET**: Generate a secret for NextAuth.
- **GOOGLE_ID** and **GOOGLE_CLIENT_SECRET**: Obtain these from Google Cloud Console.
- **MONGODB_URI**: Your MongoDB connection string.

### Running the Project

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## Code Architecture

- **Frontend:** Built using Next.js with a focus on reusable components and modern styling using TailwindCSS.
- **Backend:** Server-side logic and API handling with Next.js API routes.
- **Database:** MongoDB for data persistence, managed with Mongoose for object modeling.
- **Authentication:** NextAuth for secure user authentication with Google.

## Contributing

We welcome contributions to LifeLore! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a Pull Request.

Please follow the [code of conduct](CODE_OF_CONDUCT.md) and adhere to the [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE). See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or inquiries, you can reach out to:

- **GitHub:** [kintsugi-programmer](https://github.com/kintsugi-programmer)

---

Feel free to adapt the content to better fit your project specifics!

