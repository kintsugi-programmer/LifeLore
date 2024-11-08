

# LifeLore - Where Wisdom Meets Community
<img src="/public/assets/images/banner.png" alt="LifeLore - Where Wisdom Meets Community" style="width: 100%;" />

Welcome to [LifeLore](https://lifelore.vercel.app/), a social media network founded by [Kintsugi-programmer](https://github.com/kintsugi-programmer) to foster a community where people can read and share life lessons learned through hard experiences. Whether you're looking for insight or want to share your own wisdom, LifeLore offers a place to connect with others who believe in growing together through shared knowledge and understanding.

## Overview

LifeLore is a Next.js-based application focused on:
- **Discovering and Sharing AI Prompts**: Users can browse AI prompts shared by the community and create their own.
- **Modern Design with Glassmorphism Style**: A sleek, modern design that follows the glassmorphism trend.
- **Comprehensive CRUD System**: Users can create, edit, delete, and manage prompts.
- **Profile Pages**: Users have dedicated profiles showcasing their contributions.
- **Search and Tags**: Easily searchable prompts using tags or usernames.
- **Google Authentication**: Secure login with NextAuth for a streamlined experience.

Built with guidance from [Adrian Hajdin](https://github.com/adrianhajdin), LifeLore offers a visually appealing, interactive platform with all essential social networking features.

## Key Features

- **Sleek Glassmorphism Design**: Enjoy a modern, visually appealing interface.
- **Prompt Discovery and Sharing**: Discover new prompts or share your own with the community.
- **Prompt Management**: Users can edit and delete their prompts as needed.
- **User Profiles**: Each user has a profile page that displays their shared prompts.
- **View Other Profiles**: Explore profiles to discover insights from other creators.
- **Copy to Clipboard**: Easily copy AI prompts for your use.
- **Search by Tag**: Find prompts by specific tags, allowing easier navigation and discovery.
- **Google Authentication with NextAuth**: Secure login experience through Google.
- **Fully Responsive**: Optimized for all devices, from desktops to smartphones.

## Tech Stack

- **Next.js**
- **MongoDB**
- **NextAuth**
- **TailwindCSS**
- **ShadCn**
- **MagicUI**

## Getting Started

### Prerequisites

Ensure the following are installed on your machine:
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)

### Installation

Follow these steps to set up the project locally:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/adrianhajdin/project_next_13_ai_prompt_sharing.git
   cd project_next_13_ai_prompt_sharing
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**

   Create a new `.env` file in the root directory with the following content:

   ```env
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_URL_INTERNAL=http://localhost:3000
   NEXTAUTH_SECRET=your_secret_here
   GOOGLE_ID=your_google_id_here
   GOOGLE_CLIENT_SECRET=your_google_client_secret_here
   MONGODB_URI=your_mongodb_uri_here
   ```

   Replace placeholder values with your actual credentials. Obtain these from:
   - [Google Cloud Console](https://console.cloud.google.com)
   - [Cryptool for Auth Secret](https://www.cryptool.org/en/cto/openssl)
   - [MongoDB](https://www.mongodb.com/)

4. **Run the Project**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## Contributing

We welcome contributions! To get started, follow the setup instructions and feel free to create pull requests for any improvements or issues.

