This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

### Installation


Config Environment Variables
```sh
NEXT_PUBLIC_PRIVATE_KEY=(Your private key - key jwt)
NEXT_PUBLIC_FIREBASE_APPID=(Appid Firebase)
NEXT_PUBLIC_FIREBASE_APIKEY=(Apikey Firebase)
NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID=(MessagingSenderID Firebase)
NEXT_PUBLIC_FIREBASE_PROJECTID=(ProjectId Firebase)
```

Run For Development
```sh
$ npm run dev
```

Build For Production
```sh
$ npm run build
$ npm run start-dev
```

Public Production (with PORT)
```sh
$ npm start
```
### Todos

- Dark Mode
 - Write MORE Tests

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
