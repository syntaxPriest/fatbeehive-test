// Main Script

// Dummy Experimental Data..
const cardsData = [
    {
      title: "Item title",
      date: new Date(),
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "/assets/images/card-image.png",
      link: "#"
    },
    {
        title: "Item title",
        date: new Date(),
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        image: "/assets/images/card-image.png"
    },
    {
        title: "Item title",
        date: new Date(),
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        image: "/assets/images/card-image.png",
        link: "#"
    }
  ];
  
 // Defining the parent wrap where all cards fits in 
  const cardContainer = document.getElementById('card-wrap');
  
 //  Dynamically rendering the cards based on the data array
  function displayCards(cards) {
    cards.forEach(card => {
      const cardElement = document.createElement('div');
      cardElement.classList.add('item-card');
  
      cardElement.innerHTML = `
        <img 
            src="${card.image}" 
            alt=${card.title}
        />
        <div class="text-space">
            <h4>${card.title}</h4>
            <p class="date">${new Date(card.date).toDateString()}</p>
            <p class="content-text">${card.description}</p>
        </div>
        ${card.link ? `<button>Button</button>` : ""}
      `;
      cardContainer.appendChild(cardElement);
    });
  }
  
  displayCards(cardsData);
  