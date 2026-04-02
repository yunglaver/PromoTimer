export async function getOffers() {
    const res = await fetch('https://t-core.fit-hub.pro/Test/GetTariffs');
    return res.json();
}

