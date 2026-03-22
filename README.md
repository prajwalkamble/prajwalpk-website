# Portfolio Website

A modern, responsive portfolio website built with Next.js, showcasing Prajwal Kamble's skills, experiences, projects, and services. The site features smooth animations, dark mode support, and is optimized for performance and SEO.

## Features

- **Hero Section**: Eye-catching introduction with animated text and call-to-action buttons.
- **Services**: Highlighted services offered, with animated cards.
- **Experiences**: Timeline of professional experiences.
- **Education**: Educational background and qualifications.
- **Skills**: Visual representation of technical skills with icons.
- **Projects**: Showcase of key projects with descriptions and links.
- **Contact**: Social media links and contact information.
- **Responsive Design**: Fully responsive across all devices.
- **Dark Mode**: Toggle between light and dark themes.
- **Animations**: Smooth animations using Framer Motion.
- **SEO Optimized**: Built with Next.js for better SEO.
- **Analytics**: Integrated Google Analytics and Sentry for error tracking.
- **Payment Integration**: Support for donations via Razorpay, PayPal, Buy Me a Coffee, and Ko-Fi.

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS, SCSS
- **Animations**: Framer Motion, Anime.js
- **Icons**: FontAwesome
- **Particles**: TS Particles
- **Error Tracking**: Sentry
- **Deployment**: Vercel (recommended)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/prajwalkamble/portfolio-website.git
   cd portfolio-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   bun install
   ```

3. Set up environment variables (optional):
   Create a `.env.local` file in the root directory and add the following variables:
   ```
   NEXT_PUBLIC_GTAG_ID=your_google_analytics_id
   NEXT_PUBLIC_RESUME_LINK=/Prajwal Kamble Resume.pdf
   # Add other variables as needed from config.ts
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   bun run dev
   ```

   Open [http://localhost:4000](http://localhost:4000) in your browser to view the website.

## Usage

- **Development**: Use `npm run dev` to start the development server.
- **Build**: Run `npm run build` to build the project for production.
- **Start**: Use `npm run start` to start the production server.
- **Lint**: Run `npm run lint` to check for linting errors.

## Project Structure

```
portfolio-website/
├── public/                 # Static assets (images, icons, resume)
├── src/
│   ├── app/                # Next.js app directory
│   │   ├── api/            # API routes
│   │   ├── payment/        # Payment page
│   │   └── page.tsx        # Home page
│   ├── components/         # Reusable components
│   │   ├── common/         # Common components (buttons, etc.)
│   │   ├── core/           # Core layout components
│   │   ├── home/           # Home section components
│   │   ├── navbar/         # Navigation components
│   │   └── footer/         # Footer components
│   ├── constants/          # Constants and configuration
│   ├── data/               # Static data (experiences, projects, etc.)
│   ├── hooks/              # Custom React hooks
│   ├── types/              # TypeScript type definitions
│   └── utils/              # Utility functions
├── .eslintrc.json          # ESLint configuration
├── next.config.js          # Next.js configuration
├── package.json            # Dependencies and scripts
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## Customization

- **Personal Information**: Update details in `src/constants/strings.ts` and `src/data/` files.
- **Styling**: Modify Tailwind classes in components or update `tailwind.config.ts`.
- **Content**: Edit sections in `src/components/home/` and data in `src/data/`.
- **Images**: Replace images in `public/images/` and `public/skills/`.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature.
3. Make your changes and test thoroughly.
4. Submit a pull request with a clear description.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

- **Email**: prajwalkamble342000@gmail.com
- **LinkedIn**: [Prajwal Kamble](https://www.linkedin.com/in/prajwalkamble666)
- **GitHub**: [prajwalkamble](https://github.com/prajwalkamble)
- **Telegram**: [prajwalkamble666](https://telegram.me/prajwalkamble666)
- **Twitter (X)**: [prajwalkamble66](https://x.com/prajwalkamble66)
- **Instagram**: [thenameisprajwalofficial](https://www.instagram.com/thenameisprajwalofficial)

For support or inquiries, feel free to reach out via the contact section on the website or through the social links provided.
