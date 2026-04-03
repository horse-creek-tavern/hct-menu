document.querySelectorAll(".dropdown-list").forEach((list) => {
  const cards = Array.from(list.querySelectorAll(".dropdown-card"));

  cards.forEach((card) => {
    const summary = card.querySelector("summary");

    if (summary) {
      summary.addEventListener("click", (event) => {
        if (card.open) {
          return;
        }

        event.preventDefault();

        cards.forEach((otherCard) => {
          if (otherCard !== card) {
            otherCard.open = false;
          }
        });

        const topHeader = document.querySelector(".top-header");
        const headerOffset = topHeader ? topHeader.getBoundingClientRect().height : 0;
        const scrollRoot = document.documentElement;
        const previousScrollBehavior = scrollRoot.style.scrollBehavior;

        scrollRoot.style.scrollBehavior = "auto";

        const closedCardTop = card.getBoundingClientRect().top + window.scrollY;
        window.scrollTo(0, Math.max(closedCardTop - headerOffset, 0));
        card.open = true;

        requestAnimationFrame(() => {
          const openCardTop = card.getBoundingClientRect().top + window.scrollY;
          window.scrollTo(0, Math.max(openCardTop - headerOffset, 0));

          scrollRoot.style.scrollBehavior = previousScrollBehavior;
        });
      });
    }

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
