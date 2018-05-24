
# React Coin
A website similar to https://coinmarketcap.com/ that keeps a list of cryptocurrencies in their market and their daily changes.
<br />
# To run
<br />
download react-coin
<br />
run Node and change directory to file location
<br />
run npm install & npm run in react-coin directory
<br />

# Components
"***" Denotes stateless functional component

1. App/Index.js ***
~Renders root
  Routes Header, Detail, List, and NotFound components

2. NotFound.js ***
~Renders page error

3. List.js 
~Renders Loading, Pagination, and Table components
  Establishes state for loading, pages, and AJAX data (array of currencies)

4. Loading.js ***
~Renders and animated loading symbol when data is pulled or searched for from API

5. Pagination.js ***
~Renders button functionality to change list of currencies.

6. Table.js ***
~Renders a table and maps a set of rows, data cells and its respective route ID.

7. Detail
~Renders data about a selected currency on a new page. 
  Maps currencyID to its route location. Manages state of what currency the application is on.
 
8. Search
~Search component in Header that manages search through currency list & autocompletion.
  Manages state for input typed & search results using AJAX fetching
  
9. Header.js ***
~Header component shared across web app to link back to home and display an icon/logo and search feature

# React & ES6 patterns used

1. React-router
~ Used Higher-Order Components with WithRoute(Component), BrowserRouter, Route, and Link components to wire content together in App component

2. AJAX and Promising functions
~ Wrote a few functions functions to make AJAX calls cleaner with thennable statements and promises. Functions acquire coin data and manage search results/autocompletion

3. ComponentDidMount and ComponentWillReceiveProps  
~ A few React lifecycle hooks to properly manage incoming and outgoing data being passed to and from the API

4. Arrow functions and .map(args)
~ Finally understood the point of arrow functions.. They're basically lambdas and are super useful to manage events and functions

5. State and Prop deconstructing
~ Cleaner code. Comes at a cost of not necessarily being the most intuitive way to reference data. 

6. PropTypes
~ the React way to typecheck valid data and utilize debugging features.

7. DefaultProps
~ React way of managing default props when a component is receiving various parameters

