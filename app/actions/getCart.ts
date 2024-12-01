export async function getCart() {
    const response = await fetch('/api/cart', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        },
    });
    if (!response.ok) {
        throw new Error("Something went wrong!");
    }
    const data = await response.json();
    console.log("Get API", data); // This will log the updated cart data
    return data.cart;
}
