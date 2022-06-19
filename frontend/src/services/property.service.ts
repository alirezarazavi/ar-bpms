import TypeInterface from "../interfaces/type.interface";

export async function createProperty (type: TypeInterface | undefined, name: string, faName: string) {
    return await fetch(`/equipments/properties`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            type, name, faName
        })
    });
}

export async function getAllProperties () {
    return await fetch('/equipments/properties', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    });
}

export async function getAllEquipmentTypesProperties (typeId: number) {
    return await fetch(`/equipments/types/${typeId}/properties`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    });
}