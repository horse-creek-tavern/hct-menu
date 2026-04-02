document.querySelectorAll(".dropdown-list").forEach((list) => {
  const cards = Array.from(list.querySelectorAll(".dropdown-card"));

  cards.forEach((card) => {
    card.addEventListener("toggle", () => {
      if (!card.open) {
        return;
      }

      cards.forEach((otherCard) => {
        if (otherCard !== card) {
          otherCard.open = false;
        }
      });
    });
  });
});
