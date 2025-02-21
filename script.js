function toggleBox(selectedBox) {
    document.querySelectorAll('.box').forEach(box => {
        if (box !== selectedBox) {
            box.classList.remove('expanded'); //Remove expanded class for unselected boxes
            box.classList.remove('glow'); // Remove glow effect from other boxes
        } else {
            const isExpanded = selectedBox.classList.toggle('expanded');
            if (isExpanded) {
                selectedBox.classList.add('glow'); // Apply glow only when expanded
            } else {
                selectedBox.classList.remove('glow'); // Remove glow when collapsed
            }
        }
    });
}
