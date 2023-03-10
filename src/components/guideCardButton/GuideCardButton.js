import {
    CardButtonStyle,
    StyledImgDiv,
    StyledContentDiv,
    StyledTitleFont,
} from './GuideCardButtonStyle'

import { useNavigate } from 'react-router-dom';

export default function GuideCardButton({ title }) {

    // const [isClip, setClip] = useState(false);

    const navigate = useNavigate();
    const move = () => {
        navigate('/guide/detail', {
            state: {
                title: title,
            }
        });
    }

    return (
        <CardButtonStyle>
            <div onClick={move}>

                <StyledImgDiv />
                <StyledContentDiv>
                    <StyledTitleFont>{title}</StyledTitleFont>
                </StyledContentDiv>

            </div>
        </CardButtonStyle>

    );
}