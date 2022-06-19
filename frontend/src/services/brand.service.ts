export async function createBrand (name: string, faName: string) {
    return await fetch(`/equipments/brands`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name, faName
        })
    });
}

export async function getAllBrands () {
    return await fetch('/equipments/brands', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    });
}