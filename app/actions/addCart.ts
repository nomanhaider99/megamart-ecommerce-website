export async function addCart(id: string) {
    const response = await fetch('/api/cart', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id }),
    });
  
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
  
    const data = await response.json();
    console.log("Added Product:", data.product);
    return data.product; 
  }
  