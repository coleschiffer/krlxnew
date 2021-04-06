# New KRLX Website
This is our new website. It is in [Next.js](https://nextjs.org/), a React framework.

It generates nightly static builds from our Wordpress CMS and Spinitron. It uses wordpress graphql and the [Spinitron API](https://spinitron.github.io/v2api/).

Currently it is hosted on vercel.com



To run locally you most have NPM installed. Check [here](https://www.npmjs.com/get-npm).

Install Dependencies:

`npm install`

Configure local variables

Create `.env.local` file in main directory. Copy `.env.local.example` and put in the Spinitron API key [here](https://spinitron.com/station/automation/panel).

```
WORDPRESS_API_URL=https://www.content.krlx.org/graphql
SPINITRON_API_URL=https://spinitron.com/api
SPINITRON_AUTH_KEY=ENTER_SPINITRON_API_KEY_HERE
```

Now launch the development server

`npm run dev`
