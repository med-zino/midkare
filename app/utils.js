/**
 * Finds a menu item by its name in a nested structure.
 * @param {Array} menuItems - The array of menu items.
 * @param {string} name - The name of the item to find.
 * @returns {Object|null} The found item or null if not found.
 */
const findMenuItemByName = (menuItems, name) => {
    for (const item of menuItems) {
      if (item.name === name) {
        return item;
      }
      if (item.subItems) {
        const found = findMenuItemByName(item.subItems, name);
        if (found) return found;
      }
    }
    return null;
  };

  
export default findMenuItemByName