export const obtenerDataMook = async () => {
    const response = await fetch(
        '/dataMook.json', 
        {
            method: "GET"
        }
    )
    return  response.json()
}
