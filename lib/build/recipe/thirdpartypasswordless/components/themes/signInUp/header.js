"use strict";
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, "__esModule", { value: true });
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
/** @jsx jsx */
var react_1 = require("@emotion/react");
var react_2 = require("react");
var __1 = require("../../../../..");
var withOverride_1 = require("../../../../../components/componentOverride/withOverride");
var styleContext_1 = __importDefault(require("../../../../../styles/styleContext"));
/*
 * Component.
 */
exports.Header = withOverride_1.withOverride("ThirdPartyPasswordlessHeader", function ThirdPartyPasswordlessHeader() {
    var styles = react_2.useContext(styleContext_1.default);
    var t = __1.useTranslation();
    return react_1.jsx(
        react_2.Fragment,
        null,
        react_1.jsx(
            "div",
            { "data-supertokens": "headerTitle", css: styles.headerTitle },
            t("THIRD_PARTY_PASSWORDLESS_SIGN_IN_AND_UP_HEADER_TITLE")
        ),
        react_1.jsx("div", { "data-supertokens": "divider", css: styles.divider })
    );
});
