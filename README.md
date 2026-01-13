# Astronomy portfolio website template

https://astronomy.templates.loremus.gay/

This is a little portfolio template made for people with careers related to astronomy/astrophysics. Using the planetary navbar and starry background as effects. The website is made for showcasing your talents and publishing blogs.

## Why

- Specially Designed for Astronomy.
- Animated effects.
- Easy blogging with CMS.
- Easy to create and maintain.

## Stack

- ReactJS
- NextJS
- Typescript
- Tailwind CSS
- Shadcn [React bits](https://www.reactbits.dev/)
- Sanity.io CMS

## Installation

- Setting up frontend
- Setting up a CMS
- Pointers for hosting

#### Setting up the frontend

Make sure you have Node Package Manager, NodeJS and Git installed.

1. Clone the repo

```Bash
git clone https://git.gay/Loremus/Template-AstronomyPortfolio
```

2. Install the dependencies

cd into the project and install the dependencies with the command;

```Bash
npm install
```

3. Content Management System in env file.

create a file called `.env` in project's root directory, alongside directories like app, lib, components.
fill the contents of the file temporarily with

```Text
NEXT_PUBLIC_PROJECTID=il7ro8d9
```

4. Testing the site

Test if the site is working properly by running

```Bash
npm run dev
```

You should see the website load with template mockdata. To replace this mockdata with your own details you have to create a SanityIO CMS

#### Setting up Sanity.IO CMS

1. Creating a sanityIO project

Visit [sanityIO](https://www.sanity.io/) to create an account and a project. After creating a project, Sanity IO will give you a terminal command to run to initialize the project and setup cors.

2. Setting up schema

After creating the project, in studio-template, under `schemaTypes` folder you will see a file called `index.ts`. Replace the contents in index.ts file with the file located in this repo as `schemaTypes.ts` in project root.
Test the project with

```Bash
npm run dev
```

and you should see fields where you can fill your own information.

3. Deploy

Deploy this project with the commands

```Bash
npm run deploy
```

(Be sure to have login to sanityIO in your browser)

4. Connecting CMS to website.

Replace the contents in the `.env` file you created (in step 3 of setting up frontend) with the projectID located in `sanity.cli.ts` file located in your sanityIO project as something like

```Text
NEXT_PUBLIC_PROJECTID=<Your own projectID>
```

5. Adding blogs & maintainance

Assuming you have setup and uploaded your data correctly in the sanity IO CMS, your frontend is now connected to your CMS. To test again run on your blog site.

```Bash
npm run dev
```

to add new and new blogs now, you can always visit sanity.io and login with your profile to write blogs and the website you have will automatically update.

### Deployment options

from here on, you have few options to deploy your website to world wide web. I have linked 3 below.

1. Github pages [Docs](https://docs.github.com/en/pages)

Free and most popular, gives you an easy domain right away.

2. Vercel & your own domain

Buy your own domain and host with Vercel. A bit more complex but a lot more customizable, Vercel flee plan is enough for this blog site.

3. Git.gay pages

Same as github but gayer.

## Upcoming

- Paginated loading for blogs if necessary

## License

Gay Agenda License - 1.0
Loremus 2025
