# Ticketmaster Clone (HTML/CSS/JS)

A clean, mobile-first recreation of the Ticketmaster website design using **only HTML, CSS, and vanilla JavaScript**.

## Features

- Exact mobile layout matching Ticketmaster screenshots
- Sticky blue header with search bar
- Promo banners, event lists, carousels
- Trending Searches, Happening This Week, Sponsored Presales
- Popular Near You (Concerts + Sports)
- Entertainment Guides & Discover More
- Full event detail page with tabs (Shows / About / Reviews)
- Responsive (mobile → tablet → desktop)
- Ready to connect to Supabase later

## Project Structure

```
ticketmaster-clone/
├── index.html          # Homepage
├── event.html          # Event detail page
├── css/
│   ├── styles.css      # Main styles
│   └── event.css       # Event page styles
├── js/
│   ├── app.js          # Homepage interactivity
│   └── event.js        # Event page tabs
└── README.md
```

## How to Run

Just open `index.html` in a browser (or use a local server):

```bash
# Option 1: Open directly
open index.html

# Option 2: Simple local server
npx serve .
# or
python -m http.server 8000
```

## Next Steps (for CMS + Supabase)

1. Create Supabase project
2. Tables: `events`, `artists`, `venues`, `categories`, `reviews`
3. Replace mock data with Supabase queries
4. Build admin panel for CRUD

## Design Notes

- Primary blue: `#024ddf`
- Font: Inter
- Mobile-first, sticky header + tabs
- Carousels with prev/next buttons
