const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const formatMessage = require('format-message');
// const MathUtil = require('../../util/math-util');

/**
 * Icon svg to be displayed at the left edge of each extension block, encoded as a data URI.
 * @type {string}
 */
// eslint-disable-next-line max-len
const blockIconURI = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+cGVuLWljb248L3RpdGxlPjxnIHN0cm9rZT0iIzU3NUU3NSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik04Ljc1MyAzNC42MDJsLTQuMjUgMS43OCAxLjc4My00LjIzN2MxLjIxOC0yLjg5MiAyLjkwNy01LjQyMyA1LjAzLTcuNTM4TDMxLjA2NiA0LjkzYy44NDYtLjg0MiAyLjY1LS40MSA0LjAzMi45NjcgMS4zOCAxLjM3NSAxLjgxNiAzLjE3My45NyA0LjAxNUwxNi4zMTggMjkuNTljLTIuMTIzIDIuMTE2LTQuNjY0IDMuOC03LjU2NSA1LjAxMiIgZmlsbD0iI0ZGRiIvPjxwYXRoIGQ9Ik0yOS40MSA2LjExcy00LjQ1LTIuMzc4LTguMjAyIDUuNzcyYy0xLjczNCAzLjc2Ni00LjM1IDEuNTQ2LTQuMzUgMS41NDYiLz48cGF0aCBkPSJNMzYuNDIgOC44MjVjMCAuNDYzLS4xNC44NzMtLjQzMiAxLjE2NGwtOS4zMzUgOS4zYy4yODItLjI5LjQxLS42NjguNDEtMS4xMiAwLS44NzQtLjUwNy0xLjk2My0xLjQwNi0yLjg2OC0xLjM2Mi0xLjM1OC0zLjE0Ny0xLjgtNC4wMDItLjk5TDMwLjk5IDUuMDFjLjg0NC0uODQgMi42NS0uNDEgNC4wMzUuOTYuODk4LjkwNCAxLjM5NiAxLjk4MiAxLjM5NiAyLjg1NU0xMC41MTUgMzMuNzc0Yy0uNTczLjMwMi0xLjE1Ny41Ny0xLjc2NC44M0w0LjUgMzYuMzgybDEuNzg2LTQuMjM1Yy4yNTgtLjYwNC41My0xLjE4Ni44MzMtMS43NTcuNjkuMTgzIDEuNDQ4LjYyNSAyLjEwOCAxLjI4Mi42Ni42NTggMS4xMDIgMS40MTIgMS4yODcgMi4xMDIiIGZpbGw9IiM0Qzk3RkYiLz48cGF0aCBkPSJNMzYuNDk4IDguNzQ4YzAgLjQ2NC0uMTQuODc0LS40MzMgMS4xNjVsLTE5Ljc0MiAxOS42OGMtMi4xMyAyLjExLTQuNjczIDMuNzkzLTcuNTcyIDUuMDFMNC41IDM2LjM4bC45NzQtMi4zMTYgMS45MjUtLjgwOGMyLjg5OC0xLjIxOCA1LjQ0LTIuOSA3LjU3LTUuMDFsMTkuNzQzLTE5LjY4Yy4yOTItLjI5Mi40MzItLjcwMi40MzItMS4xNjUgMC0uNjQ2LS4yNy0xLjQtLjc4LTIuMTIyLjI1LjE3Mi41LjM3Ny43MzcuNjE0Ljg5OC45MDUgMS4zOTYgMS45ODMgMS4zOTYgMi44NTYiIGZpbGw9IiM1NzVFNzUiIG9wYWNpdHk9Ii4xNSIvPjxwYXRoIGQ9Ik0xOC40NSAxMi44M2MwIC41LS40MDQuOTA1LS45MDQuOTA1cy0uOTA1LS40MDUtLjkwNS0uOTA0YzAtLjUuNDA3LS45MDMuOTA2LS45MDMuNSAwIC45MDQuNDA0LjkwNC45MDR6IiBmaWxsPSIjNTc1RTc1Ii8+PC9nPjwvc3ZnPg==';
const menuIconURI = blockIconURI; 
const TOPIC = "electronicCraneTower";
class Scratch3ElectronicCraneTowerBlocks {
    constructor (runtime) {
        /**
         * The runtime instantiating this block package.
         * @type {Runtime}
         */
        this.runtime = runtime;
    }


