# 🔗 Link Shortener

A simple and fast URL Shortener built using **Next.js** and **MongoDB**.  
This application allows users to create short, easy-to-share links that redirect to longer URLs.

---

## 🚀 Features

- Create custom short URLs
- Instant redirection to original links
- MongoDB database storage
- Server-side routing using Next.js
- Simple and clean interface
- Ready for deployment on Vercel

---

## 🛠 Tech Stack

- **Next.js** – Full stack React framework
- **MongoDB** – Database for storing links
- **Node.js** – Backend runtime
- **Vercel** – Hosting and deployment

---

## 📂 Project Structure
```
link-shortener/
│
├── app/
│ ├── api/ # API routes
│ ├── link/ # Dynamic redirect route
│ └── page.jsx # Homepage
│
├── lib/
│ └── mongodb.js # MongoDB connection
│
├── public/ # Static files
├── package.json
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env.local` file in the root directory.


`MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_HOST=http://localhost:3000`


Example MongoDB URI:


`mongodb+srv://username:password@cluster.mongodb.net/link-shortener`  


---

## ▶️ Running the Project Locally

1. Clone the repository


`git clone https://github.com/tannmaycoding/link-shortener.git`


2. Navigate into the project folder


`cd link-shortener`


3. Install dependencies


`npm install`


4. Run the development server


`npm run dev`


5. Open in browser


http://localhost:3000


---

## 🔗 How It Works

1. User enters a **long URL** and a **short keyword**.
2. The link is stored in **MongoDB**.
3. When someone visits:


/link/{short-url}


4. The application searches the database and **redirects to the original URL**.

Example:


http://localhost:3000/link/google


➡ Redirects to


https://www.google.com


---

## 🌍 Deployment

This project can be easily deployed using **Vercel**.

Steps:

1. Push the repository to GitHub
2. Import the project in Vercel
3. Add environment variables
4. Deploy

---

## 📌 Future Improvements

- Auto-generate short links
- Click analytics
- QR code generation
- Custom domains
- User authentication

---

## 📄 License

This project is open-source and available under the MIT License.