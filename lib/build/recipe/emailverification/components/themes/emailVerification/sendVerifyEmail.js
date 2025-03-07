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
/*
 * Imports.
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
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var react_1 = require("@emotion/react");
var react_2 = require("react");
var styleContext_1 = __importDefault(require("../../../../../styles/styleContext"));
var arrowRightIcon_1 = __importDefault(require("../../../../../components/assets/arrowRightIcon"));
var emailLargeIcon_1 = __importDefault(require("../../../../../components/assets/emailLargeIcon"));
var withOverride_1 = require("../../../../../components/componentOverride/withOverride");
var translationContext_1 = require("../../../../../translation/translationContext");
var generalError_1 = __importDefault(require("../../../../emailpassword/components/library/generalError"));
exports.EmailVerificationSendVerifyEmail = function (props) {
    var styles = react_2.useContext(styleContext_1.default);
    var t = translationContext_1.useTranslation();
    var _a = react_2.useState("READY"),
        status = _a[0],
        setStatus = _a[1];
    var resendEmail = function () {
        return __awaiter(void 0, void 0, void 0, function () {
            var response, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [
                            4 /*yield*/,
                            props.recipeImplementation.sendVerificationEmail({
                                config: props.config,
                            }),
                        ];
                    case 1:
                        response = _a.sent();
                        if (!(response.status === "EMAIL_ALREADY_VERIFIED_ERROR")) return [3 /*break*/, 3];
                        return [4 /*yield*/, props.onEmailAlreadyVerified()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        if (response.status === "OK") {
                            setStatus("EMAIL_RESENT");
                        }
                        _a.label = 4;
                    case 4:
                        return [3 /*break*/, 6];
                    case 5:
                        e_1 = _a.sent();
                        setStatus("ERROR");
                        return [3 /*break*/, 6];
                    case 6:
                        return [2 /*return*/];
                }
            });
        });
    };
    react_2.useEffect(
        function () {
            var abort = new AbortController();
            void (function () {
                return __awaiter(this, void 0, void 0, function () {
                    var response;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                return [
                                    4 /*yield*/,
                                    props.recipeImplementation.sendVerificationEmail({
                                        config: props.config,
                                    }),
                                ];
                            case 1:
                                response = _a.sent();
                                if (abort.signal.aborted) {
                                    return [2 /*return*/];
                                }
                                if (!(response.status === "EMAIL_ALREADY_VERIFIED_ERROR")) return [3 /*break*/, 3];
                                return [4 /*yield*/, props.onEmailAlreadyVerified()];
                            case 2:
                                _a.sent();
                                _a.label = 3;
                            case 3:
                                return [2 /*return*/];
                        }
                    });
                });
            })();
            return function () {
                abort.abort();
            };
        },
        [props.recipeImplementation, props.onEmailAlreadyVerified, props.config]
    );
    var signOut = props.signOut;
    return react_1.jsx(
        "div",
        { "data-supertokens": "container", css: styles.container },
        react_1.jsx(
            "div",
            { "data-supertokens": "row", css: styles.row },
            status === "ERROR" && react_1.jsx(generalError_1.default, { error: "SOMETHING_WENT_WRONG_ERROR" }),
            status === "EMAIL_RESENT" &&
                react_1.jsx(
                    "div",
                    { "data-supertokens": "generalSuccess", css: styles.generalSuccess },
                    t("EMAIL_VERIFICATION_RESEND_SUCCESS")
                ),
            react_1.jsx(
                "div",
                { "data-supertokens": "sendVerifyEmailIcon", css: styles.sendVerifyEmailIcon },
                react_1.jsx(emailLargeIcon_1.default, null)
            ),
            react_1.jsx(
                "div",
                {
                    "data-supertokens": "headerTitle headerTinyTitle",
                    css: [styles.headerTitle, styles.headerTinyTitle],
                },
                t("EMAIL_VERIFICATION_SEND_TITLE")
            ),
            react_1.jsx(
                "div",
                {
                    "data-supertokens": "primaryText sendVerifyEmailText",
                    css: [styles.primaryText, styles.sendVerifyEmailText],
                },
                t("EMAIL_VERIFICATION_SEND_DESC_START"),
                react_1.jsx("strong", null, t("EMAIL_VERIFICATION_SEND_DESC_STRONG")),
                t("EMAIL_VERIFICATION_SEND_DESC_END")
            ),
            status !== "EMAIL_RESENT" &&
                react_1.jsx(
                    "div",
                    {
                        "data-supertokens": "link sendVerifyEmailResend",
                        css: [styles.link, styles.sendVerifyEmailResend],
                        onClick: resendEmail,
                    },
                    t("EMAIL_VERIFICATION_RESEND_BTN")
                ),
            react_1.jsx(
                "div",
                {
                    "data-supertokens": "secondaryText secondaryLinkWithArrow",
                    css: [styles.secondaryText, styles.secondaryLinkWithArrow],
                    onClick: function () {
                        return signOut();
                    },
                },
                t("EMAIL_VERIFICATION_LOGOUT"),
                react_1.jsx(arrowRightIcon_1.default, { color: styles.palette.colors.textPrimary })
            )
        )
    );
};
exports.SendVerifyEmail = withOverride_1.withOverride(
    "EmailVerificationSendVerifyEmail",
    exports.EmailVerificationSendVerifyEmail
);
