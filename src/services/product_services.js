const APP_URL=import.meta.env.VITE_APP_URL;

async function handleResponse(response){
        if(!response.ok){
            const error=response.json().catch(()=>{});
            throw new Error(error.message || 'Failed to fetch products');
        }
    return response.json();
}

export async function getAllProducts(){
    const response=await   fetch(`${APP_URL}/products`);
    return handleResponse(response);
}

export async function getProductById(id){
    const response=await fetch(`${APP_URL}/products/${id}`);
    return handleResponse(response);
}

export async function createProduct(product){
    const response=await fetch(`${APP_URL}/products`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
    });
   return handleResponse(response);
}