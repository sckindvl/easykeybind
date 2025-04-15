// Register mp.helper:
mp.helper = {};

// Data:
var virtualKeyArray = [
    {virtualKey:"0x01", keyCode: 1, hexKey: 0x01}, // Left mouse button
    {virtualKey:"0x02", keyCode: 2, hexKey: 0x02}, // Right mouse button
    {virtualKey:"0x03", keyCode: 3, hexKey: 0x03}, // Control-break processing
    {virtualKey:"0x04", keyCode: 4, hexKey: 0x04}, // Middle mouse button (three-button mouse)
    {virtualKey:"0x05", keyCode: 5, hexKey: 0x05}, // X1 mouse button
    {virtualKey:"0x06", keyCode: 6, hexKey: 0x06}, // X2 mouse button
    {virtualKey:"0x08", keyCode: 8, hexKey: 0x08}, // BACKSPACE key
    {virtualKey:"0x09", keyCode: 9, hexKey: 0x09}, // TAB key
    {virtualKey:"0x0C", keyCode: 12, hexKey: 0x0C}, // CLEAR key
    {virtualKey:"0x0D", keyCode: 13, hexKey: 0x0D}, // ENTER key
    {virtualKey:"0x10", keyCode: 16, hexKey: 0x10}, // SHIFT key
    {virtualKey:"0x11", keyCode: 17, hexKey: 0x11}, // CTRL key
    {virtualKey:"0x12", keyCode: 18, hexKey: 0x12}, // ALT key
    {virtualKey:"0x13", keyCode: 19, hexKey: 0x13}, // PAUSE key
    {virtualKey:"0x14", keyCode: 20, hexKey: 0x14}, // CAPS LOCK key
    {virtualKey:"0x1B", keyCode: 27, hexKey: 0x1B}, // ESC key
    {virtualKey:"0x20", keyCode: 32, hexKey: 0x20}, // SPACEBAR
    {virtualKey:"0x21", keyCode: 33, hexKey: 0x21}, // PAGE UP key
    {virtualKey:"0x22", keyCode: 34, hexKey: 0x22}, // PAGE DOWN key
    {virtualKey:"0x23", keyCode: 35, hexKey: 0x23}, // END key
    {virtualKey:"0x24", keyCode: 36, hexKey: 0x24}, // HOME key
    {virtualKey:"0x25", keyCode: 37, hexKey: 0x25}, // LEFT ARROW key
    {virtualKey:"0x26", keyCode: 38, hexKey: 0x26}, // UP ARROW key
    {virtualKey:"0x27", keyCode: 39, hexKey: 0x27}, // RIGHT ARROW key
    {virtualKey:"0x28", keyCode: 40, hexKey: 0x28}, // DOWN ARROW key
    {virtualKey:"0x29", keyCode: 41, hexKey: 0x29}, // SELECT key
    {virtualKey:"0x2A", keyCode: 42, hexKey: 0x2A}, // PRINT key
    {virtualKey:"0x2B", keyCode: 43, hexKey: 0x2B}, // EXECUTE key
    {virtualKey:"0x2C", keyCode: 44, hexKey: 0x2C}, // PRINT SCREEN key
    {virtualKey:"0x2D", keyCode: 45, hexKey: 0x2D}, // INS key
    {virtualKey:"0x2E", keyCode: 46, hexKey: 0x2E}, // DEL key
    {virtualKey:"0x2F", keyCode: 47, hexKey: 0x2F}, // HELP key
    {virtualKey:"0x30", keyCode: 48, hexKey: 0x30}, // 0 key
    {virtualKey:"0x31", keyCode: 49, hexKey: 0x31}, // 1 key
    {virtualKey:"0x32", keyCode: 50, hexKey: 0x32}, // 2 key
    {virtualKey:"0x33", keyCode: 51, hexKey: 0x33}, // 3 key
    {virtualKey:"0x34", keyCode: 52, hexKey: 0x34}, // 4 key
    {virtualKey:"0x35", keyCode: 53, hexKey: 0x35}, // 5 key
    {virtualKey:"0x36", keyCode: 54, hexKey: 0x36}, // 6 key
    {virtualKey:"0x37", keyCode: 55, hexKey: 0x37}, // 7 key
    {virtualKey:"0x38", keyCode: 56, hexKey: 0x38}, // 8 key
    {virtualKey:"0x39", keyCode: 57, hexKey: 0x39}, // 9 key
    {virtualKey:"0x41", keyCode: 65, hexKey: 0x41}, // A key
    {virtualKey:"0x42", keyCode: 66, hexKey: 0x42}, // B key
    {virtualKey:"0x43", keyCode: 67, hexKey: 0x43}, // C key
    {virtualKey:"0x44", keyCode: 68, hexKey: 0x44}, // D key
    {virtualKey:"0x45", keyCode: 69, hexKey: 0x45}, // E key
    {virtualKey:"0x46", keyCode: 70, hexKey: 0x46}, // F key
    {virtualKey:"0x47", keyCode: 71, hexKey: 0x47}, // G key
    {virtualKey:"0x48", keyCode: 72, hexKey: 0x48}, // H key
    {virtualKey:"0x49", keyCode: 73, hexKey: 0x49}, // I key
    {virtualKey:"0x4A", keyCode: 74, hexKey: 0x4A}, // J key
    {virtualKey:"0x4B", keyCode: 75, hexKey: 0x4B}, // K key
    {virtualKey:"0x4C", keyCode: 76, hexKey: 0x4C}, // L key
    {virtualKey:"0x4D", keyCode: 77, hexKey: 0x4D}, // M key
    {virtualKey:"0x4E", keyCode: 78, hexKey: 0x4E}, // N key
    {virtualKey:"0x4F", keyCode: 79, hexKey: 0x4F}, // O key
    {virtualKey:"0x50", keyCode: 80, hexKey: 0x50}, // P key
    {virtualKey:"0x51", keyCode: 81, hexKey: 0x51}, // Q key
    {virtualKey:"0x52", keyCode: 82, hexKey: 0x52}, // R key
    {virtualKey:"0x53", keyCode: 83, hexKey: 0x53}, // S key
    {virtualKey:"0x54", keyCode: 84, hexKey: 0x54}, // T key
    {virtualKey:"0x55", keyCode: 85, hexKey: 0x55}, // U key
    {virtualKey:"0x56", keyCode: 86, hexKey: 0x56}, // V key
    {virtualKey:"0x57", keyCode: 87, hexKey: 0x57}, // W key
    {virtualKey:"0x58", keyCode: 88, hexKey: 0x58}, // X key
    {virtualKey:"0x59", keyCode: 89, hexKey: 0x59}, // Y key
    {virtualKey:"0x5A", keyCode: 90, hexKey: 0x5A}, // Z key
    {virtualKey:"0x5B", keyCode: 91, hexKey: 0x5B}, // Left Windows Key (Natural keyboard)
    {virtualKey:"0x5C", keyCode: 92, hexKey: 0x5C}, // Right Windows Key (Natural keyboard)
    {virtualKey:"0x5D", keyCode: 93, hexKey: 0x5D}, // Applications key (Natural keyboard)
    {virtualKey:"0x60", keyCode: 96, hexKey: 0x60}, // Numeric keypad 0 key
    {virtualKey:"0x61", keyCode: 97, hexKey: 0x61}, // Numeric keypad 1 key
    {virtualKey:"0x62", keyCode: 98, hexKey: 0x62}, // Numeric keypad 2 key
    {virtualKey:"0x63", keyCode: 99, hexKey: 0x63}, // Numeric keypad 3 key
    {virtualKey:"0x64", keyCode: 100, hexKey: 0x64}, // Numeric keypad 4 key
    {virtualKey:"0x65", keyCode: 101, hexKey: 0x65}, // Numeric keypad 5 key
    {virtualKey:"0x66", keyCode: 102, hexKey: 0x66}, // Numeric keypad 6 key
    {virtualKey:"0x67", keyCode: 103, hexKey: 0x67}, // Numeric keypad 7 key
    {virtualKey:"0x68", keyCode: 104, hexKey: 0x68}, // Numeric keypad 8 key
    {virtualKey:"0x69", keyCode: 105, hexKey: 0x69}, // Numeric keypad 9 key
    {virtualKey:"0x6A", keyCode: 106, hexKey: 0x6A}, // Multiply key
    {virtualKey:"0x6B", keyCode: 107, hexKey: 0x6B}, // Add key
    {virtualKey:"0x6C", keyCode: 108, hexKey: 0x6C}, // Seperator key
    {virtualKey:"0x6D", keyCode: 109, hexKey: 0x6D}, // Subtract key
    {virtualKey:"0x6E", keyCode: 110, hexKey: 0x6E}, // Decimal key
    {virtualKey:"0x6F", keyCode: 111, hexKey: 0x6F}, // Divide key
    {virtualKey:"0x70", keyCode: 112, hexKey: 0x70}, // F1 key
    {virtualKey:"0x71", keyCode: 113, hexKey: 0x71}, // F2 key
    {virtualKey:"0x72", keyCode: 114, hexKey: 0x72}, // F3 key
    {virtualKey:"0x73", keyCode: 115, hexKey: 0x73}, // F4 key
    {virtualKey:"0x74", keyCode: 116, hexKey: 0x74}, // F5 key
    {virtualKey:"0x75", keyCode: 117, hexKey: 0x75}, // F6 key
    {virtualKey:"0x76", keyCode: 118, hexKey: 0x76}, // F7 key
    {virtualKey:"0x77", keyCode: 119, hexKey: 0x77}, // F8 key
    {virtualKey:"0x78", keyCode: 120, hexKey: 0x78}, // F9 key
    {virtualKey:"0x79", keyCode: 121, hexKey: 0x79}, // F10 key
    {virtualKey:"0x7A", keyCode: 122, hexKey: 0x7A}, // F11 key
    {virtualKey:"0x7B", keyCode: 123, hexKey: 0x7B} // F12 key
];

