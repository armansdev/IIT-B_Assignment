# Animal Tables Challenge

This project is a web application that displays three tables for different animal categories: **Big Cats**, **Dogs**, and **Big Fish**. Each table has features like sorting, adding, editing, and deleting entries, along with validation and image hover effects.

---

## **Features**

1. **Three Tables**:

   - **Big Cats**: Displays data about big cats.
   - **Dogs**: Displays data about dogs.
   - **Big Fish**: Displays data about big fish.

2. **Table Features**:

   - **Sorting**:
     - Table 1 (Big Cats): Sort by all fields except images.
     - Table 2 (Dogs): Sort by name and location.
     - Table 3 (Big Fish): Sort by size only.
   - **Add Animal**: Add a new animal.
   - **Edit Animal**: Edit an existing animal's details.
   - **Delete Animal**: Remove an animal from the table.
   - **Validation**: Prevent duplicates and ensure valid inputs.

3. **UI Enhancements**:

   - **Styling**:
     - Table 2 (Dogs): Names are displayed in **bold**.
     - Table 3 (Big Fish): Names are displayed in **bold**, _italic_, and **blue**.

4. **Technologies Used**:
   - HTML, CSS, and TypeScript (compiled to JavaScript).
   - Bootstrap for styling and responsive design.

---

## **Setup Instructions**

### Prerequisites

- A modern web browser (e.g., Chrome, Firefox, Edge).
- TypeScript compiler (if modifying the TypeScript file).

### Steps to Run the Project

1. **Download the Project**:

   - Clone or download the repository to your local machine.

2. **Open the Project**:

   - Navigate to the project folder.

3. **Run the Application**:

   - Open the `index.html` file in your browser.

4. **Modify the Code (Optional)**:
   - If you want to modify the TypeScript code:
     - Install TypeScript globally (if not already installed):
       ```bash
       npm install -g typescript
       ```
     - Compile the `script.ts` file:
       ```bash
       tsc script.ts
       ```

---

## **Folder Structure**

```
animal-tables/
│
├── index.html          # Main HTML file
├── styles.css          # Custom CSS for styling
├── script.ts           # TypeScript logic for tables
├── script.js           # Compiled JavaScript file
├── package.json
├── tsconfig.json
└── README.md           # Project documentation
```

---

## **How to Use**

1. **Navigate Between Tables**:

   - Use the tabs at the top of the page to switch between **Big Cats**, **Dogs**, and **Big Fish**.

2. **Sort Data**:

   - Click on the column headers to sort the data (e.g., click "Name" to sort by name).

3. **Add an Animal**:

   - Click the **Add Animal** button.
   - Enter the animal's name, location, and size.
   - A default image will be assigned.

4. **Edit an Animal**:

   - Click the **Edit** button next to the animal you want to edit.
   - Update the name, location, size, and image.

5. **Delete an Animal**:

   - Click the **Delete** button next to the animal you want to remove.
   - Confirm the deletion.

---

## **Implementation Details**

### **HTML**

- The `index.html` file contains the structure of the application, including Bootstrap tabs and tables.

### **CSS**

- The `styles.css` file contains custom styles for:
  - Bold, italic, and blue text for specific tables.

### **TypeScript**

- The `script.ts` file contains the logic for:
  - Rendering tables.
  - Sorting, adding, editing, and deleting animals.
  - Validating inputs to prevent duplicates and invalid data.

### **Bootstrap**

- Bootstrap is used for:
  - Responsive design.
  - Styling tables, buttons, and tabs.

---

## **Assumptions**

- Input validation ensures:
  - No duplicate names.
  - All fields (name, location, size, image) are required.

---

## **Future Enhancements**

- Add more animal categories.
- Implement pagination for large datasets.
- Add a search feature to filter animals.

---

## **Author**

Armash Firoz Ansari

---

## **License**

This project is licensed under the MIT License.
