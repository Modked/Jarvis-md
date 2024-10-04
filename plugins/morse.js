"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("../lib");
(0, lib_1.System)({
    pattern: 'texttomorse ?(.*)',
    fromMe: lib_1.isPrivate,
    desc: 'Converts text to Morse code',
    type: 'converter',
}, function (message, match) { return __awaiter(void 0, void 0, void 0, function () {
    function textToMorse(text) {
        return text.split('').map(function (char) { return morse[char.toUpperCase()] || ''; }).join(' ');
    }
    var morse, text, morseCode;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!!match) return [3 /*break*/, 2];
                return [4 /*yield*/, message.send("*Need a text to turn into Morse code.*\n_Example: .morse hello world_")];
            case 1:
                _a.sent();
                return [2 /*return*/];
            case 2:
                morse = {
                    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
                    'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
                    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..',
                    'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.', 'f': '..-.', 'g': '--.', 'h': '....', 'i': '..', 'j': '.---',
                    'k': '-.-', 'l': '.-..', 'm': '--', 'n': '-.', 'o': '---', 'p': '.--.', 'q': '--.-', 'r': '.-.', 's': '...', 't': '-',
                    'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-', 'y': '-.--', 'z': '--..',
                    '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
                    ' ': '\n'
                };
                text = match;
                morseCode = textToMorse(text);
                return [4 /*yield*/, message.send(morseCode)];
            case 3:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
(0, lib_1.System)({
    pattern: 'morsetotext ?(.*)',
    fromMe: lib_1.isPrivate,
    desc: 'Converts Morse code to text',
    type: 'converter',
}, function (message, match) { return __awaiter(void 0, void 0, void 0, function () {
    function morseToTextConversion(morse) {
        return morse.split(' ').map(function (code) { return morseToText[code] || ''; }).join('');
    }
    var morseToText, morseCode, text;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!!match) return [3 /*break*/, 2];
                return [4 /*yield*/, message.send("*Need Morse code to turn into text.*\n_Example: .morsetotext .... . .-.. .-.. ---_")];
            case 1:
                _a.sent();
                return [2 /*return*/];
            case 2:
                morseToText = {
                    '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E', '..-.': 'F', '--.': 'G', '....': 'H', '..': 'I', '.---': 'J',
                    '-.-': 'K', '.-..': 'L', '--': 'M', '-.': 'N', '---': 'O', '.--.': 'P', '--.-': 'Q', '.-.': 'R', '...': 'S', '-': 'T',
                    '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X', '-.--': 'Y', '--..': 'Z',
                    '-----': '0', '.----': '1', '..---': '2', '...--': '3', '....-': '4', '.....': '5', '-....': '6', '--...': '7', '---..': '8', '----.': '9', ' ': '\n'
                };
                morseCode = match.trim();
                text = morseToTextConversion(morseCode);
                return [4 /*yield*/, message.send(text)];
            case 3:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });

/*
________                         ______  ___              
____  _/___________________      ___   |/  /_____ _______ 
 __  / __  ___/  __ \_  __ \     __  /|_/ /_  __ `/_  __ \
__/ /  _  /   / /_/ /  / / /     _  /  / / / /_/ /_  / / /
/___/  /_/    \____//_/ /_/      /_/  /_/  \__,_/ /_/ /_/                                                           
*/