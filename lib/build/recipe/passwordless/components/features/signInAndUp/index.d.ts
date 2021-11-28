import { PureComponent } from "react";
import Recipe from "../../../recipe";
import { RecipeInterface, LoginAttemptInfo } from "../../../types";
import { FeatureBaseProps } from "../../../../../types";
declare type SignInUpState = {
    error: string | undefined;
    loaded: boolean;
    loginAttemptInfo: LoginAttemptInfo | undefined;
};
declare type PropType = FeatureBaseProps & {
    recipe: Recipe;
};
declare class SignInUp extends PureComponent<PropType, SignInUpState> {
    constructor(props: PropType);
    getIsEmbedded: () => boolean;
    getModifiedRecipeImplementation: () => RecipeInterface;
    componentDidMount: () => Promise<void>;
    render: () => JSX.Element;
}
export default SignInUp;
