import io from 'socket.io-client';
import { BASE_URL } from '../keys';

class Socket {
    constructor() {
        this.socket = null;
    }
    init(token = '') {
        const socket = io(`${BASE_URL}/chats`, {
            auth: {
                token
            },
        });
        socket.on('connect', () => {
            console.log('[socket] a user connected');

        });

        socket.on('disconnect', () => {
            console.log('[socket] user disconnected');
        });

        socket.on('connect_error', (err) => {
            console.log('[socket] connect_error', err.message); // prints the message associated with the error
        });

        socket.on('connect_msg', (data) => {
            console.log('[socket] connect_msg', data); // prints the message associated with the error
        });
        this.socket = socket;
    }
    disconnect() {
        this.socket.disconnect();
    }
    get() {
        return this.socket;
    }
}

export default new Socket();