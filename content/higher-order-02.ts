interface Item { }

const update = (item: Item): Item => {
  /* ... */
  return item;
};

function updateAll (items: Item[]): Item[] {
  const updates: Item[] = [];

  for (let i = 0; i < items.length; i += 1) {
    const item: Item = items[i];
    updates.push(update(item));
  }

  return updates;
}