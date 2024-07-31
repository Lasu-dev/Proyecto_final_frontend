export const obtenerEstadoMook = async () => {
    const response = await fetch(
        '/estadoMook.json', 
        {
            method: "GET"
        }
    )
    return  response.json()
}