class Keybind {
    constructor(name, key, keyup, func, antispamMs = 0) {
        this.keybindName = name;
        this.virtualKey = key;
        this.onKeyUp = keyup;
        this.functionToExecute = func;
        this.isCurrentlyPressed = false;
        this.rageKeybind = null;
        this.antispamMs = antispamMs;
        this.lastPressed = Date.now();
    }
}

var keybinds = [];
mp.helper.keybind = {};
const debuggingEnabled = false;
const allowKeybindsInChat = false;

function getKeybindWithName(keybindName, array) {
    if (keybindName === null) return;
    var result = array.filter(function(o) { return o.keybindName === keybindName; });
    return result? result[0] : null; // or undefined
}

function existsKeybindNameInArray(keybindName, array) {
    return !!array.some(item => item.keybindName === keybindName);
}

function existsKeybindInArray(keybind, array) {
    return !!array.some(item => item.rageKeybind === keybind);
}

function removeKeybindFromArray(array, keybind) {
    var i = 0;
    while (i < array.length) {
        if (array[i] === keybind) {
            array.splice(i, 1);
        } else {
            ++i;
        }
    }
    return array;
}

function getKeyCodeFromVirtualKey(virtualKey) {
    var found = virtualKeyArray.filter(function(item) { return item.virtualKey === virtualKey; });
    return found[0].keyCode;
}

