import React from 'react';
import Header from '@/components/Header';
import "./globals.css"

export const metadata = {
  title: 'Public Services',
  description: 'Welcome to the Public Services Template',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <div className="flex min-h-screen">
          <div className="flex-grow flex flex-col">
          <Header />
            <main className="bg-gray-50 dark:bg-gray-900 p-6 flex-grow">
              {children}
            </main>
          </div>
        </div>
        <footer className="bg-gray-800 p-4 text-center border-t border-black">
          <p className="text-gray-400">&copy; Public Services | Design by <a href="https://github.com/BEQSONA-cmd" className="text-blue-400">BEQSONA-cmd</a></p>
        </footer>
      </body>
    </html>
  );
}