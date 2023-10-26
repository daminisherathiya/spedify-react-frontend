import { generateEncryptionKey, decryptData, encryptData, isJSONStringValid } from "../helpers";

export const localStorage = window.localStorage;

const encryptionKey = await generateEncryptionKey();

export const PreferencesKeys = {
    authKey: "@auth_token",
    axiosErrKey: "@axios_error",
}

export const setItem = async (storageKey, data) => {
    try {
        const { encryptedData, iv } = await encryptData(data, encryptionKey);
        localStorage.setItem(storageKey, JSON.stringify({
            data: JSON.stringify(Array.from(new Uint8Array(encryptedData))),
            iv: JSON.stringify(Array.from(iv)),
        }))
        console.log(`Data saved in the cache using the cache key: ${storageKey}`);
    } catch (error) {
        console.log('[setItem].error', error);
    }

};

export const getItem = async (storageKey) => {
    try {
        let storageData = null;
        storageData = localStorage.getItem(`${storageKey}`);
        if (storageData) {
            if (isJSONStringValid(storageData)) {
                const parsedData = JSON.parse(storageData);
                console.log('parsedData', JSON.parse(parsedData.iv));
                const data = await decryptData({
                    data: new Uint8Array(JSON.parse(parsedData.data)),
                    iv: new Uint8Array(JSON.parse(parsedData.iv)),
                }, encryptionKey);
                console.log('JSON.parse(data)', data);
            }
        }
        console.log('[getItem]', storageData);
        return storageData;
    } catch (error) {
        console.log('[getItem].error', error);
    }

};
export const removeItem = () => {

}
(async () => {
    await setItem("M", { name: "Mudassir" });
    await getItem("M");
})()