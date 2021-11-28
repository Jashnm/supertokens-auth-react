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

/** @jsx jsx */
import { jsx } from "@emotion/react";
import { SignInUpMobileFormProps } from "../../../types";
import { withOverride } from "../../../../../components/componentOverride/withOverride";
import FormBase from "../../../../emailpassword/components/library/formBase";
import { defaultPhoneNumberValidator } from "../../../validators";

export const MobileForm = withOverride(
    "PasswordlessMobileForm",
    function PasswordlessMobileForm(
        props: SignInUpMobileFormProps & {
            header?: JSX.Element;
            footer?: JSX.Element;
        }
    ): JSX.Element {
        return (
            <FormBase
                formFields={[
                    {
                        id: "phoneNumber",
                        label: "Mobile",
                        optional: false,
                        placeholder: "+16175551212",
                        validate: props.config.validatePhoneNumber || defaultPhoneNumberValidator,
                    },
                ]}
                buttonLabel={"CONTINUE"}
                onSuccess={props.onSuccess}
                callAPI={async (formFields) => {
                    const phoneNumber = formFields.find((field) => field.id === "phoneNumber")?.value;
                    if (phoneNumber === undefined) {
                        return {
                            status: "GENERAL_ERROR",
                            message: "Please set your phone number",
                        };
                    }
                    const response = await props.recipeImplementation.createCode({
                        phoneNumber,
                        config: props.config,
                    });

                    if (response.status === "RESTART_FLOW_ERROR") {
                        return {
                            status: "GENERAL_ERROR",
                            message: "Something went wrong, please try again.",
                        };
                    }
                    return response;
                }}
                validateOnBlur={false}
                showLabels={true}
                header={props.header}
                footer={props.footer}
                error={props.error}
            />
        );
    }
);
