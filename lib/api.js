export async function getExploreData() {
  const res = await fetch("https://www.jsonkeeper.com/b/4G1G");
  const exploreData = await res.json();
  return exploreData;
}

export async function getCardsData() {
  const res = await fetch("https://jsonkeeper.com/b/PRQX");
  const exploreData = await res.json();
  return exploreData;
}
