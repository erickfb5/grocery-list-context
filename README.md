Grocery List App
================

This is a simple Grocery List App that allows users to manage their shopping list. Users can add items to the list, search for specific items, and remove items from the list.

Click [here](https://grocery-list-app-context.onrender.com) to check the deployed app.

Installation
------------

##### To run the Grocery List App locally, follow these steps:

1. Clone the repository: `git clone [repository-url]`

2. Navigate to the project directory: `cd grocery-list-context`

3. Install the dependencies: `npm install`

4. Start the development server: `npm start`

5. Open your web browser and visit [http://localhost:3000](http://localhost:3000/) to access the app.

Usage
-----

##### The Grocery List App allows you to manage your shopping list effectively. Here are the key features:

- Add Item: Use the "Add Item" input field to enter a new item and click the "Add" button to add it to your shopping list.

- Search Item: Use the "Search Item" input field to search for specific items in your shopping list. The list will dynamically update as you type.

- Content: The main content area displays the list of items. You can view and delete items from the list.

- Footer: The footer section displays the total number of items in your shopping list.

Components
----------

##### The Grocery List App is built with the following components:

- Header: Renders the app title.

- AddItem: Allows users to add new items to the shopping list.

- SearchItem: Provides search functionality to filter items in the list.

- Content: Displays the list of items and allows users to manage them.

- Footer: Shows the total number of items in the list.

Context
-------

##### The Grocery List App now uses context to manage the application state. The `DataContext` provides the following values to its descendants:

- items: An array representing the shopping list items.

- setItems: A function to update the shopping list items.

- newItem: A string representing the value of the input field for adding new items.

- setNewItem: A function to update the value of the input field for adding new items.

- search: A string representing the search query.

- setSearch: A function to update the search query.

License
-------

This project is licensed under the [MIT License](https://chat.openai.com/LICENSE).

Feel free to contribute, report issues, or submit pull requests.