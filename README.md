# Completed Listings

eBay Completed was created to give a quick breakdown of what an items average sale price and sold percentage is, 
based off of the last 100 listings (if available) on eBay.  

![app screenshot](docs/images/app_image.png)

### Development setup

Installation of Node.js is required.

```
cd path/to/your/directory
# Following command requires installation of git
git clone https://github.com/programming-is-cool/completed-listings.git
cd completed-listings
npm install # start command with sudo if you are on on a Mac
npm start
```

## Config.json

If you do not want to constantly input the eBay api key on launch, you could save the api key in a 
config.json file (one is already provided for you).

The config.json file should be formatted as such:

```json
{
  "token": "abcdefghijk-12345-67890lmnop" 
}
```

The file should also be located in the root directory, just outside of the src folder.

## License

MIT licensed.
