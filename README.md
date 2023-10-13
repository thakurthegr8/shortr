# Shortr - link-in-Bio tool to centralize your online presence

Welcome to the Link-in-Bio Tool, your solution for consolidating and managing your online presence through a single, customizable link! Whether you're an influencer, content creator, or just want to share multiple links efficiently, this tool has you covered.
**[Check my shortr profile](https://shortr.in/thakurthegr8)**

![image](https://github.com/thakurthegr8/linkify/assets/68949544/3b170b7c-5810-4808-b59a-1dba8d3a0783)

## Table of Contents

- [Features](#features)
- [Initialize project](#initialize)

## Features

- **Single Customizable Link:** Share all your important links using just one link, making it easier for your audience to access your content.
- **Responsive Design:** Your link page is designed to look great on any device, ensuring a seamless experience for all visitors.
- **Analytics Dashboard:** Keep track of link clicks and page visits to gain insights into your audience's interests.
- **Social Media Integration:** Add icons and links to your social media profiles, giving visitors the opportunity to connect with you across platforms.
- **Call-to-Action Buttons:** Include prominent buttons for your key actions, whether it's subscribing to your newsletter, watching your latest video, or exploring your latest blog post.

## Initialize
1. Clone this repo.
2. Add environment variables 
   ```env
   NEXT_PUBLIC_MONGOUSERNAME=<MONGO-USERNAME>
   NEXT_PUBLIC_MONGOPASSWORD=<MONGO-PASSWORD>
   JWT_SECRET=<JWT-SECRET>
   #following variables can be copied from cloudinary account
   NEXT_PUBLIC_STORAGE_URL=<CLOUDINARY-STORAGE-URL>
   NEXT_PUBLIC_STORAGE_PRESET=<CLOUDINARY-STORAGE-PRESET>
   NEXT_PUBLIC_STORAGE_API_KEY=<CLOUDINARY-STORAGE-API-KEY>
   NEXT_PUBLIC_STORAGE_API_SECRET=<CLOUDINARY-STORAGE-API-SECRET>
   ```
3. Run the command
   ```bash
   npm run dev
   ```

