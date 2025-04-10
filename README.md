# EasyKeybind: Installation and Notes

This resource adds a simplified system for creating Keybinds ingame.

## Requirements
* RAGE Multiplayer 1.1 and above

## Installing
* Put the folder into 'client_packages' (client_packages/easykeybind).
* Add require('easykeybind') to 'client_packages/index.js'.

## Clientside API
```js
/**
 * Adds a new keybind to the system with specified behavior.
 * @param {string} keybindName - Unique identifier for the keybind (e.g., "OpenMenu").
 * @param {string} virtualKey - Virtual key code in hex format (e.g., "0x41" for A key).
 * @param {boolean} onKeyUp - If true, the keybind triggers on key release; otherwise, on key press.
 * @param {Function} functionToExecute - Callback function to execute when the keybind is triggered.
 * @param {boolean} [holdKeyToExecute=false] - If true, the key must be held for holdKeyTime to trigger.
 * @param {number} [holdKeyTime=0] - Duration in milliseconds to hold the key if holdKeyToExecute is true.
 * @param {boolean} [showHoldBar=false] - If true, displays a progress bar during the hold duration.
 * @returns {boolean} True if the keybind was added successfully, false if it already exists or invalid.
 */
mp.helper.keybind.add = function(keybindName, virtualKey, onKeyUp, functionToExecute, holdKeyToExecute = false, holdKeyTime = 0, showHoldBar = false);

/**
 * Removes a keybind from the system.
 * @param {string} keybindName - Identifier of the keybind to remove (e.g., "OpenMenu").
 * @param {boolean} [removeFromArray=true] - If true, removes the keybind from the internal array.
 * @returns {boolean} True if the keybind was removed, false if it does not exist.
 */
mp.helper.keybind.remove = function(keybindName, removeFromArray = true);

/**
 * Retrieves the key code for a given virtual key.
 * @param {string} virtualKey - Virtual key code in hex format (e.g., "0x41" for A key).
 * @returns {number} The corresponding key code, or undefined if not found.
 */
mp.helper.keybind.getKeyCodeFromVirtualKey = function(virtualKey);

/**
 * Retrieves the virtual key for a given key code.
 * @param {number} keyCode - The key code to convert (e.g., 65 for A key).
 * @returns {string} The corresponding virtual key in hex format, or undefined if not found.
 */
mp.helper.keybind.getVirtualKeyFromKeyCode = function(keyCode);

/**
 * Retrieves the hex key for a given key code.
 * @param {number} keyCode - The key code to convert (e.g., 65 for A key).
 * @returns {number} The corresponding hex key, or undefined if not found.
 */
mp.helper.keybind.getHexKeyFromKeyCode = function(keyCode);

/**
 * Marks a keybind as user-selected.
 * @param {string} keybindName - Identifier of the keybind (e.g., "OpenMenu").
 * @param {boolean} toggle - True to mark as user-selected, false to unmark.
 * @returns {boolean} True if the keybind was updated, false if it does not exist.
 */
mp.helper.keybind.setKeybindAsUserSelected = function(keybindName, toggle);

/**
 * Removes all user-selected keybinds from the system.
 * @returns {number} The number of keybinds removed.
 */
mp.helper.keybind.unloadAllUserSelectedKeybinds = function();

/**
 * Checks if a keybind exists in the system.
 * @param {string} keybindName - Identifier of the keybind (e.g., "OpenMenu").
 * @returns {boolean} True if the keybind exists, false otherwise.
 */
mp.helper.keybind.keybindExists = function(keybindName);

/**
 * Retrieves the keybind object for a given keybind name.
 * @param {string} keybindName - Identifier of the keybind (e.g., "OpenMenu").
 * @returns {object|undefined} The keybind object if found, undefined otherwise.
 */
mp.helper.keybind.getKeybindObject = function(keybindName);
```
