import jwtDecode from "jwt-decode";
import { BASE_URL } from "../keys";
import { PreferencesKeys, getItem } from "../preferences/Preferences";
import { Get } from "../services/Api";
import Socket from "../socket/Socket";
import moment from "moment";

// Function to generate a random encryption key
export const generateEncryptionKey = async () => {
    return await window.crypto.subtle.generateKey(
        {
            name: "AES-GCM",
            length: 256, // 128, 192, or 256 bits
        },
        true, // extractable
        ["encrypt", "decrypt"]
    );
}
// Function to encrypt data
export const encryptData = async (data, encryptionKey) => {
    const encoder = new TextEncoder();
    const dataBuffer = encoder.encode(data);
    const iv = window.crypto.getRandomValues(new Uint8Array(12));

    const encryptedData = await window.crypto.subtle.encrypt(
        {
            name: "AES-GCM",
            iv: iv,
        },
        encryptionKey,
        dataBuffer
    );
    return {
        encryptedData,
        iv,
    };
}

// Function to decrypt data
export const decryptData = async (encryptedData, encryptionKey) => {
    const { data, iv } = encryptedData;

    const decryptedData = await window.crypto.subtle.decrypt(
        {
            name: "AES-GCM",
            iv: iv,
        },
        encryptionKey,
        data
    );

    const decoder = new TextDecoder();
    return decoder.decode(decryptedData);
}
export const isJSONStringValid = (jsonString) => {
    try {
        JSON.parse(jsonString);
        return true;
    } catch (error) {
        return false;
    }
}

export const validateUser = async (dispatch) => {
    let message = '',
        isValid = false,
        token = '';
    const authKey = await getItem(PreferencesKeys.authKey) || false;
    if (authKey) {
        token = authKey.token;
        const decoded = jwtDecode(authKey.token);
        const TOKEN_MINUTES = Math.ceil(moment.duration(moment.unix(decoded.exp).diff(moment(new Date()))).asMinutes());
        if (TOKEN_MINUTES <= 1) {
            isValid = false;
            message = 'Session Expired!';
        } else {
            isValid = true
        }
    }
    return {
        isValid,
        message,
        token
    }
}
export const getSetUser = async (dispatch, token) => {
    try {
        Socket.init(token)
        const userDetails = await Get(`api/v1/users/userDetails`);
        const picture = userDetails.doc.picture;
        if (picture) {
            userDetails.doc.picture = `${BASE_URL}/${picture.files.find((p, index) => index === 0).path}`
        }
        dispatch({ type: 'LOGIN', payload: { ...userDetails.doc, isLoading: false } });
        console.log('User session initiated.');
        return true
    } catch (error) {
        console.log('[getSetUser].error', error);
        return false;
    }

}
export const getFilePath = (pictureObj = {}, useThumbnailUrl=false) => {
    if (!pictureObj || !Object.keys(pictureObj).length) return ''
    if (pictureObj.files) return `${pictureObj.files.find((x, index) => index === 0)[useThumbnailUrl ? "thumbnailUrl" : "path"]}`;
    else return ''
}

export const uniqueArray = (arrayOfObjects = [{}]) => {
    // Use a Set to keep track of unique IDs
    const uniqueIds = new Set();
    const uniqueObjects = [];

    // Filter the array to keep only unique objects based on the 'id' property
    for (const obj of arrayOfObjects) {
        if (!uniqueIds.has(obj._id)) {
            uniqueIds.add(obj._id);
            uniqueObjects.push(obj);
        }
    }
    return uniqueObjects;
}