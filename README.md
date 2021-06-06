# Website

## Running locally in development mode

To get started, just clone the repository and run `yarn install && yarn run dev`:

    git clone https://github.com/iaincollins/nextjs-starter.git
    yarn install
    yarn run dev

Note: If you are running on Windows run install --noptional flag (i.e. `yarn install --no-optional`) which will skip installing fsevents.

## Building and deploying in production

If you wanted to run this site in production, you should install modules then build the site with `yarn build` and run it with `yarn start`:

    yarn install
    yarn  build
    yarn start

You should run `yarn build` again any time you make changes to the site.

Note: If you are already running a webserver on port 80 (e.g. Macs usually have the Apache webserver running on port 80) you can still start the example in production mode by passing a different port as an Environment Variable when starting (e.g. `PORT=3000 yarn start`).

## Configuring

If you configure a .env file (just copy [.env.example](https://github.com/iaincollins/nextjs-starter/blob/master/.env.example) over to '.env' and fill in the options) you can configure a range of options.
