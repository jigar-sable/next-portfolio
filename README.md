![Portfolio](https://res.cloudinary.com/lifecodes/image/upload/v1678684352/Portfolio/l7b1gz61rh3hgoz5qzta.png)

<div align="center">
  &middot;
  <i>Next Portfolio built in Next.js + TypeScript + Tailwind CSS + Firebase</i>
  &middot;
  <br/>
  <br/>

  <p align="center">
    <img src="https://img.shields.io/github/forks/jigar-sable/next-portfolio?style=for-the-badge" />
  <a href="https://jigarsable.vercel.app">
    <img src="https://img.shields.io/static/v1?label=&message=View%20Demo&style=for-the-badge&color=black&logo=vercel" />
  </a>
</p>

<p align="center">
  <a href="#introduction-">Introduction</a> •
  <a href="#tech-stack-%EF%B8%8F">Tech Stack</a> •
  <a href="#development-">Development</a> •
    <a href="#deployment-">Deployment</a> •
  <a href="#license-">License</a>
</p>

</div>

## Introduction 👋

Next Portfolio is built using Next.js and Tailwind CSS for a modern design and rapid development. TypeScript is utilized for code clarity and safety. Additionally, Firebase is being integrated for backend services such as realtime-database. The result is a dynamic and functional portfolio website that showcases the developer's skills and experience.

## Tech Stack 🛠️

- [Next.js](https://nextjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Firebase](https://firebase.google.com)
- [SendGrid](https://sendgrid.com)
- [Framer Motion](https://www.framer.com/motion)

<!-- ## Tech Stack 🛠️

 <p>
 <a href="https://nextjs.org">
    <img src="https://img.shields.io/badge/Next.js-000000.svg?style=for-the-badge&logo=nextdotjs&logoColor=white" />
    </a>
  <a href="https://tailwindcss.com">
    <img src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4.svg?style=for-the-badge&logo=Tailwind-CSS&logoColor=white" />
  </a>
  <a href="https://www.typescriptlang.org">
    <img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white" />
  </a>
   <a href="https://firebase.google.com">
    <img src="https://img.shields.io/badge/Firebase-FFCA28.svg?style=for-the-badge&logo=Firebase&logoColor=black" />
  </a>
  <a href="https://www.framer.com/motion">
    <img src="https://img.shields.io/badge/Framer-0055FF.svg?style=for-the-badge&logo=Framer&logoColor=white" />
  </a>
</p> -->

## Development 💻

Here are the steps to run the portfolio locally.

1. Fork [this](https://github.com/jigar-sable/next-portfolio) repository.

2. Clone your forked copy of the repo

   ```bash
   git clone https://github.com/<your-github-username>/next-portfolio.git
   ```

3. Install dependencies

   ```bash
   npm i
   ```

4. Create a Firebase project and select the web app

5. Create an `.env.local` file in the root directory, and add the following variables with your firebase config:
   ```
   SENDGRID_API_KEY=XXXXXXXX
   NEXT_PUBLIC_FIREBASE_DATABASE_URL=XXXXXXXXXX
   MAIL_FROM=YOUR_MAIL_ID
   MAIL_TO=YOUR_MAIL_ID
   ```
   <!-- write text to tell user to get sendgrid keys from dashboard and add here -->

> **Note**: `SENDGRID_API_KEY` - Create an API key from "Settings" -> "API Keys" with "Restricted Access" to only "Mail Send"

1. Update the sample [data.json](https://github.com/jigar-sable/next-portfolio/blob/main/data.json) provided, with your data or directly import the same and edit using firebase later. (For storing images you can use [Cloudinary](https://cloudinary.com) or [Firebase Storage](https://firebase.google.com/docs/storage))

2. Import json data

   - Go to [Firebase Console](https://console.firebase.google.com) and select your project
   - Go to "Database" -> "Realtime Database" -> "Import JSON" and import the [data.json](https://github.com/jigar-sable/next-portfolio/blob/main/data.json) file

3. Run the project

   ```bash
   npm run dev
   ```

## Deployment 🚀

1. Create a Vercel account and select "Import Project"

2. Select the forked repository and deploy

3. Add the following environment variables in the Vercel dashboard:
   ```
   SENDGRID_API_KEY=XXXXXXXX
   NEXT_PUBLIC_FIREBASE_DATABASE_URL=XXXXXXXXXX
   MAIL_FROM=YOUR_MAIL_ID
   MAIL_TO=YOUR_MAIL_ID
   ```
4. Hurray! You successfully deployed the portfolio🥳

## License 📄

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/jigar-sable/next-portfolio/blob/main/LICENSE.md)

<!-- ## Contact 📬

If you want to contact me, you can reach me through below handles.

[![linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jigar-sable)

## Support 🙌

If you like this portfolio, please consider giving it a ⭐ on GitHub and sharing it with your friends via social media.

<div align="center">
  <h3> Show some &nbsp;❤️&nbsp; by starring this repo! </h3>
</div> -->
