# BookMyShow Demo - React App

A simple ticket booking application built with React and React Router. Register, login, select a city, and book movie seats.

## Features

- **Authentication**: Register and login with localStorage persistence
- **City Selection**: Choose from multiple cities (Mumbai, Delhi, Bengaluru, Chennai, Kolkata)
- **Movie Listing**: Browse movies available in your selected city
- **Seat Selection**: Interactive seat selector to pick and book seats
- **Booking History**: View all your confirmed bookings
- **Responsive UI**: Clean, modern card-based design

## Project Structure

```
src/
├── component/
│   ├── Home.jsx              # Landing page
│   ├── Register.jsx          # Registration form
│   ├── Login.jsx             # Login form
│   ├── Dashboard.jsx         # Main dashboard with movies & booking
│   ├── LocationSelector.jsx  # City selector dropdown
│   └── SeatSelector.jsx      # Seat picker component
├── App.jsx                   # Main routing setup
├── App.css                   # Global styles
└── main.jsx                  # App entry point
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Navigate to project folder
cd day9-14React/React/React

# Install dependencies
npm install
```

### Running the App

```bash
# Start development server (runs on http://localhost:5173)
npm run dev
```

### Build for Production

```bash
npm run build
```

## Usage Flow

1. **Home** - Landing page
2. **Register** - Create a new account (stored in localStorage)
3. **Login** - Sign in with your credentials
4. **Dashboard** - Select city → See movies → Click "Book" → Pick seats → Confirm
5. **View Bookings** - Your bookings history appears on the dashboard
6. **Logout** - Sign out (clears auth session)

## Test Credentials

After registering a user, you can log in with:
- **Email**: (the email you registered)
- **Password**: (the password you registered)

## Technologies

- React 19.2
- React Router DOM 6.14
- Vite (build tool)
- Axios (for API calls, optional)

## Data Persistence

- User accounts: stored in `localStorage` under `users` key
- Auth session: stored in `localStorage` under `auth` key
- Bookings: stored in `localStorage` under `bookings` key

## Notes

- This is a **demo app** with mock movie data
- Seats are not persisted per show (reset on page refresh)
- Posters use placeholder images
- No backend API required (all data in localStorage)

## Future Enhancements

- [ ] Real movie API integration
- [ ] Real poster images
- [ ] Payment gateway
- [ ] Email confirmations
- [ ] Persistent seat availability
- [ ] Cancellation & refunds
- [ ] Admin panel

---

Built for learning React routing, state management, and form handling.
