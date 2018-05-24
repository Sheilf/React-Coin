
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

1. App/Index.js *** <br />
~Renders root <br />
  Routes Header, Detail, List, and NotFound components
<br /><br />
2. NotFound.js *** <br />
~Renders page error <br /><br />

3. List.js <br />
~Renders Loading, Pagination, and Table components <br />
  Establishes state for loading, pages, and AJAX data (array of currencies) <br /><br />

4. Loading.js *** <br />
~Renders and animated loading symbol when data is pulled or searched for from API <br /><br />

5. Pagination.js *** <br />
~Renders button functionality to change list of currencies. <br /><br />

6. Table.js *** <br />
~Renders a table and maps a set of rows, data cells and its respective route ID. <br /><br />
 
7. Detail <br />
~Renders data about a selected currency on a new page. <br />
  Maps currencyID to its route location. Manages state of what currency the application is on. <br /><br />
 
8. Search <br />
~Search component in Header that manages search through currency list & autocompletion. <br />
  Manages state for input typed & search results using AJAX fetching <br /><br />
  
9. Header.js *** <br /> 
~Header component shared across web app to link back to home and display an icon/logo and search feature <br /><br />

# React & ES6 patterns used

1. React-router <br />
~ Used Higher-Order Components with WithRoute(Component), BrowserRouter, Route, and Link components to wire content together in App component <br /> <br />

2. AJAX and Promising functions <br />
~ Wrote a few functions functions to make AJAX calls cleaner with thennable statements and promises. Functions acquire coin data and manage search results/autocompletion <br <br />

3. ComponentDidMount and ComponentWillReceiveProps   <br />
~ A few React lifecycle hooks to properly manage incoming and outgoing data being passed to and from the API <br /><br />

4. Arrow functions and .map(args) <br />
~ Finally understood the point of arrow functions.. They're basically lambdas and are super useful to manage events and functions <br /><br />

5. State and Prop deconstructing <br />
~ Cleaner code. Comes at a cost of not necessarily being the most intuitive way to reference data.  <br /><br />

6. PropTypes <br /> 
~ the React way to typecheck valid data and utilize debugging features. <br /><br />

7. DefaultProps <br />
~ React way of managing default props when a component is receiving various parameters <br /><br />

