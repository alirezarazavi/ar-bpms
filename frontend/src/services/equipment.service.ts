export async function createEquipment (type: any, brand: any, model: any, propertyNumber: any, supportNumber: any, typePropertiesValues: any) {
    return await fetch(`/equipments`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            type, 
            brand,
            model,
            propertyNumber,
            supportNumber,
            typePropertiesValues
        })
    });
}

export async function getAllEquipments () {
    return await fetch(`/equipments`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    });
}