function getVirtualKeyFromKeyCode(keyCode) {
    var found = virtualKeyArray.filter(function(item) { return item.keyCode === parseInt(keyCode); });
    return found[0].virtualKey;
}

function getHexKeyFromKeyCode(keyCode) {
    var found = virtualKeyArray.filter(function(item) { return item.keyCode === parseInt(keyCode); });
    return found[0].hexKey;
}

/**
 * Adds a new keybind to the system with specified behavior.
 * @param {string} keybindName - Unique identifier for the keybind (e.g., "OpenMenu").
 * @param {string} virtualKey - Virtual key code in hex format (e.g., "0x41" for A key).
 * @param {boolean} onKeyUp - If true, the keybind triggers on key release; otherwise, on key press.
 * @param {Function} functionToExecute - Callback function to execute when the keybind is triggered.
 * @returns {boolean} True if the keybind was added successfully, false if it already exists or invalid.
 */
mp.helper.keybind.add = function(keybindName, virtualKey, onKeyUp, functionToExecute, antispamMs) {
    if (functionToExecute === null) return;
    if (existsKeybindNameInArray(keybindName, keybinds)) {
        mp.console.logError(`[easyKeybind-Error]: ${keybindName} already exists in the list, Keybind has not been added!`);
        return;
    }

    var keybind = new Keybind(keybindName, virtualKey, onKeyUp, functionToExecute, antispamMs);
    keybinds.push(keybind);

    keybind.rageKeybind = mp.keys.bind(parseInt(virtualKey), onKeyUp, function() {
        if (keybind.antispamMs > 0) {
            if (Date.now() - keybind.lastPressed < keybind.antispamMs) {
                if (debuggingEnabled === true) {
                    mp.console.logInfo("[easyKeybind-Log]: You pressed the keybind too early.");
                }
                return;
            }
        }
        keybind.lastPressed = Date.now();

        if (!mp.players.local.isTypingInTextChat && !allowKeybindsInChat) {
            keybind.functionToExecute();
            if (debuggingEnabled === true) {
                mp.console.logInfo("[easyKeybind-Log]: Executed keybind " + keybindName + ".");
            }
        }
    });

    if (debuggingEnabled === true) {
        mp.console.logInfo(`[easyKeybind-Log]: Added Keybind ${keybindName} with virtual key ${virtualKey}.`);
    }
}

