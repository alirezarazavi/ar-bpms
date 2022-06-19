export async function createType (name: string, faName: string) {
    return await fetch(`/equipments/types`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name, faName
        })
    });
}

export async function getAllTypes () {
    return await fetch('/equipments/types', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    });
}
