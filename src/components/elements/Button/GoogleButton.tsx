import {useGoogleLogin} from "@react-oauth/google";
import styled from "@emotion/styled";
import {Button} from "@/components/elements/Button/Button";


const StyledGoogleButton = styled(Button)`
    background: ${({theme}) => theme.font.white};
    border-radius: 999px;
    backdrop-filter: blur(15px);
    width: 100%;
    span{
        font-family: Urbanist;
        font-size: 16px;
        color: ${({theme}) => theme.font.black};
        font-style: normal;
        font-weight: 600;
        line-height: 24px; 
    }
`

export const GoogleButton = () => {

    const login = useGoogleLogin({
        onSuccess: (tokenResponse) => {
            console.log('Token Response:', tokenResponse);
        },
        onError: () => {
            console.error('Google Login Failed');
        },
    });

    return (
        <StyledGoogleButton onClick={() => login()} iconClass="w-[20px] h-[20px]" icon="Google" height="56px"
                            title="Continue with Email"/>
    )
}