/**
 * Removes a keybind from the system.
 * @param {string} keybindName - Identifier of the keybind to remove (e.g., "OpenMenu").
 * @param {boolean} [removeFromArray=true] - If true, removes the keybind from the internal array.
 * @returns {boolean} True if the keybind was removed, false if it does not exist.
 */
mp.helper.keybind.remove = function(keybindName, removeFromArray = true) {
    if (!existsKeybindNameInArray(keybindName, keybinds)) return;

    var searchedKeybind = getKeybindWithName(keybindName, keybinds);
    if (searchedKeybind != null) {
        mp.keys.unbind(searchedKeybind.virtualKey, searchedKeybind.onKeyUp, searchedKeybind.functionToExecute);
        if (removeFromArray) {
            removeKeybindFromArray(keybinds, searchedKeybind);
        }

        if (debuggingEnabled) {
            mp.console.logInfo(`[easyKeybind-Log]: Removed Keybind ${keybindName}.`);
        }
    }
}

/**
 * Retrieves the key code for a given virtual key.
 * @param {string} virtualKey - Virtual key code in hex format (e.g., "0x41" for A key).
 * @returns {number} The corresponding key code, or undefined if not found.
 */
mp.helper.keybind.getKeyCodeFromVirtualKey = function(virtualKey) {
    return getKeyCodeFromVirtualKey(virtualKey);
}

/**
 * Retrieves the virtual key for a given key code.
 * @param {number} keyCode - The key code to convert (e.g., 65 for A key).
 * @returns {string} The corresponding virtual key in hex format, or undefined if not found.
 */
mp.helper.keybind.getVirtualKeyFromKeyCode = function(keyCode) {
    return getVirtualKeyFromKeyCode(keyCode);
}

/**
 * Retrieves the hex key for a given key code.
 * @param {number} keyCode - The key code to convert (e.g., 65 for A key).
 * @returns {number} The corresponding hex key, or undefined if not found.
 */
mp.helper.keybind.getHexKeyFromKeyCode = function(keyCode) {
    return getHexKeyFromKeyCode(keyCode);
}

/**
 * Retrieves the keybind object for a given keybind name.
 * @param {string} keybindName - Identifier of the keybind (e.g., "OpenMenu").
 * @returns {object|undefined} The keybind object if found, undefined otherwise.
 */
mp.helper.keybind.getKeybindObject = function(keybindName) {
    return getKeybindWithName(keybindName);
}