
# Product Catalog – Laboratory Exercise 3

## Guide Questions

### 1. What is the difference between props and state in React?

Props are used to pass data from a parent component to a child component, while state stores data that can change over time within a component.

### 2. Why should a child component not directly modify its props?

A child component should not directly modify its props because props are read-only. The parent component is responsible for managing the data and passing it to the child.

### 3. How does a callback function allow a child component to communicate with its parent?

A callback function allows a child component to notify its parent about an event. In this project, the ProductCard component calls the onAddToCart function when the Add to Cart button is clicked.

### 4. Why are keys important when rendering lists in React? What happens when keys are missing or duplicated?

Keys help React identify each item in a list when items are added, removed, or updated. Missing or duplicated keys can cause warnings and make list updates less reliable.

### 5. What is the benefit of using the children prop?

The children prop allows a component to receive and display content placed between its opening and closing tags. In this project, it is used to display labels such as New and Sale inside selected product cards.
