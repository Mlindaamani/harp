import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
export const GET = handleAuth();

// ├── .env.local
// ├── .gitignore
// ├── next.config.js
// ├── package.json
// ├── middleware.ts
// ├── public/
// │   ├── images/
// │   └── favicon.ico
// ├── app/
// │   ├── layout.tsx
// │   ├── page.tsx
// │   ├── api/
// │   │   ├── auth/
// │   │   │   └── [kindeAuth]/
// │   │   │       └── route.ts
// │   │   └── chat/
// │   │       ├── route.ts (chat API endpoints)
// │   │       └── socket.ts (WebSocket handlers)
// │   ├── auth/ (Kinde auth pages)
// │   ├── dashboard/
// │   ├── bookings/
// │   ├── professionals/
// │   ├── services/
// │   ├── chat/ (Real-time chat feature)
// │   │   ├── [chatId]/
// │   │   │   ├── page.tsx (Chat interface)
// │   │   │   └── layout.tsx
// │   │   ├── page.tsx (Chat list)
// │   │   └── components/
// │   │       ├── ChatWindow.tsx
// │   │       └── MessageBubble.tsx
// │   └── error/
// ├── components/
// │   ├── common/ (Reusable UI components)
// │   ├── chat/ (Chat-specific components)
// │   │   ├── ChatList.tsx
// │   │   ├── MessageInput.tsx
// │   │   └── TypingIndicator.tsx
// │   ├── Navbar.tsx
// │   └── Footer.tsx
// ├── contexts/
// │   ├── ChatContext.tsx (Manages chat state)
// │   ├── SocketContext.tsx (WebSocket connection)
// │   └── UserContext.tsx
// ├── hooks/
// │   ├── useChat.ts (Chat logic)
// │   └── useSocket.ts (Socket management)
// ├── lib/
// │   ├── pusher.ts (Pusher integration)
// │   ├── dbConnect.ts
// │   └── api.ts
// ├── models/
// │   ├── Message.ts (Chat message schema)
// │   ├── ChatSession.ts (Chat session schema)
// │   └── ...other models
// ├── services/
// │   ├── chatService.ts (Chat business logic)
// │   └── notificationService.ts
// ├── styles/
// ├── utils/
// │   ├── socketUtils.ts (WebSocket helpers)
// │   └── ...other utilities
// └── __tests__/
//     └── ...test files

// Key Additions for Real-Time Chat:
// 1. Chat Routes:
//    - app/chat/[chatId]/page.tsx - Individual chat session
//    - app/chat/page.tsx - List of active conversations

// 2. WebSocket Integration:
//    - lib/pusher.ts - Pusher configuration
//    - services/

//START HERE

// ├── .env.local
// ├── .gitignore
// ├── next.config.js
// ├── package.json
// ├── middleware.ts (for authentication handling)
// ├── public/
// │   ├── images/
// │   └── favicon.ico
// ├── app/
// │   ├── layout.tsx (root layout with Bootstrap/Kinde providers)
// │   ├── page.tsx (home page)
// │   ├── api/
// │   │   └── auth/
// │   │       └── [kindeAuth]/
// │   │           └── route.ts (Kinde auth callbacks)
// │   ├── auth/
// │   │   ├── login/
// │   │

// │   │   ├── login/
// │   │   │   ├── page.tsx (login page)
// │   │   │   └── layout.tsx (layout for login page)
// │   │   ├── register/
// │   │   │   ├── page.tsx (registration page)
// │   │   │   └── layout.tsx (layout for registration page)
// │   │   └── profile/
// │   │       ├── page.tsx (user profile page)
// │   │       └── layout.tsx (layout for profile page)
// │   ├── dashboard/
// │   │   ├── page.tsx (dashboard for users)
// │   │   └── layout.tsx (layout for dashboard)
// │   ├── bookings/
// │   │   ├── page.tsx (bookings overview page)
// │   │   ├── [bookingId]/
// │   │   │   ├── page.tsx (individual booking details)
// │   │   │   └── layout.tsx (layout for booking details)
// │   │   └── create/
// │   │       ├── page.tsx (create booking page)
// │   │       └── layout.tsx (layout for create booking)
// │   ├── professionals/
// │   │   ├── page.tsx (list of professionals)
// │   │   ├── [professionalId]/
// │   │   │   ├── page.tsx (professional details)
// │   │   │   └── layout.tsx (layout for professional details)
// │   │   └── create/
// │   │       ├── page.tsx (create professional profile)
// │   │       └── layout.tsx (layout for create professional)
// │   ├── services/
// │   │   ├── page.tsx (list of services)
// │   │   └── [serviceId]/
// │   │       ├── page.tsx (service details)
// │   │       └── layout.tsx (layout for service details)
// │   └── error/
// │       └── page.tsx (custom error page)
// ├── components/
// │   ├── Navbar.tsx (navigation bar component)
// │   ├── Footer.tsx (footer component)
// │   ├── BookingForm.tsx (form for creating bookings)
// │   ├── ProfessionalCard.tsx (card for displaying professionals)
// │   ├── ServiceCard.tsx (card for displaying services)
// │   ├── UI/
// │   │   ├── Button.tsx (custom button component)
// │   │   ├── Modal.tsx (custom modal component)
// │   │   └── Spinner.tsx (loading spinner component)
// ├── contexts/
// │   ├── UserContext.tsx (context for user authentication)
// │   └── BookingContext.tsx (context for managing bookings)
// ├── hooks/
// │   ├── useUser .ts (custom hook for user data)
// │   └── useBookings.ts (custom hook for bookings)
// ├── lib/
// │   ├── dbConnect.ts (MongoDB connection utility)
// │   └── api.ts (API helper functions)
// ├── models/
// │   ├── User.ts (Mongoose model for User)
// │   ├── Booking.ts (Mongoose model for Booking)
// │   ├── Professional.ts (Mongoose model for Professional)
// │   └── Service.ts (Mongoose model for Service)
// ├── styles/
// │   ├── global.css (global styles)
// │   └── custom.scss (custom Bootstrap overrides)
// ├── utils/
// │   ├── dateUtils.ts (date formatting utilities)
// │   └── validationUtils.ts (form validation utilities)
