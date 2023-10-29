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

export const validateUser = async () => {
    return {
        isValid: true,
        message: ''
    }
}