    /**
     * The key to load & store a target's pen-related state.
     * @type {string}
     */
    static get STATE_KEY () {
        return 'Scratch.electronicCraneTower';
    }

    /**
     * @returns {object} metadata for this extension and its blocks.
     */
    getInfo () {
        return {
            id: 'electronicCraneTower',
            name: formatMessage({
                id: 'electronicCraneTower.categoryName',
                default: 'electronicCraneTower',
                description: 'Label for the electronicCraneTower extension category'
            }),
            // menuIconURI: menuIconURI,
            blockIconURI: blockIconURI,
            // showStatusButton: true,
            blocks: [
                {
                    opcode: "leftSlider",
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: "electronicCraneTower.leftSlider",
                        default: "LeftSlider",
                        description: "broadcast message to scratch3-adapter"
                    }),
                    // arguments: {
                    //     DATA: {
                    //         type: ArgumentType.STRING,
                    //         defaultValue: 'LeftSlider'
                            
                    //     }
                    // }
                },
                {
                    opcode: "rightSlider",
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: "electronicCraneTower.rightSlider",
                        default: "RightSlider",
                        description: "broadcast message to scratch3-adapter"
                    }),
                    // arguments: {
                    //     DATA: {
                    //         type: ArgumentType.STRING,
                    //         defaultValue: 'RightSlider'
                            
                    //     }
                    // }
                },
                {
                    opcode: "upHook",
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: "electronicCraneTower.upHook",
                        default: "UpHook",
                        description: "broadcast message to scratch3-adapter"
                    }),
                    // arguments: {
                    //     DATA: {
                    //         type: ArgumentType.STRING,
                    //         defaultValue: 'UpHook'
                            
                    //     }
                    // }
                },
                {
                    opcode: "downHook",
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: "electronicCraneTower.downHook",
                        default: "DownHook",
                        description: "broadcast message to scratch3-adapter"
                    }),
                    // arguments: {
                    //     DATA: {
                    //         type: ArgumentType.STRING,
                    //         defaultValue: 'DownHook'
                            
                    //     }
                    // }
                },
                {
                    opcode: "stop",
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: "electronicCraneTower.stop",
                        default: "Stop",
                        description: "broadcast message to scratch3-adapter"
                    }),
                    // arguments: {
                    //     DATA: {
                    //         type: ArgumentType.STRING,
                    //         defaultValue: 'Stop'
                            
                    //     }
                    // }
                }
            ],
            menus: {}
        };
    }
    leftSlider(args){
        const message = 'LeftSlider';
        this.runtime.socket.emit("actuator", { topic: TOPIC, payload: message });
        return;
    }
    rightSlider(args){
        const message = 'RightSlider';
        this.runtime.socket.emit("actuator", { topic: TOPIC, payload: message });
        return;
    }
    upHook(args){
        const message = 'UpHook';
        this.runtime.socket.emit("actuator", { topic: TOPIC, payload: message });
        return;
    }
    downHook(args){
        const message = 'DownHook';
        this.runtime.socket.emit("actuator", { topic: TOPIC, payload: message });
        return;
    }
    stop(args){
        const message = 'Stop';
        this.runtime.socket.emit("actuator", { topic: TOPIC, payload: message });
        return;
    }
    // broadcastMessage(args) {
    //     const message = args.DATA;
    //     this.runtime.socket.emit("actuator", { topic: TOPIC, payload: message });
        
    //     return;
    // }
}

module.exports = Scratch3ElectronicCraneTowerBlocks;