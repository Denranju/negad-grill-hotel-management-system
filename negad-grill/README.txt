NEGAD GRILL - Hotel Management System
=====================================

WHAT IS IN THIS FOLDER
  index.html    the whole app (customer, waiter, kitchen, admin)
  server.js     tiny server that saves everything into datadb.json
  datadb.json   YOUR DATABASE FILE (orders, bookings, customers, staff, menu, tables, payment accounts)
  START-WINDOWS.bat / START-MAC-LINUX.sh   one-click start

HOW TO RUN
  1. Install Node.js (free) from https://nodejs.org  (one time only)
  2. Windows: double-click START-WINDOWS.bat      Mac/Linux: run ./START-MAC-LINUX.sh
  3. Open http://localhost:3000 in your browser.
     Phones/tablets on the same Wi-Fi open the "On other devices" address shown in the black window.

CUSTOMERS
  Customers do not log in. Their name and phone number are saved when they book a table
  or order food, and they follow their order by typing that phone number in "My orders".
  The admin sees every customer in Admin > Dashboard > Recent customers.

PAYMENTS
  Built in: M-Pesa Till 123456, Equity Paybill 247247 (account 12345678), Equity Bank A/C 12345678.
  The admin can add more Tills, Paybills and bank accounts in Admin > Dashboard > Payment accounts.

ADMIN LOGIN
  Press Admin at the top and sign in with:   Dennis Karanja   /   12345
  The admin then adds Chefs, Kitchen staff, Waiters and more Admins (Admin > Dashboard > Staff accounts),
  extra payment accounts, and new food or tables (choose a photo from your computer).
  The admin also sees all statistics: sales analysis and pie chart, order history, daily reports,
  peak hours, profit & loss, table status and customers.
  Tip: once you have created another admin with a strong password, press "Switch default login off".

BACKUP
  Copy datadb.json somewhere safe. To restore, stop the server and put the file back.
  To start fresh, replace datadb.json with:  {}

NOTE
  Passwords are checked inside the browser, which suits a small hotel's daily use.
  Do not expose this server to the public internet.
