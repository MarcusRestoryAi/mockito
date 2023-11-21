const { fetchDataFromApi } = require('./fetchFromApi');
const axios = require('axios');

jest.mock('axios');

describe("Tester av API med Mocking", () => {
    /*
    it("Test mot ett fungerande API, SWAPI", async () => {
        const response = await fetchDataFromApi();
        expect(response['name']).toEqual('Luke Skywalker');
    })
    */

    it("Lyckat anrop till API med Mocking", async () => {
        //Defniniera MockData, som är det förbestämda responsen från API
        const mockData = { 'name': 'Luke Skywalker'};
        axios.get.mockResolvedValue( {'data': mockData} );

        //Anropa fetchDataFromApi()
        const response = await fetchDataFromApi();

        expect(response).toEqual(mockData);
    });

    it("Medvetet misslyckat API anrop med ett error", async () => {
        //Mockar ett error meddelande
        const mockError = new Error("Misslyckat API anrop");
        axios.get.mockRejectedValue(mockError);

        // Anropa funktionen som hämtar data från den externa API:en
        await expect(fetchDataFromApi()).rejects.toThrow(mockError);
    })
})