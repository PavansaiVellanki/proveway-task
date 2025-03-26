// Price Map to Change Total
const priceMap = {
    unit1: "$10.00 USD",
    unit2: "$18.00 USD",
    unit3: "$24.00 USD",
  };
  
  // Track which box is currently open
  let activeBox = null;
  
  // Update Price and Border when Option is Selected
  function toggleBox(contentId) {
    const content = document.getElementById(contentId);
    const totalPrice = document.getElementById("total-price");
  
    // Check if the clicked box is already active
    if (activeBox === contentId && content.style.display === "block") {
      content.style.display = "none"; // Collapse if already open
      resetBorders(); // Reset all borders to default
      activeBox = null; // Reset active box
      totalPrice.textContent = "$0.00 USD"; // Optional: reset price when deselected
      return;
    }
  
    // Hide all other content sections and reset borders
    const allContents = document.querySelectorAll(".box-content");
    allContents.forEach((boxContent) => {
      boxContent.style.display = "none";
    });
  
    resetBorders(); // Reset border colors
  
    // Show selected content
    content.style.display = "block";
    activeBox = contentId; // Update active box
  
    // Update price based on selection
    if (contentId === "content1") {
      totalPrice.textContent = priceMap.unit1;
    } else if (contentId === "content2") {
      totalPrice.textContent = priceMap.unit2;
    } else if (contentId === "content3") {
      totalPrice.textContent = priceMap.unit3;
    }
  
    // Update border colors based on selection
    updateBorderColors(contentId);
  }
  
  // Update Border Colors
  function updateBorderColors(selectedId) {
    const allBoxes = document.querySelectorAll(".box");
    allBoxes.forEach((box) => {
      const content = box.querySelector(".box-content");
      if (content.id === selectedId && content.style.display === "block") {
        box.style.borderColor = "#f06292"; // Pink when selected
      } else {
        box.style.borderColor = "#ccc"; // Default grey
      }
    });
  }
  
  // Reset Borders to Default
  function resetBorders() {
    const allBoxes = document.querySelectorAll(".box");
    allBoxes.forEach((box) => {
      box.style.borderColor = "#ccc"; // Reset to default
    });
  }
  