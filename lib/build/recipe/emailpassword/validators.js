"use strict";
/* Copyright (c) 2021, VRAI Labs and/or its affiliates. All rights reserved.
 *
 * This software is licensed under the Apache License, Version 2.0 (the
 * "License") as published by the Apache Software Foundation.
 *
 * You may not use this file except in compliance with the License. You may
 * obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */
var __awaiter =
    (this && this.__awaiter) ||
    function (thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P
                ? value
                : new P(function (resolve) {
                      resolve(value);
                  });
        }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator["throw"](value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
var __generator =
    (this && this.__generator) ||
    function (thisArg, body) {
        var _ = {
                label: 0,
                sent: function () {
                    if (t[0] & 1) throw t[1];
                    return t[1];
                },
                trys: [],
                ops: [],
            },
            f,
            y,
            t,
            g;
        return (
            (g = { next: verb(0), throw: verb(1), return: verb(2) }),
            typeof Symbol === "function" &&
                (g[Symbol.iterator] = function () {
                    return this;
                }),
            g
        );
        function verb(n) {
            return function (v) {
                return step([n, v]);
            };
        }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (
                        ((f = 1),
                        y &&
                            (t =
                                op[0] & 2
                                    ? y["return"]
                                    : op[0]
                                    ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                                    : y.next) &&
                            !(t = t.call(y, op[1])).done)
                    )
                        return t;
                    if (((y = 0), t)) op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (
                                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                                (op[0] === 6 || op[0] === 2)
                            ) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2]) _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                } catch (e) {
                    op = [6, e];
                    y = 0;
                } finally {
                    f = t = 0;
                }
            if (op[0] & 5) throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    };
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * defaultEmailValidator.
 */
function defaultEmailValidator(value) {
    return __awaiter(this, void 0, void 0, function () {
        var defaultEmailValidatorRegexp;
        return __generator(this, function (_a) {
            if (typeof value !== "string") {
                return [2 /*return*/, "ERROR_EMAIL_NON_STRING"];
            }
            defaultEmailValidatorRegexp =
                // eslint-disable-next-line no-useless-escape
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            // We check if the email syntax is correct
            // As per https://github.com/supertokens/supertokens-auth-react/issues/5#issuecomment-709512438
            // Regex from https://stackoverflow.com/a/46181/3867175
            if (value.match(defaultEmailValidatorRegexp) === null) {
                return [2 /*return*/, "ERROR_EMAIL_INVALID"];
            }
            return [2 /*return*/, undefined];
        });
    });
}
exports.defaultEmailValidator = defaultEmailValidator;
/*
 * defaultPasswordValidator.
 * min 8 characters.
 * Contains lowercase, uppercase, and numbers.
 */
function defaultPasswordValidator(value) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (typeof value !== "string") {
                return [2 /*return*/, "ERROR_PASSWORD_NON_STRING"];
            }
            // length >= 8 && < 100
            // must have a number and a character
            // as per https://github.com/supertokens/supertokens-auth-react/issues/5#issuecomment-709512438
            if (value.length < 8) {
                return [2 /*return*/, "ERROR_PASSWORD_TOO_SHORT"];
            }
            if (value.length >= 100) {
                return [2 /*return*/, "ERROR_PASSWORD_TOO_LONG"];
            }
            if (value.match(/^.*[A-Za-z]+.*$/) === null) {
                return [2 /*return*/, "ERROR_PASSWORD_NO_ALPHA"];
            }
            if (value.match(/^.*[0-9]+.*$/) === null) {
                return [2 /*return*/, "ERROR_PASSWORD_NO_NUM"];
            }
            return [2 /*return*/, undefined];
        });
    });
}
exports.defaultPasswordValidator = defaultPasswordValidator;
/*
 * defaultLoginPasswordValidator.
 * type string
 */
function defaultLoginPasswordValidator(value) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (typeof value !== "string") {
                return [2 /*return*/, "ERROR_PASSWORD_NON_STRING"];
            }
            return [2 /*return*/, undefined];
        });
    });
}
exports.defaultLoginPasswordValidator = defaultLoginPasswordValidator;
/*
 * defaultValidate
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function defaultValidate(_) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, undefined];
        });
    });
}
exports.defaultValidate = defaultValidate;
