
# Dynamic Card Rendering Project

This project dynamically renders a set of cards based on JavaScript data using HTML, CSS, and vanilla JavaScript. It utilizes responsive design principles and a smooth hover effect for an interactive experience.

## DEMO

[Demo Link](https://daniel-fatbeehive.netlify.app/)

## Features

- **Responsive Design**: The layout adjusts for different screen sizes.
- **Card Hover Animation**: Smooth hover animation that lifts the card for visual feedback.
- **Dynamic Card Rendering**: Cards are dynamically created based on data in JavaScript, which allows for easy updates and extensibility.
- **BEM Methodology**: Follows the BEM (Block Element Modifier) convention to structure and style components for reusability.

## Project Structure

```bash
├── assets/           # Static files (images, fonts, etc.)
│   ├── images/       # Images used in the project
│   └── js/           # JavaScript files
│
├── styles/           # CSS files
│   ├── index.css     # Main CSS styles
│   └── mobile.css    # Responsive styles for mobile devices
│
├── index.html        # HTML structure
├── index.js          # Main JavaScript file for dynamic rendering
└── README.md         # Project documentation
```

## Files Breakdown

### 1. `index.html`
This file contains the basic structure of the web page. It includes:
- A main grid section to hold the dynamically rendered cards.
- An about section with a floating image.
- Links to external stylesheets (`index.css` and `mobile.css`).

Key Snippet:
```html
<div class="item-card-wrap" id="card-wrap">
    <!-- Card renders dynamically here -->
</div>
```

### 2. `index.css`
This file contains the primary styles for the project. It:
- Sets global styles (colors, fonts, etc.).
- Uses the BEM methodology to style blocks, elements, and modifiers.
- Adds hover effects for interactive feedback.

Key Snippet for Hover Animation:
```css
.item-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    opacity: 0.8;
}
```

### 3. `index.js`
This file dynamically generates and renders the card elements based on an array of card data. Each card includes:
- An image.
- A title, description, and date.
- An optional button if a `link` is provided in the data.

Key Snippet:
```javascript
const cardContainer = document.getElementById('card-wrap');
cardsData.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('item-card');
    cardElement.innerHTML = `
        <img src="${card.image}" alt=${card.title} />
        <div class="text-space">
            <h4>${card.title}</h4>
            <p class="date">${new Date(card.date).toDateString()}</p>
            <p class="content-text">${card.description}</p>
        </div>
        ${card.link ? `<button>Button</button>` : ""}
    `;
    cardContainer.appendChild(cardElement);
});
```

### 4. `mobile.css`
This file contains responsive styles to ensure the layout is optimized for mobile devices.

## Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/syntaxPriest/fatbeehive-test.git
   ```

2. Open the project in your favorite editor.

3. To run the project, open `index.html` in a browser.

## Customization

- **Card Data**: You can easily modify the card data in `index.js` to reflect your own content. Simply add more card objects to the `cardsData` array.
- **Styling**: Modify the CSS files (`index.css` and `mobile.css`) to customize the look and feel of the cards, buttons, and layout.
  
## Dependencies

- Google Fonts (`Raleway`)
- Vanilla JavaScript (no external libraries required)
