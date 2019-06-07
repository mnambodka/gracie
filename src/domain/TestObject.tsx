import axios, { AxiosRequestConfig } from 'axios'

export interface TestObject {
    id: string,
    name: string,
    created_on: Date,
    isTestObject: () => true
}

export const factoryBase = (data: any): TestObject => {
    return { ...data, isPdfFile: () => true }
}

export const to = (data: any[]): TestObject[] => {
    return data.map(e => factoryBase(e))
}


export const getData = (serviceUrl: string, successCallback: (data: TestObject[]) => void, errorCallback: (error: any, message: string) => void) => {
    successCallback([
        {id: 'aaa-bbb', name: 'HuHu', created_on: new Date(), isTestObject: ()=> true},
        {id: 'aaa-bbb', name: 'HuHu', created_on: new Date(), isTestObject: ()=> true},
        {id: 'aaa-bbb', name: 'HuHu', created_on: new Date(), isTestObject: ()=> true},
    ])
    // axios
    //     .get(`${serviceUrl}/pdffile`, {
    //         headers: { 'Content-Type': 'text/plain' }
    //     }
    //     )
    //     .then(
    //         response => {
    //             successCallback(to(response.data))
    //         }
    //     )
    //     .catch(error => {
    //         errorCallback(error, "Load Investitionsfonds failed!")
    //     })
}

export const deleteData = (serviceUrl: string, id: string,successCallback: (id: string) => void, errorCallback: (error: any, message: string) => void) => {
    // axios
    //     .delete(`${serviceUrl}/pdffile`, {
    //         headers: { 'Content-Type': 'text/plain' },
    //         params: {
    //             "id": `eq.${id}`
    //         }
    //     }
    //     )
    //     .then(
    //         response => {
    //             successCallback(response.data)
    //         }
    //     )
    //     .catch(error => {
    //         errorCallback(error, "Load Investitionsfonds failed!")
    //     })
}



