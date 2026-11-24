# Product Catalog – Laboratory Exercises 3 and 4

## Laboratory Exercise 3: Props and Component Communication

### Guide Questions

**1. What is the difference between props and state in React?**

Props are used to pass data from a parent component to a child component, while state stores data that can change over time within a component.

**2. Why should a child component not directly modify its props?**

A child component should not directly modify its props because props are read-only. The parent component is responsible for managing the data and passing it to the child.

**3. How does a callback function allow a child component to communicate with its parent?**

A callback function allows a child component to notify its parent about an event. In this project, the ProductCard component calls the onAddToCart function when the Add to Cart button is clicked.

**4. Why are keys important when rendering lists in React? What happens when keys are missing or duplicated?**

Keys help React identify each item in a list when items are added, removed, or updated. Missing or duplicated keys can cause warnings and make list updates less reliable.

**5. What is the benefit of using the children prop?**

The children prop allows a component to receive and display content placed between its opening and closing tags. In this project, it is used to display labels such as New and Sale inside selected product cards.

---

## Laboratory Exercise 4: React useState and useEffect (Live Search and Filter)

### Guide Questions

**1. Why do we need separate searchText and debouncedSearch states?**

The searchText state stores the user's current input, while debouncedSearch stores the search keyword after a 300-millisecond delay. Separating them prevents the filtering process from running immediately every time the user types.

**2. What happens if the debounce effect does not have a cleanup function?**

Without a cleanup function, previous timers will continue running even when the user types another character. This can cause unnecessary updates and affect the search behavior.

**3. What is the purpose of the dependency array in useEffect? What is the difference between an empty array [] and no dependency array?**

The dependency array determines when the useEffect runs. An empty array means the effect runs only once after the component mounts, while omitting the dependency array causes the effect to run after every render. When dependencies are included, the effect runs when those values change.

**4. Why should we avoid sorting the original products array directly?**

We should avoid sorting the original products array because sort() modifies the existing array. Using a copied array with the spread operator allows us to sort the products without changing the original data.

**5. Should the filtered product list be stored in a separate state or calculated during rendering? Explain.**

The filtered product list should be calculated during rendering because it is based on existing states such as debouncedSearch, category, and sortOrder. Storing it in a separate state is unnecessary because it can be derived directly from the original products array and current filter values.